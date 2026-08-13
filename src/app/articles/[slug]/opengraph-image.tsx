import { ImageResponse } from "next/og";

import { getPilotArticle } from "@/content/pilot-articles";
import { getTranslatedArticle } from "@/content/translated-articles";

export const alt = "An article by Ugis Strauss about the Off-Switch Method";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ArticleOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getPilotArticle(slug) ?? getTranslatedArticle(slug);
  const title = article?.title ?? "The Off-Switch Method Library";
  const titleSize = title.length > 82 ? 48 : title.length > 58 ? 56 : 64;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#161918", color: "#f4f0e8", padding: "68px 78px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#72b48d", fontSize: 23, letterSpacing: 4 }}><div style={{ width: 54, height: 4, background: "#72b48d" }} />OFF-SWITCH LIBRARY</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ maxWidth: 1020, fontSize: titleSize, lineHeight: 1.08, fontWeight: 700 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 27, color: "#c6c9c2" }}><span>Ugis Strauss</span><span style={{ color: "#72b48d" }}>•</span><span>The Off-Switch Method</span></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 21, color: "#9da39e" }}><span>method.yourbalancerestored.com</span><span style={{ color: "#72b48d" }}>Change the reaction. Recover choice.</span></div>
    </div>,
    size,
  );
}
