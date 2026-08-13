import { ImageResponse } from "next/og";

export const alt = "The Off-Switch Method by Ugis Strauss";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0e0c",
          color: "#f0ece4",
          padding: "72px 84px",
          borderTop: "14px solid #2d9966",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 34,
              borderRadius: 20,
              background: "#08243a",
              display: "flex",
              alignItems: "center",
              padding: 6,
            }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 20, background: "#f0ece4" }} />
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>The Off-Switch Method</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ color: "#2d9966", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>
            Ugis Strauss
          </div>
          <div style={{ marginTop: 24, fontFamily: "Georgia", fontSize: 76, lineHeight: 1.05 }}>
            When a reaction does not switch off by itself
          </div>
        </div>
      </div>
    ),
    size,
  );
}
