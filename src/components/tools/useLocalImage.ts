"use client";

import { useEffect, useRef, useState } from "react";
import {
  inspectImageFile,
  type SupportedImageType,
} from "@/lib/tools/image";

export type LocalImage = {
  file: File;
  previewUrl: string;
  width: number;
  height: number;
  mime: SupportedImageType;
};

export function useLocalImage() {
  const [image, setImage] = useState<LocalImage | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const urlRef = useRef("");

  useEffect(() => {
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
      }
    };
  }, []);

  function replaceUrl(nextUrl: string) {
    if (urlRef.current && urlRef.current !== nextUrl) {
      URL.revokeObjectURL(urlRef.current);
    }
    urlRef.current = nextUrl;
  }

  async function loadFile(file: File) {
    setLoading(true);
    setError("");
    const inspected = await inspectImageFile(file);
    setLoading(false);

    if (!inspected.ok) {
      setError(inspected.error);
      return null;
    }

    replaceUrl(inspected.previewUrl);
    const nextImage = {
      file,
      previewUrl: inspected.previewUrl,
      width: inspected.width,
      height: inspected.height,
      mime: inspected.mime,
    };
    setImage(nextImage);
    return nextImage;
  }

  function resetImage() {
    replaceUrl("");
    setImage(null);
    setError("");
    setLoading(false);
  }

  return { image, error, loading, loadFile, resetImage, setError };
}
