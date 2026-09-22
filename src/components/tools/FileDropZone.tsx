"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { toolControlClass } from "@/components/tools/ToolForm";

type FileDropZoneProps = {
  id: string;
  label: string;
  accept: string;
  hint?: string;
  fileName?: string;
  disabled?: boolean;
  prompt?: string;
  multiple?: boolean;
  onFile?: (file: File) => void;
  onFiles?: (files: File[]) => void;
};

export function FileDropZone({
  id,
  label,
  accept,
  hint,
  fileName,
  disabled,
  prompt = "Drag and drop an image here, or choose a file.",
  multiple = false,
  onFile,
  onFiles,
}: FileDropZoneProps) {
  const [dragging, setDragging] = useState(false);

  function takeFiles(list: FileList | null) {
    const files = Array.from(list ?? []);
    if (files.length === 0) {
      return;
    }
    if (onFiles) {
      onFiles(files);
      return;
    }
    if (onFile && files[0]) {
      onFile(files[0]);
    }
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <div
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled) {
            setDragging(true);
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) {
            setDragging(true);
          }
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          if (!disabled) {
            takeFiles(event.dataTransfer.files);
          }
        }}
        className={cn(
          "mt-1.5 rounded-2xl border border-dashed border-border bg-muted px-4 py-6 text-center",
          dragging && "border-accent bg-accent-soft",
        )}
      >
        <p className="text-sm text-foreground">{prompt}</p>
        <input
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className={`${toolControlClass} mt-3 cursor-pointer border-dashed file:me-3 file:rounded-lg file:border-0 file:bg-card file:px-3 file:py-2 file:text-sm file:font-medium`}
          onChange={(event) => {
            takeFiles(event.target.files);
            event.target.value = "";
          }}
        />
        {fileName ? (
          <p className="mt-3 break-all text-sm font-medium text-foreground">
            Selected: {fileName}
          </p>
        ) : null}
      </div>
      {hint ? (
        <p className="mt-1.5 text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
