import type { Metadata } from "next";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/library/JsonLd";
import { siteOrigin } from "@/lib/page-metadata";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Ugis Strauss — The Off-Switch Method",
    template: "%s | Ugis Strauss",
  },
  description:
    "The Off-Switch Method. A structured three-phase intervention for anxiety, trauma, and persistent emotional patterns. Developed over 30 years. Applied with 7,000 participants during the Ukraine war.",
  authors: [{ name: "Ugis Strauss", url: `${siteOrigin}/about` }],
  creator: "Ugis Strauss",
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ugis Strauss — The Off-Switch Method",
    description: "A structured method for changing automatic emotional reactions.",
    siteName: "The Off-Switch Method",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "The Off-Switch Method" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ugis Strauss — The Off-Switch Method",
    description: "A structured method for changing automatic emotional reactions.",
    images: ["/opengraph-image"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${bricolage.variable}`}>
      <Script id="google-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = window.gtag || gtag;
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}</Script>
      <body className="flex flex-col min-h-screen bg-ground text-ink antialiased">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteOrigin}/#organization`,
              name: "The Off-Switch Method",
              legalName: "Resulta Consulting FZ-LLC",
              url: siteOrigin,
              taxID: "105211901100001",
              address: {
                "@type": "PostalAddress",
                streetAddress: "FDBC0803, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ",
                addressLocality: "Ras Al Khaimah",
                addressCountry: "AE",
              },
              founder: { "@id": `${siteOrigin}/about#ugis-strauss` },
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteOrigin}/about#ugis-strauss`,
              name: "Ugis Strauss",
              url: `${siteOrigin}/about`,
              jobTitle: "Creator of the Off-Switch Method",
              worksFor: { "@id": `${siteOrigin}/#organization` },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteOrigin}/#website`,
              name: "The Off-Switch Method",
              url: siteOrigin,
              inLanguage: "en",
              publisher: { "@id": `${siteOrigin}/#organization` },
            },
          ]}
        />
        <Analytics />
        <SpeedInsights />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
