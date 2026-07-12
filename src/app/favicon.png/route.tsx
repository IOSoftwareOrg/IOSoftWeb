import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1e3a5f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          {"</>"}
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
