"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "The Method", href: "/the-method" },
  { label: "Evidence", href: "/evidence" },
  { label: "Who This Is For", href: "/who-this-is-for" },
  { label: "1:1 Work", href: "/one-to-one" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-border bg-ground/95 backdrop-blur-md" : "border-border-light bg-ground"}`}>
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-normal text-ink tracking-wide hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            Ugis Strauss
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide whitespace-nowrap transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-accent"
                    : "text-ink-light hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
              className="text-sm px-5 py-2.5 bg-accent text-white hover:bg-accent-dim transition-colors tracking-wide whitespace-nowrap"
            >
              Book a first conversation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border-light bg-ground">
          <nav className="max-w-[1120px] mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors ${
                  pathname === link.href ? "text-accent" : "text-ink"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
              className="mt-2 inline-block text-sm px-5 py-3 border border-accent text-accent text-center"
              onClick={() => setOpen(false)}
            >
              Book a first conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
