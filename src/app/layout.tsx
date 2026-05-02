import type { Metadata } from "next";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

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
  title: {
    default: "Ugis Strauss — The Off-Switch Method",
    template: "%s | Ugis Strauss",
  },
  description:
    "The Off-Switch Method. A structured three-phase intervention for anxiety, trauma, and persistent emotional patterns. Developed over 30 years. Applied with 7,000 participants during the Ukraine war.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${bricolage.variable}`}>
      <body className="flex flex-col min-h-screen bg-ground text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
