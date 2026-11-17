"use client";

import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/client";
import { useTx } from "@/i18n/tool-text";

type DownloadButtonProps = {
  blob: Blob | null;
  fileName: string;
  label?: string;
};

export function DownloadButton({ blob, fileName, label }: DownloadButtonProps) {
  const { messages } = useI18n();
  const tx = useTx();
  function download() {
    if (!blob) {
      return;
    }

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <Button type="button" onClick={download} disabled={!blob}>
      {label ? tx(label) : messages.tool.download}
    </Button>
  );
}
