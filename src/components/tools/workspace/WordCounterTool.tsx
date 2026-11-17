"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  ToolStatGrid,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  getKeywordDensity,
  getSpeakingTime,
  getTextStats,
  parseWordsPerMinute,
  type DensityItem,
} from "@/lib/tools/text-stats";
import { useTx } from "@/i18n/tool-text";

const SAMPLE =
  "Tools Star Hub counts words in your browser.\n\nPaste a paragraph, a list, or a full draft. Multiple spaces and blank lines are handled cleanly.";

function formatDensity(value: number): string {
  return `${value.toFixed(1)}%`;
}

function DensityTable({
  title,
  items,
  empty,
}: {
  title: string;
  items: DensityItem[];
  empty: string;
}) {
  const tx = useTx();
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {items.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">{empty}</p>
      ) : (
        <table className="mt-2 w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="py-1 font-medium">{tx("Term")}</th>
              <th className="py-1 font-medium">{tx("Count")}</th>
              <th className="py-1 font-medium">{tx("Share of words")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.kind}-${item.term}`} data-term={item.term} data-count={item.count}>
                <td className="py-1 font-medium text-foreground">{item.term}</td>
                <td className="py-1 tabular-nums">{item.count}</td>
                <td className="py-1 tabular-nums">{formatDensity(item.density)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function WordCounterTool() {
  const tx = useTx();
  const [text, setText] = useState("");
  const [ignoreStopWords, setIgnoreStopWords] = useState(false);
  const [wpmRaw, setWpmRaw] = useState("150");
  const stats = getTextStats(text);
  const density = useMemo(
    () => getKeywordDensity(text, { ignoreStopWords, maxItems: 10 }),
    [text, ignoreStopWords],
  );
  const wpm = parseWordsPerMinute(wpmRaw);
  const spoken = wpm.ok ? getSpeakingTime(stats.words, wpm.value) : null;

  const speakingLabel = !spoken
    ? ""
    : spoken.totalSeconds === 0
      ? tx("0 sec")
      : spoken.minutes === 0
        ? tx(`${spoken.seconds} sec`)
        : spoken.seconds === 0
          ? tx(`${spoken.minutes} min`)
          : tx(`${spoken.minutes} min ${spoken.seconds} sec`);

  return (
    <ToolPanel>
      <ToolField
        id="word-counter-text"
        label={tx("Text")}
        hint={tx("Counting happens in your browser. Nothing is sent to a server.")}
      >
        <textarea
          id="word-counter-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={10}
          className={`${toolControlClass} min-h-40 resize-y`}
          placeholder={tx("Paste or type text here...")}
        />
      </ToolField>

      <div className="mt-4">
        <ToolActions>
          <Button type="button" variant="secondary" onClick={() => setText(SAMPLE)}>{tx("Sample text")}</Button>
          <Button type="button" variant="secondary" onClick={() => setText("")}>{tx("Clear")}</Button>
          <CopyButton value={text} label={tx("Copy text")} />
        </ToolActions>
      </div>

      <div className="mt-6">
        <ToolStatGrid
          items={[
            { label: "Words", value: stats.words },
            { label: "Characters", value: stats.characters },
            { label: "Characters without spaces", value: stats.charactersNoSpaces },
            { label: "Sentences", value: stats.sentences },
            { label: "Paragraphs", value: stats.paragraphs },
            {
              label: "Reading time",
              value:
                stats.words === 0
                  ? "0 min"
                  : `${stats.readingMinutes} min`,
            },
            {
              label: "Speaking time",
              value: wpm.ok ? speakingLabel : "—",
            },
          ]}
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <ToolField
          id="word-counter-wpm"
          label={tx("Speaking speed (words per minute)")}
          hint={tx("Reading time stays at about 225 words per minute. Speaking time uses the speed you set, usually slower. Enter a value from 50 to 250.")}
        >
          <input
            id="word-counter-wpm"
            data-testid="speaking-wpm"
            inputMode="numeric"
            value={wpmRaw}
            onChange={(event) => setWpmRaw(event.target.value)}
            className={toolControlClass}
          />
        </ToolField>
        <label className="flex items-center gap-2 self-end pb-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={ignoreStopWords}
            onChange={(event) => setIgnoreStopWords(event.target.checked)}
          />
          {tx("Ignore common English words (the, and, of…)")}
        </label>
      </div>
      {wpm.ok ? null : <div className="mt-3"><ToolError>{wpm.error}</ToolError></div>}
      <p className="mt-2 text-sm text-muted-foreground" data-testid="speaking-time">
        {wpm.ok ? `${tx("Speaking time")}: ${speakingLabel}` : ""}
      </p>

      <div className="mt-6 space-y-6" data-testid="keyword-density">
        <h2 className="text-base font-semibold text-foreground">{tx("Keyword density")}</h2>
        <p className="text-sm text-muted-foreground">
          {tx("Counts are taken from letters and numbers in your text. The share is that term’s count divided by all words, including common words. This is not grammar checking and it does not judge writing quality.")}
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <DensityTable
            title={tx("Top words")}
            items={density.words}
            empty={tx("No words to count yet.")}
          />
          <DensityTable
            title={tx("Top two-word phrases")}
            items={density.phrases}
            empty={tx("No phrases to count yet.")}
          />
        </div>
      </div>
    </ToolPanel>
  );
}
