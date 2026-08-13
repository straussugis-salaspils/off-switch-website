"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "The Method", href: "/the-method" },
  { label: "Who This Is For", href: "/who-this-is-for" },
  { label: "Evidence", href: "/evidence" },
  { label: "Library", href: "/library" },
  { label: "Formats", href: "/formats" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "About", href: "/about" },
] as const;

function isRouteActive(pathname: string, href: string) {
  if (href === "/formats") {
    return pathname === href || pathname === "/one-to-one" || pathname === "/group";
  }
  if (href === "/for-organizations") {
    return pathname === href || pathname === "/for-institutions" || pathname === "/institutional-inquiry";
  }
  if (href === "/library") {
    return pathname === href || pathname.startsWith("/articles/") || pathname.startsWith("/issues/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const mobileScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousWidth = body.style.width;
    mobileScrollYRef.current = window.scrollY;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${mobileScrollYRef.current}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.width = previousWidth;
      window.scrollTo(0, mobileScrollYRef.current);
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      mobileButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`border-b sticky top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${scrolled ? "border-border bg-ground/95 backdrop-blur-md" : "border-border-light bg-ground"}`}>
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-6 h-16 lg:h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex min-h-11 shrink-0 items-center transition-opacity hover:opacity-80 motion-reduce:transition-none"
            onClick={() => setOpen(false)}
            aria-label="Off-Switch Method"
          >
            <Image
              src="/off-switch-method-logo.svg"
              alt="Off-Switch Method"
              width={1200}
              height={220}
              className="h-10 w-auto md:h-11 xl:h-[52px]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-11 items-center text-[12.5px] tracking-wide whitespace-nowrap transition-colors motion-reduce:transition-none ${
                  isRouteActive(pathname, link.href)
                    ? "text-accent"
                    : "text-ink-light hover:text-accent"
                }`}
                aria-current={isRouteActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block shrink-0">
            <Link
              href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
              className="inline-flex min-h-11 items-center px-4 py-2.5 text-[13px] tracking-wide whitespace-nowrap bg-accent text-white hover:bg-accent-dim transition-colors motion-reduce:transition-none"
            >
              Book a first conversation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={mobileButtonRef}
            type="button"
            className="xl:hidden inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-ink"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-all duration-200 motion-reduce:transition-none ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 motion-reduce:transition-none ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 motion-reduce:transition-none ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border-light bg-ground xl:hidden">
          <nav aria-label="Mobile navigation" className="max-w-[1120px] mx-auto px-6 py-5 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-12 items-center border-b border-border-light text-base transition-colors ${
                  isRouteActive(pathname, link.href) ? "text-accent" : "text-ink"
                }`}
                onClick={() => setOpen(false)}
                aria-current={isRouteActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
              className="mt-2 inline-flex min-h-12 items-center justify-center px-5 py-3 text-center text-sm border border-accent text-accent"
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
