"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolOutput,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { AiResult, useAiGenerate } from "@/components/tools/useAiGenerate";
import { analyzeWritingPatterns, type WritingPatternReport } from "@/lib/tools/writing-patterns";
import { useTx } from "@/i18n/tool-text";

export function AiArticleDetectorTool() {
  const tx = useTx();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [report, setReport] = useState<WritingPatternReport | null>(null);
  const ai = useAiGenerate();

  function analyze() {
    const result = analyzeWritingPatterns(text);
    if (!result.ok) {
      setError(result.error);
      setReport(null);
      return;
    }
    setError("");
    setReport(result.report);
  }

  return (
    <ToolPanel>
      <p className="text-sm leading-6 text-muted-foreground">{tx("Analyze writing checks patterns in your browser. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a writing-pattern analysis. Neither result can decide who wrote the text. The draft is not stored.")}</p>
      <div className="mt-4">
        <ToolField id="pattern-text" label={tx("Article or draft")} hint={tx("Paste at least 40 words.")}>
          <textarea id="pattern-text" value={text} onChange={(event) => setText(event.target.value)} rows={10} className={`${toolControlClass} min-h-40 resize-y`} />
        </ToolField>
      </div>
      {error ? (
        <div className="mt-4">
          <ToolError>{tx(error)}</ToolError>
        </div>
      ) : null}
      <div className="mt-4">
        <ToolActions>
          <Button type="button" onClick={analyze}>{tx("Analyze writing")}</Button>
          <Button type="button" variant="secondary" disabled={ai.status === "loading"} onClick={() => void ai.run("ai-article-detector", text)}>{tx("Analyze with AI")}</Button>
          <Button type="button" variant="ghost" onClick={() => { setText(""); setError(""); setReport(null); }}>{tx("Clear")}</Button>
        </ToolActions>
      </div>
      {report ? (
        <div className="mt-6 space-y-4">
          <ToolStatGrid
            items={[
              { label: "Words", value: report.words },
              { label: "Sentences", value: report.sentences },
              { label: "Paragraphs", value: report.paragraphs },
              { label: "Avg. sentence", value: `${report.averageSentenceWords} words` },
              { label: "Sentence variation", value: tx(report.sentenceVariation) },
              { label: "Vocabulary", value: tx(report.vocabulary) },
            ]}
          />
          <ToolOutput label={tx("Writing pattern analysis")}>
            <p className="text-sm leading-6">{tx(report.note)}</p>
            {report.repeatedPhrases.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
                {report.repeatedPhrases.map((item) => (
                  <li key={item}>{tx(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6">{tx("No four-word phrase repeats three or more times.")}</p>
            )}
            {report.formulaicPhrases.length > 0 ? (
              <p className="mt-3 text-sm leading-6">{tx("Familiar stock phrases found:")}{" "}{report.formulaicPhrases.join(", ")}.
              </p>
            ) : null}
          </ToolOutput>
        </div>
      ) : null}
      <AiResult status={ai.status} text={ai.text} error={ai.error} label={tx("AI writing analysis")} />
    </ToolPanel>
  );
}
