import type { MetadataRoute } from "next";

import { methodArticles } from "@/content/pilot-articles";
import { translatedArticlePath, translatedArticles } from "@/content/translated-articles";
import { siteOrigin } from "@/lib/page-metadata";

const staticPaths = [
  "/",
  "/about",
  "/book",
  "/evidence",
  "/evidence/anxiety-after-stroke",
  "/evidence/complex-ptsd-burnout",
  "/evidence/driving-panic",
  "/evidence/institutional-leader",
  "/evidence/ukraine-2022",
  "/formats",
  "/for-organizations",
  "/group",
  "/institutional-inquiry",
  "/issues/anxiety",
  "/issues/burnout",
  "/issues/emotional-triggers",
  "/issues/overthinking",
  "/issues/sleep",
  "/issues/stress-and-overload",
  "/issues/when-emotions-take-over",
  "/library",
  "/library/anxiety-specific-fears",
  "/library/anger-guilt-self-worth",
  "/library/building-new-life",
  "/library/how-the-method-works",
  "/library/panic-attacks",
  "/library/past-difficult-memories",
  "/library/relationships-closeness-boundaries",
  "/library/thoughts-sleep-low-mood",
  "/library/trauma-ptsd",
  "/library/work-burnout-action",
  "/one-to-one",
  "/privacy-policy",
  "/terms",
  "/the-method",
  "/who-this-is-for",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/library") ? 0.8 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = [...methodArticles, ...translatedArticles].map((article) => ({
    url: `${siteOrigin}${"path" in article ? translatedArticlePath(article) : `/articles/${article.slug}`}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...articleEntries];
}
