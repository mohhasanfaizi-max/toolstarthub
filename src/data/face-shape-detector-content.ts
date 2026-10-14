import type { ToolContent } from "./tool-content.ts";

export const faceShapeDetectorName = "Face Shape Detector";

export const faceShapeDetectorHeadline =
  "What Is My Face Shape? Free AI Face Shape Detector";

export const faceShapeDetectorMetaTitle = "Free AI Face Shape Detector";

export const faceShapeDetectorDescription =
  "Find your face shape from a photo with a free AI detector. See oval, round, square, heart, diamond, oblong, or triangle. Runs in this browser.";

export const faceShapeDetectorQuickAnswer =
  "Your face shape is a styling label based on how face length compares with forehead width, cheekbone width, and jawline width. Upload a clear front-facing photo to estimate oval, round, square, heart, diamond, oblong, or triangle. The result is a geometric estimate, not an identity search or a medical reading.";

export const faceShapeDetectorContent: ToolContent = {
  about:
    "A face shape is a rough outline category, not a unique ID. This free face shape detector estimates that outline from a photo by locating facial landmarks in your browser, measuring forehead width, cheekbone width, jawline width, and face length, then scoring seven styling categories. Use the result to browse hairstyle and glasses ideas, or skip the upload and follow the manual guide if the photo cannot be read.",
  howTo: [
    "Choose a clear, well-lit photo taken from the front. The whole face should be visible, with hair off the forehead when you can.",
    "Keep the camera about level with your eyes. A strong tilt, a selfie from below, or a three-quarter turn will skew length and width.",
    "Upload one JPG, PNG, or WebP image. Drag and drop if your browser supports it, or use the file picker.",
    "Press Detect face shape. The first run downloads a landmark model from this site. The photo is not uploaded to our servers.",
    "Review the estimated shape, the secondary category if the scores are close, and the length and width ratios.",
    "Read the matching hairstyle and glasses notes, then open the category guide on this page if you want more detail.",
  ],
  features: [
    "Photo-based estimate for oval, round, square, heart, diamond, oblong, and triangle face shapes.",
    "Runs in this browser after you press Detect face shape. No account and no photo upload to our servers.",
    "Shows a secondary category when two shapes score close together.",
    "Reports the normalized measurements the classifier used, including face length, face width, and the three widths.",
    "Hairstyle and glasses notes for the estimated shape, without a virtual try-on.",
    "A manual measurement guide if no face is found or you prefer not to upload a photo.",
  ],
  explanation:
    "A MediaPipe Face Landmarker finds facial landmarks on the photo in this browser. A separate geometric classifier then compares face length, forehead width, cheekbone width, and jawline width and scores seven styling categories. Landmark detection is not the same as face shape classification, and it is not facial recognition.",
  examples: [
    {
      title: "A front-facing portrait with even light",
      body: "A passport-style photo with the hair pulled back, the camera at eye height, and both ears visible is the easiest case. The detector can compare forehead, cheek, and jaw widths on a level outline. A dim selfie taken from below often reads longer than the same face in a mirror.",
    },
  ],
  extraSections: [
    {
      heading: "How Does Our AI Face Shape Detector Work?",
      id: "how-face-shape-detector-works",
      paragraphs: [
        "Two separate steps run in this tab. First, a MediaPipe Face Landmarker model finds facial landmarks on the photo. Second, a geometric classifier that we wrote compares those points and scores seven face shape labels. MediaPipe does not output oval or round on its own.",
        "Face length is the distance from the upper forehead landmark to the chin. Forehead width, cheekbone width, and jawline width are distances between paired landmarks on the left and right. Face width is the largest of those three widths. The classifier then uses the length-to-width ratio and the relative upper, middle, and lower widths, including how much the jaw tapers compared with the cheeks.",
        "The Face Landmarker configuration used here is the 478-point face mesh with iris landmarks. The result panel reports the landmark count from that run. If a browser or model file returned fewer points, the page would say so instead of advertising 478 landmarks it did not use.",
        "Points are rotated using the outer eye corners so a small head tilt is less likely to stretch length or width. The scores are styling conventions, not a trained seven-class neural network and not a published accuracy rate.",
      ],
    },
    {
      heading: "What Are the 7 Face Shapes?",
      id: "seven-face-shapes",
      paragraphs: [
        "These seven labels are common in hair and glasses guides: oval, round, square, heart, diamond, oblong, and triangle. They overlap. A real face can sit between two of them, which is why a second category appears when the scores are close.",
      ],
      table: {
        caption: "Typical geometric cues used by this detector. They are conventions, not rules of attractiveness.",
        headers: ["Shape", "Length vs width", "Widest area", "Jaw"],
        rows: [
          ["Oval", "A bit longer than wide", "Even, cheeks similar to forehead", "Gentle taper"],
          ["Round", "Close to equal", "Similar widths", "Softer, less taper"],
          ["Square", "Close to equal", "Similar widths", "Wide, more angular"],
          ["Heart", "Often a bit longer", "Forehead and temples", "Narrower chin"],
          ["Diamond", "Often a bit longer", "Cheekbones", "Narrower forehead and jaw"],
          ["Oblong", "Clearly longer", "Fairly even widths", "Similar to the cheeks"],
          ["Triangle", "Varies", "Jawline", "Wider than the forehead"],
        ],
      },
      subsections: [
        {
          heading: "Oval Face Shape",
          id: "oval-face-shape",
          paragraphs: [
            "An oval face shape is a bit longer than it is wide, with a forehead close to the cheek width and a jaw that tapers without a sharp point. In a photo, the outline looks balanced rather than circular or very long.",
            "Hair covering the temples can hide forehead width and make an oval read as diamond or heart. A high camera angle can shorten the face toward round.",
            "Most hairstyles work. Keep extra height moderate if the oval is already long. Glasses with a gentle curve or a soft rectangle usually sit well. See the manual guide if you want to confirm the four measurements yourself.",
          ],
        },
        {
          heading: "Round Face Shape",
          id: "round-face-shape",
          paragraphs: [
            "A round face shape has length and width close together and a softer jaw. Rounded contours are not the same as a short face: a short square outline is still angular at the jaw, while a round outline has less taper.",
            "A smile, a wide-angle selfie, and baby fat in the cheeks can all push a measurement toward round. Pulling hair tightly back can do the opposite.",
            "Height at the crown, a side part, or layers below the chin can add length. Rectangular frames contrast a rounder outline. Very round frames repeat the same curve.",
          ],
        },
        {
          heading: "Square Face Shape",
          id: "square-face-shape",
          paragraphs: [
            "A square face shape also has length and width close together, but the jaw stays relatively wide. The classifier cannot see bone sharpness the way your eye can, so it treats a wide, low-taper jaw as square and a similar, softer jaw as round.",
            "Beard fill at the jaw corners can make a square outline look even wider. A three-quarter turn can hide one jaw corner and drop the score.",
            "Texture, a side part, or layers that break the jaw line can soften the angle if you want that. Round or oval frames contrast a squarer jaw. Narrow rectangles that match the jaw can look boxy.",
          ],
        },
        {
          heading: "Heart Face Shape",
          id: "heart-face-shape",
          paragraphs: [
            "A heart face shape is wider through the forehead and temples, then narrower at the chin. The cheeks sit between those two widths.",
            "Bangs can hide forehead width and make heart look closer to oval. A pointed chin in a low-angle photo can exaggerate the taper.",
            "Chin-length layers or a bob near the jaw add width lower down. Frames that are a bit wider at the bottom can balance a narrower chin. Heavy top bars emphasize a wide forehead.",
          ],
        },
        {
          heading: "Diamond Face Shape",
          id: "diamond-face-shape",
          paragraphs: [
            "A diamond face shape, also called a diamond-shaped face or diamond shape face, has cheekbones wider than both the forehead and the jaw. People searching for face shape diamond, diamond face shapes, or face shapes diamond are looking at the same outline.",
            "Prominent cheeks are the cue. A tight pulled-back style can exaggerate them. Hair that covers the sides of the forehead can make diamond look more oval.",
            "Bangs or volume at the temples can widen the forehead. Oval or cat-eye frames often sit well. Very wide frames at the cheek line can stick out past the face.",
          ],
        },
        {
          heading: "Oblong Face Shape",
          id: "oblong-face-shape",
          paragraphs: [
            "An oblong face shape, also called an oblong shape face or oblong shaped face, is clearly longer than it is wide, with fairly even forehead, cheek, and jaw widths. Searches for face shape oblong and face shapes oblong point at that longer proportion.",
            "Oblong is not just a stretched oval. Oval still has a moderate length-to-width ratio and a gentle jaw taper. Oblong is the longer proportion. A camera held too low, or a photo cropped tight on the sides, can make oval look oblong.",
            "Bangs, a side part, or volume at the sides can reduce a long look. Height at the crown usually adds length. Wider frames help more than tall, narrow ones.",
          ],
        },
        {
          heading: "Triangle Face Shape",
          id: "triangle-face-shape",
          paragraphs: [
            "A triangle face shape is wider at the jaw than at the forehead, with cheekbones in between. Some guides call a very wide jaw a pear shape. This page uses triangle for that lower-third emphasis.",
            "A full beard can add jaw width. Hair volume at the temples can hide a narrower forehead and move the estimate toward oval or square.",
            "Volume at the crown and temples can widen the upper face. Frames that are stronger at the brow line can balance a wider jaw. Keep the jaw line trimmed if you want less width there.",
          ],
        },
      ],
      after:
        "None of these shapes is more attractive than another. They are labels for proportion, so you can pick a cut or a frame with a clearer starting point.",
    },
    {
      heading: "How to Determine Your Face Shape Manually",
      id: "manual-face-shape-guide",
      paragraphs: [
        "You can estimate face shape without a photo. Stand in front of a mirror, pull hair off the forehead, and look straight ahead. Use a flexible tape, a ruler against the glass, or a photo you print and mark. Measure forehead width at the widest point above the brows, cheekbone width at the widest point across the cheeks, jawline width from corner to corner, and face length from the hairline to the bottom of the chin.",
        "Compare the four numbers. If length is only a little greater than the largest width, and the three widths are close with a gentle jaw taper, oval is the usual label. If length and width are close and the jaw is wide, square is more likely than round. If the cheeks are clearly widest, look at diamond. If the jaw is widest, look at triangle. If length is much greater than width, look at oblong.",
        "A mirror measurement and a photo estimate can disagree. Perspective, lighting, facial hair, and pose all change the outline. Treat both as a starting point.",
      ],
      table: {
        caption: "What the four manual measurements usually suggest.",
        headers: ["If you notice", "Common label"],
        rows: [
          ["Length a bit greater than width, even widths, gentle jaw", "Oval"],
          ["Length and width close, soft jaw", "Round"],
          ["Length and width close, wide jaw", "Square"],
          ["Forehead widest, chin narrower", "Heart"],
          ["Cheeks widest, forehead and jaw narrower", "Diamond"],
          ["Length clearly greater than width", "Oblong"],
          ["Jaw widest, forehead narrower", "Triangle"],
        ],
      },
    },
    {
      heading: "Face Shape Calculator, Face Shape Quiz or Photo Detector?",
      id: "calculator-quiz-or-photo",
      paragraphs: [
        "A photo-based face shape detector, like this one, measures landmarks on an image. It is fast when the photo is front-facing, and it fails honestly when it cannot find a single face.",
        "A face shape calculator is the manual version: you type or compare forehead, cheek, jaw, and length. This page includes that method in the guide. It does not include a separate number pad that you fill in.",
        "A face shape quiz asks you to pick descriptions, such as whether your jaw looks rounded. Quizzes are easy on a phone, but they depend on how you see yourself. This tool is not an interactive quiz. If you prefer questions over a photo, use the comparison table in the manual section.",
      ],
    },
    {
      heading: "Which Face Shape Is the Rarest?",
      id: "rarest-face-shape",
      paragraphs: [
        "There is no reliable worldwide ranking of the rarest face shape. Counts change with the population you sample, the age mix, and the rules you use to split oval from oblong or round from square. A salon guide that calls diamond rare is using that guide’s labels, not a census.",
        "Treat rarity claims as marketing unless they name the sample and the classifier. This detector does not rank how common your result is.",
      ],
    },
    {
      heading: "What Is the Most Common Face Shape?",
      id: "most-common-face-shape",
      paragraphs: [
        "There is also no universally reliable most common face shape among these seven labels. Oval is often described as common in styling articles, but those articles rarely publish a measured dataset. Without a defined sample and a consistent method, a percentage would be invented.",
        "Your own estimate matters more than a global ranking. If two categories score close together, you probably sit between them.",
      ],
    },
    {
      heading: "Hairstyles for Every Face Shape",
      id: "hairstyles-for-face-shape",
      paragraphs: [
        "A hairstyle for your face shape is a suggestion, not a rule. Hair texture, density, growth pattern, and how much cutting you want to maintain all matter as much as the outline. Men’s haircuts follow the same proportion ideas: add height to lengthen, add side volume to shorten, and avoid repeating an outline you want to soften.",
        "Oval: most cuts work; keep extra height moderate on a longer oval. Round: height on top or length below the chin. Square: texture or a side part to break the jaw line. Heart: weight near the jaw, less bulk at the temples. Diamond: bangs or temple volume, some length near the jaw. Oblong: bangs or side volume, less height. Triangle: volume up top, less bulk on the jaw.",
        "This page does not include a hairstyle try-on. Take the estimate to a barber or stylist, or test a filter in an app that actually overlays hair.",
      ],
    },
    {
      heading: "Glasses for Face Shape",
      id: "glasses-for-face-shape",
      paragraphs: [
        "Glasses for face shape usually contrast the outline: rounder frames on a squarer jaw, more angular frames on a rounder outline, wider frames on a longer face, and a stronger top line on a wider jaw. Comfort, prescription, bridge fit, and the actual frame width still come first.",
        "A frame that is much wider than your temples will sit oddly no matter the shape label. Pupillary distance and the lens height affect how the frame looks as much as the seven categories.",
        "There is no virtual glasses try-on on this page. Use the notes next to your result, then try frames in person or in a retailer tool that supports try-on.",
      ],
    },
    {
      heading: "Makeup Contouring and Beard Styles",
      id: "makeup-and-beard-styles",
      paragraphs: [
        "Makeup contouring can nudge how light hits the outline. It does not change bone. A common approach is to shade the parts you want to recede and highlight the parts you want to come forward, then blend until there is no stripe. Skip it if you do not want that look.",
        "Beard styles change the lower third. Extra chin length can help a rounder outline. A rounded beard edge can soften a square jaw. A fuller jaw can add width under a heart or diamond shape. A trimmed jaw can reduce triangle width. Grow what is comfortable; these are options, not requirements.",
      ],
    },
    {
      heading: "Can a Face Shape Detector Be Wrong?",
      id: "can-face-shape-detector-be-wrong",
      paragraphs: [
        "Yes. The result is an estimate. Perspective, camera distance, lighting, rotation, facial hair, bangs, glasses, a mask, or a hand on the face can all change the landmarks. Two categories can also be equally fair labels for the same person.",
        "To improve a result, use a front-facing photo, even light, hair off the forehead, a level camera, one face in the frame, and a short side of at least a few hundred pixels. Then compare the photo estimate with the manual measurements. If they disagree, trust the measurements you can repeat in a mirror.",
      ],
    },
    {
      heading: "Is the Face Shape Detector Free and Private?",
      id: "free-and-private",
      paragraphs: [
        "Yes. It is free, with no sign-up. You choose a photo and run analysis in this browser. The image is not posted to our application server, an external inference API, or cloud storage, and it is not written to cookies, local storage, or a database.",
        "The first run downloads the Face Landmarker model and WebAssembly files from this site, about 16.3 MB on a typical browser that can use the SIMD build. Later visits can reuse that cache. MediaPipe Tasks may attempt to send anonymous usage metrics to Google. This site’s Content Security Policy blocks that request. We do not claim that no network request is ever possible in every browser or extension setup. Photos and landmarks are not included in that metrics design, and they are not sent by this page.",
      ],
    },
    {
      heading: "What this detector does not do",
      id: "what-this-detector-does-not-do",
      paragraphs: [
        "This tool estimates face geometry. It is not facial recognition, Face ID search, reverse image search, or a celebrity look alike matcher. It does not search a database for a person’s identity, diagnose skin, read personality, measure symmetry, or run color analysis or a body-shape / Kibbe test. Those are separate products, and they are not on this page.",
      ],
    },
  ],
  tips: [
    "Take the photo at eye height, about an arm’s length away, with both ears visible.",
    "If analysis fails, crop to a single face or use the manual measurements instead of retrying a group photo.",
    "Use the secondary category when the page calls the result a close call. You likely sit between two shapes.",
  ],
  limitations:
    "The seven labels are styling conventions. The classifier does not see bone the way a clinician would, and it has no published accuracy rate on a consented photo set. Bangs, beards, glasses, tilt, and lens distortion can change the estimate. Virtual hairstyle or glasses try-on is not included. Do not use the result for identity, health, or personality claims.",
  relatedLinks: [
    {
      before: "To sample colors from a photo in this browser, open the",
      linkLabel: "Image Color Analyzer",
      href: "/tools/image-color-analyzer",
      after: ".",
    },
    {
      before: "To shrink a large portrait before you work with it, see",
      linkLabel: "how to compress an image without losing quality",
      href: "/guides/how-to-compress-an-image-without-losing-quality",
      after: ", or use the Image Resizer.",
    },
    {
      before: "Need a tighter headshot? The",
      linkLabel: "Image Cropper",
      href: "/tools/image-cropper",
      after: " can trim extra background in this tab.",
    },
  ],
  faqs: [
    {
      question: "What is my face shape?",
      answer:
        "It is a styling label from how face length compares with forehead, cheekbone, and jawline width. This page estimates oval, round, square, heart, diamond, oblong, or triangle from a front-facing photo or from those four measurements by hand.",
    },
    {
      question: "How do I determine my face shape?",
      answer:
        "Measure forehead width, cheekbone width, jawline width, and face length, then compare them with the table in the manual guide. Or upload a clear front-facing photo and run the detector.",
    },
    {
      question: "Is this face shape detector free?",
      answer:
        "Yes. There is no sign-up and no charge. The first run downloads a landmark model from this site.",
    },
    {
      question: "Can I detect my face shape from a photo?",
      answer:
        "Yes, if the photo is a supported JPG, PNG, or WebP with one visible, roughly front-facing face. If no face is found, the tool does not invent a result.",
    },
    {
      question: "What face shape do I have?",
      answer:
        "Run the detector or use the manual measurements. Many people sit between two categories, which is why a secondary estimate can appear.",
    },
    {
      question: "What are the seven face shapes?",
      answer:
        "On this page they are oval, round, square, heart, diamond, oblong, and triangle. Other systems use fewer or more labels.",
    },
    {
      question: "What is a diamond-shaped face?",
      answer:
        "A diamond-shaped face has cheekbones wider than the forehead and the jaw. Diamond face shape, diamond shape face, and face shape diamond refer to that same outline.",
    },
    {
      question: "What is an oblong face shape?",
      answer:
        "An oblong face shape is clearly longer than it is wide, with fairly even widths. Oblong shape face and oblong shaped face mean the same proportion.",
    },
    {
      question: "What is the difference between oval and oblong?",
      answer:
        "Oval is only a bit longer than it is wide, with a gentle jaw taper. Oblong is the longer proportion, so length stands out more than the taper.",
    },
    {
      question: "How does a face shape calculator work?",
      answer:
        "You compare forehead, cheek, jaw, and length. This page’s classifier does the same comparison on landmark distances from a photo. It is not a separate quiz form.",
    },
    {
      question: "Can face shape change over time?",
      answer:
        "Weight, age, hair, and beard can change how an outline reads. Bone structure changes slowly. Recheck with a current photo if your face has changed.",
    },
    {
      question: "Does hairstyle affect face shape detection?",
      answer:
        "Yes. Bangs, wide hair, and covered temples hide landmarks. Pull hair back when you can, or measure in a mirror instead.",
    },
    {
      question: "Which glasses suit my face shape?",
      answer:
        "Contrast the outline, then check comfort and frame width. See the glasses section for shape-by-shape ideas. This page has no virtual try-on.",
    },
    {
      question: "What is the rarest face shape?",
      answer:
        "There is no verified worldwide rarest shape among these seven labels. Rankings depend on the sample and the classifier.",
    },
    {
      question: "What is the most common face shape?",
      answer:
        "There is no verified worldwide most common shape for this seven-way split. This tool does not assign a popularity rank.",
    },
    {
      question: "Does the tool upload or store my photo?",
      answer:
        "The photo stays in this tab. It is not uploaded to our servers or stored in cookies, local storage, or a database. Reset or leave the page to drop it.",
    },
    {
      question: "Why did the detector fail to identify my face?",
      answer:
        "Common causes are no face in view, several faces, a profile, heavy occlusion, a tiny face in the frame, or an unsupported file. Use a single front-facing photo or the manual guide.",
    },
    {
      question: "Is face shape detection the same as facial recognition?",
      answer:
        "No. This estimates geometric proportions and assigns a styling label. Facial recognition matches a face to an identity.",
    },
    {
      question: "Does this tool search for a person’s identity?",
      answer:
        "No. It does not run Face ID search, reverse image search, or celebrity matching, and it has no identity database.",
    },
    {
      question: "Can the result be used to determine health or personality?",
      answer:
        "No. It is not a medical, diagnostic, or personality system. Do not use it to judge health, character, or attractiveness.",
    },
  ],
};
