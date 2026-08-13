import type { Metadata } from "next";

export const siteOrigin = "https://method.yourbalancerestored.com";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  type?: "article" | "website";
  image?: `/${string}`;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const canonical = `${siteOrigin}${path}`;
  const documentTitle = title.includes("Ugis Strauss")
    ? title
    : `${title} | Ugis Strauss`;

  return {
    title: { absolute: documentTitle },
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      locale: "en_US",
      url: canonical,
      title,
      description,
      siteName: "The Off-Switch Method",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "The Off-Switch Method by Ugis Strauss",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
