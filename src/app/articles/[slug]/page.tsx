import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PilotArticlePage from "@/components/library/PilotArticlePage";
import TranslatedArticlePage from "@/components/library/TranslatedArticlePage";
import { getPilotArticle, methodArticles } from "@/content/pilot-articles";
import { getTranslatedArticle, translatedArticlePath, translatedArticles } from "@/content/translated-articles";
import { buildPageMetadata } from "@/lib/page-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...methodArticles, ...translatedArticles.filter((article) => translatedArticlePath(article).startsWith("/articles/"))].map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPilotArticle(slug) ?? getTranslatedArticle(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
    image: `/articles/${article.slug}/opengraph-image`,
  });
}

export default async function ArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getPilotArticle(slug);
  if (article) return <PilotArticlePage article={article} />;
  const translatedArticle = getTranslatedArticle(slug);
  if (!translatedArticle) notFound();
  return <TranslatedArticlePage article={translatedArticle} />;
}
