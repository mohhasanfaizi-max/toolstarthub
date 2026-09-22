import { ImageResponse } from "next/og";

export function brandMarkImage(size: number) {
  const radius = Math.round(size * 0.22);
  const fontSize = Math.round(size * 0.42);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563eb",
          borderRadius: radius,
          color: "#ffffff",
          fontSize,
          fontWeight: 700,
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        T
      </div>
    ),
    { width: size, height: size },
  );
}
