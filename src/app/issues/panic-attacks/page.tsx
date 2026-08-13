import type { Metadata } from "next";

import TranslatedArticlePage from "@/components/library/TranslatedArticlePage";
import { getTranslatedArticleById, translatedArticlePath } from "@/content/translated-articles";
import { buildPageMetadata } from "@/lib/page-metadata";

const article = getTranslatedArticleById("PA-01");

export const metadata: Metadata = article
  ? buildPageMetadata({
      title: article.seoTitle,
      description: article.description,
      path: translatedArticlePath(article),
    })
  : {};

export default function PanicAttacksPage() {
  if (!article) return null;
  return <TranslatedArticlePage article={article} />;
}
