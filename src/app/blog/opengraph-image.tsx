import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog — IO Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "#1e3a5f", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "80px" }}>
        <div style={{ color: "#c9a84c", fontSize: "24px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "24px" }}>Ressources</div>
        <div style={{ color: "white", fontSize: "64px", fontWeight: "bold", lineHeight: 1.1, marginBottom: "32px" }}>Blog & Actualités</div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "28px" }}>Finance • Stratégie • Management • IA • Droit • Économie • IT</div>
        <div style={{ position: "absolute", bottom: "40px", left: "80px", display: "flex", alignItems: "center" }}>
          <span style={{ color: "#c9a84c", fontSize: "28px", fontFamily: "monospace", fontWeight: "bold" }}>{"</>"}</span>
          <span style={{ color: "white", fontSize: "28px", fontWeight: "bold", marginLeft: "10px" }}>IO Software</span>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8px", background: "#c9a84c" }} />
      </div>
    ),
    { ...size }
  );
}
