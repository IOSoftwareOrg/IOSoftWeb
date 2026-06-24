import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1e3a5f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <span style={{ color: "#c9a84c", fontSize: "48px", fontWeight: "bold", fontFamily: "monospace" }}>
            {"</>"}
          </span>
          <span style={{ color: "white", fontSize: "48px", fontWeight: "bold", marginLeft: "16px" }}>
            IO Software
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          Des compétences fortes,{" "}
          <span style={{ color: "#c9a84c" }}>des conseils pertinents</span>
        </div>

        {/* Subtitle */}
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "28px" }}>
          Stratégie • Organisation • Process • Data • IA • Marseille
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#c9a84c",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
