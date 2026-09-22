"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ToolActions,
  ToolError,
  ToolField,
  ToolPanel,
  toolControlClass,
} from "@/components/tools/ToolForm";
import { generateUuids, UUID_MAX, UUID_MIN } from "@/lib/tools/uuid";

export function UuidGeneratorTool() {
  const [quantity, setQuantity] = useState("1");
  const [values, setValues] = useState<string[]>([]);
  const [error, setError] = useState("");

  function generate() {
    const next = generateUuids(quantity);
    if (!next.ok) {
      setError(next.error);
      return;
    }
    setError("");
    setValues(next.values);
  }

  return (
    <ToolPanel>
      <ToolField
        id="uuid-count"
        label="Number of UUIDs"
        hint={`UUID v4. Enter a whole number from ${UUID_MIN} to ${UUID_MAX}.`}
      >
        <input
          id="uuid-count"
          inputMode="numeric"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          className={toolControlClass}
        />
      </ToolField>

      <div className="mt-6">
        <ToolActions>
          <Button type="button" onClick={generate}>
            Generate
          </Button>
          <Button type="button" variant="secondary" onClick={generate} disabled={values.length === 0}>
            Regenerate
          </Button>
          <CopyButton value={values.join("\n")} label="Copy all" />
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setValues([]);
              setError("");
            }}
          >
            Clear
          </Button>
        </ToolActions>
      </div>

      <div className="mt-4">
        {error ? <ToolError>{error}</ToolError> : null}
        {values.length > 0 ? (
          <ul className="space-y-2">
            {values.map((value) => (
              <li
                key={value}
                className="flex flex-col gap-2 rounded-2xl bg-accent-soft px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <code className="break-all text-sm text-foreground">{value}</code>
                <CopyButton value={value} label="Copy" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </ToolPanel>
  );
}
