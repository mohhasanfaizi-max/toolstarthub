import { statSync } from "node:fs";
import { getToolContent } from "../../data/tool-content.ts";
import { extraToolQuickAnswers } from "../../data/extra-tool-content.ts";
import { getRelatedTools, getToolBySlug, searchTools, tools } from "../../data/tools.ts";
import { bannedPhraseIssues, collectText, markdownFormattingIssues } from "../content-style.ts";
import { PRODUCTION_SITE_URL } from "../site.ts";
import {
  FACE_LANDMARKER_LANDMARKS,
  FACE_SHAPE_ANCHORS,
  FACE_SHAPE_FIXTURES,
  FACE_SHAPES,
  REQUIRED_LANDMARK_COUNT,
  classifyFaceShape,
  estimateFaceShape,
  measureFace,
  syntheticFaceLandmarks,
} from "./face-shape.ts";
import {
  FACE_SHAPE_FIRST_RUN_BYTES,
  FACE_SHAPE_MODEL_BYTES,
  FACE_SHAPE_PANEL_LEAD,
  FACE_SHAPE_WASM_BYTES,
  FACE_SHAPE_WASM_JS_BYTES,
  faceShapeFirstRunMegabytes,
} from "./face-shape-landmarker.ts";
import { validateImageFile } from "./image.ts";

type Assert = (condition: unknown, message: string) => void;

