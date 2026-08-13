import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

import type { TranslatedArticle } from "@/content/translated-articles";

export type MarkdownBlock = {
  kind: "code" | "h1" | "h2" | "h3" | "ol" | "paragraph" | "quote" | "ul";
  lines: string[];
};

function isBlockStart(line: string) {
  return /^(#{1,3}\s|>\s?|```|[-*]\s|\d+\.\s)/.test(line);
}

export function headingId(value: string) {
  return value.toLowerCase().replace(/[’'“”\"!?.,:;()—–]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }
    if (line.startsWith("```")) {
      const code: string[] = []; index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) code.push(lines[index++]);
      index += 1; blocks.push({ kind: "code", lines: code }); continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { blocks.push({ kind: `h${heading[1].length}` as MarkdownBlock["kind"], lines: [heading[2]] }); index += 1; continue; }
    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith(">")) quote.push(lines[index++].replace(/^>\s?/, ""));
      blocks.push({ kind: "quote", lines: quote }); continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) items.push(lines[index++].replace(/^[-*]\s+/, ""));
      blocks.push({ kind: "ul", lines: items }); continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s+/, ""));
      blocks.push({ kind: "ol", lines: items }); continue;
    }
    const paragraph = [line]; index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) paragraph.push(lines[index++]);
    blocks.push({ kind: "paragraph", lines: paragraph });
  }
  return blocks;
}

export function readTranslatedArticle(article: TranslatedArticle) {
  const raw = fs.readFileSync(path.join(process.cwd(), "src", "content", "articles", article.fileName), "utf8");
  const frontmatter = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (!frontmatter) throw new Error(`Frontmatter is missing: ${article.fileName}`);
  const body = raw.slice(frontmatter[0].length).trim();
  const title = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (title !== article.title) throw new Error(`Title mismatch for ${article.id}: ${title}`);
  return { body, blocks: parseMarkdown(body), bodyHash: createHash("sha256").update(body).digest("hex") };
}
