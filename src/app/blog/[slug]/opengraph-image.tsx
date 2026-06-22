import { ImageResponse } from "next/og";
import { getArticleBySlug, articles } from "@/lib/articles";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "Article";
  const category = article?.category ?? "";

  return new ImageResponse(
    (
      <div style={{ background: "#1e3a5f", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "80px" }}>
        <div style={{ color: "#c9a84c", fontSize: "22px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "28px" }}>{category}</div>
        <div style={{ color: "white", fontSize: title.length > 60 ? "44px" : "56px", fontWeight: "bold", lineHeight: 1.2, maxWidth: "1000px", marginBottom: "40px" }}>{title}</div>
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