export function runFaceShapeChecks(assert: Assert): void {
  for (const shape of FACE_SHAPES) {
    const estimated = estimateFaceShape(FACE_SHAPE_FIXTURES[shape]);
    assert(estimated.ok, `${shape} fixture can be measured`);
    if (estimated.ok) {
      assert(estimated.result.primary === shape, `${shape} fixture classifies as ${shape}, got ${estimated.result.primary}`);
      assert(estimated.result.landmarkCount === FACE_LANDMARKER_LANDMARKS, `${shape} fixture reports 478 landmarks`);
    }
  }

  const borderlineOval = syntheticFaceLandmarks({
    length: 0.46,
    forehead: 0.29,
    cheek: 0.3,
    jaw: 0.27,
  });
  const ovalish = estimateFaceShape(borderlineOval);
  assert(ovalish.ok, "A longer oval still measures");
  if (ovalish.ok) {
    assert(
      ovalish.result.primary === "oval" || ovalish.result.primary === "oblong" || ovalish.result.secondary === "oblong",
      "A longer oval is oval, oblong, or lists oblong as secondary",
    );
  }

  const missing = estimateFaceShape([]);
  assert(!missing.ok, "Empty landmarks are rejected");
  const short = estimateFaceShape(Array.from({ length: 10 }, () => ({ x: 0.5, y: 0.5 })));
  assert(!short.ok, "A short landmark list is rejected");
  const nanPoints = syntheticFaceLandmarks({ length: 0.4, forehead: 0.3, cheek: 0.3, jaw: 0.25 });
  nanPoints[10] = { x: Number.NaN, y: 0.2 };
  assert(!estimateFaceShape(nanPoints).ok, "NaN landmarks are rejected");

  const tilted = syntheticFaceLandmarks({
    length: 0.42,
    forehead: 0.29,
    cheek: 0.31,
    jaw: 0.26,
    rollDegrees: 18,
  });
  const tiltedResult = estimateFaceShape(tilted);
  assert(tiltedResult.ok && tiltedResult.result.primary === "oval", "An 18 degree roll still classifies the oval fixture");
  if (tiltedResult.ok) {
    assert(
      tiltedResult.result.warnings.some((warning) => warning.toLowerCase().includes("tilt")),
      "A tilted face adds a tilt warning",
    );
  }

  const tiny = syntheticFaceLandmarks({
    length: 0.08,
    forehead: 0.05,
    cheek: 0.055,
    jaw: 0.045,
    top: 0.46,
  });
  const tinyResult = measureFace(tiny);
  assert(tinyResult.ok, "A small but valid face still measures");
  if (tinyResult.ok) {
    assert(
      tinyResult.warnings.some((warning) => warning.toLowerCase().includes("small")),
      "A small face in the frame is flagged",
    );
  }

  const measured = measureFace(FACE_SHAPE_FIXTURES.heart);
  assert(measured.ok, "Heart fixture measures");
  if (measured.ok) {
    assert(measured.measurements.foreheadToCheek > 1, "Heart forehead is wider than the cheeks");
    assert(measured.measurements.jawToCheek < 1, "Heart jaw is narrower than the cheeks");
    const classified = classifyFaceShape(measured.measurements);
    assert(classified.primary === "heart", "Heart measurements classify as heart");
  }

  assert(REQUIRED_LANDMARK_COUNT === 455, "Measurements need landmarks through index 454");
  assert(Object.keys(FACE_SHAPE_ANCHORS).length === 7, "Each shape has an in-page anchor");

  const jpeg = validateImageFile({ name: "face.jpg", type: "image/jpeg", size: 120_000 });
  const png = validateImageFile({ name: "face.png", type: "image/png", size: 120_000 });
  const webp = validateImageFile({ name: "face.webp", type: "image/webp", size: 120_000 });
  const gif = validateImageFile({ name: "face.gif", type: "image/gif", size: 120_000 });
  const empty = validateImageFile({ name: "face.jpg", type: "image/jpeg", size: 0 });
  assert(jpeg.ok && png.ok && webp.ok, "JPEG, PNG, and WebP uploads are accepted");
  assert(!gif.ok, "GIF uploads are rejected");
  assert(!empty.ok, "Empty files are rejected");

  const wasmJs = statSync("public/mediapipe/wasm/vision_wasm_internal.js").size;
  const wasm = statSync("public/mediapipe/wasm/vision_wasm_internal.wasm").size;
  const model = statSync("public/mediapipe/face_landmarker.task").size;
  assert(wasmJs === FACE_SHAPE_WASM_JS_BYTES, "Hosted SIMD wasm loader size matches");
  assert(wasm === FACE_SHAPE_WASM_BYTES, "Hosted SIMD wasm size matches");
  assert(model === FACE_SHAPE_MODEL_BYTES, "Hosted Face Landmarker model size matches");
  assert(
    FACE_SHAPE_FIRST_RUN_BYTES === wasmJs + wasm + model,
    "First-run byte total is the SIMD wasm, loader, and model",
  );
  assert(faceShapeFirstRunMegabytes() === "16.3", "First-run label is 16.3 MB");
  assert(FACE_SHAPE_PANEL_LEAD.includes("about 16.3 MB"), "The panel states the measured first-run size");
  assert(FACE_SHAPE_PANEL_LEAD.includes("not uploaded"), "The panel says the photo is not uploaded");
  assert(!FACE_SHAPE_PANEL_LEAD.toLowerCase().includes("odml"), "The panel does not advertise Google log URLs");

  const tool = getToolBySlug("face-shape-detector");
  assert(tool, "Face Shape Detector is registered");
  assert(tool?.route === "/tools/face-shape-detector", "Preferred route is /tools/face-shape-detector");
  assert(tool?.category === "image-tools", "The detector is an image tool");
  assert(tool?.headline === "What Is My Face Shape? Free AI Face Shape Detector", "H1 headline is the search question");
  assert(tool?.metaTitle === "Free AI Face Shape Detector", "Meta title stays within the site length budget");
  assert(
    (tool?.description.length ?? 0) >= 120 && (tool?.description.length ?? 0) <= 155,
    `Card description is 120–155 characters (${tool?.description.length})`,
  );
  assert(tools.length === 102, "Registry has 102 tools after adding the detector");
  assert(tools.at(-1)?.slug === "cps-test", "CPS Test stays last in the extra-tools list");
  assert(
    searchTools("face shape").some((item) => item.slug === "face-shape-detector"),
    "face shape search finds the detector",
  );

  const related = getRelatedTools(tool!);
  assert(related.length >= 3 && related.length <= 6, "The detector has 3–6 related tools");
  assert(
    related.every((item) => getToolBySlug(item.slug)),
    "Related tools exist in the registry",
  );
  const relatedHrefs = ["face-symmetry", "golden-ratio", "eye-shape", "kibbe", "celebrity"];
  assert(
    related.every((item) => !relatedHrefs.some((token) => item.slug.includes(token))),
    "Related tools do not invent missing face-analysis destinations",
  );

  const content = getToolContent("face-shape-detector");
  assert(content, "The detector has page content");
  assert((content?.faqs.length ?? 0) === 20, "The detector has 20 visible FAQs");
  const headings = (content?.extraSections ?? []).map((section) => section.heading);
  for (const heading of [
    "How Does Our AI Face Shape Detector Work?",
    "What Are the 7 Face Shapes?",
    "How to Determine Your Face Shape Manually",
    "Face Shape Calculator, Face Shape Quiz or Photo Detector?",
    "Which Face Shape Is the Rarest?",
    "What Is the Most Common Face Shape?",
    "Hairstyles for Every Face Shape",
    "Glasses for Face Shape",
    "Makeup Contouring and Beard Styles",
    "Can a Face Shape Detector Be Wrong?",
    "Is the Face Shape Detector Free and Private?",
  ]) {
    assert(headings.includes(heading), `Content includes “${heading}”`);
  }
  const subheads = (content?.extraSections ?? []).flatMap((section) =>
    (section.subsections ?? []).map((sub) => sub.id),
  );
  for (const id of Object.values(FACE_SHAPE_ANCHORS)) {
    assert(subheads.includes(id), `Category section ${id} exists`);
  }
  assert(
    content?.relatedLinks?.every((link) => link.href.startsWith("/tools/") || link.href.startsWith("/guides/")),
    "Related links stay on this site",
  );
  assert(
    extraToolQuickAnswers["face-shape-detector"]?.includes("geometric estimate"),
    "The quick answer says the result is a geometric estimate",
  );

  const blob = collectText(content).join("\n");
  assert(!markdownFormattingIssues(blob), `face-shape-detector ${markdownFormattingIssues(blob) ?? ""}`.trim());
  assert(!bannedPhraseIssues(blob), `face-shape-detector ${bannedPhraseIssues(blob) ?? ""}`.trim());
  assert(!blob.toLowerCase().includes("facial recognition search"), "Copy does not target facial recognition search");
  assert(!blob.toLowerCase().includes("face id search") || blob.toLowerCase().includes("does not run face id search"), "Copy does not promote Face ID search");
  assert(blob.includes(PRODUCTION_SITE_URL) === false, "Body copy does not hardcode a competing hostname");
  assert(blob.includes("16.3 MB"), "Privacy copy uses the measured first-run size");
  assert(
    content?.faqs.some((faq) => faq.question.toLowerCase().includes("identity")) &&
      content.faqs.some((faq) => faq.answer.toLowerCase().includes("does not run")),
    "A FAQ states the tool does not search for identity",
  );
}
