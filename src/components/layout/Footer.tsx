import Image from "next/image";
import Link from "next/link";

import CookieSettingsButton from "@/components/layout/CookieSettingsButton";

const footerLinks = [
  { label: "Library", href: "/library" },
  { label: "The Method", href: "/the-method" },
  { label: "Who This Is For", href: "/who-this-is-for" },
  { label: "Evidence", href: "/evidence" },
  { label: "Formats", href: "/formats" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "About Ugis", href: "/about" },
];

const libraryLinks = [
  { label: "Anxiety and specific fears", href: "/library/anxiety-specific-fears" },
  { label: "Panic attacks", href: "/library/panic-attacks" },
  { label: "Trauma and PTSD", href: "/library/trauma-ptsd" },
  { label: "The past and difficult memories", href: "/library/past-difficult-memories" },
  { label: "Relationships, closeness and boundaries", href: "/library/relationships-closeness-boundaries" },
  { label: "Work, burnout and difficulty acting", href: "/library/work-burnout-action" },
  { label: "Anger, guilt and self-worth", href: "/library/anger-guilt-self-worth" },
  { label: "Repetitive thoughts, sleep and low mood", href: "/library/thoughts-sleep-low-mood" },
  { label: "Building a new life", href: "/library/building-new-life" },
  { label: "How the method works", href: "/library/how-the-method-works" },
];

const footerLinkClass = "inline-flex min-h-11 items-center text-[13px] leading-5 text-deep-muted transition-colors hover:text-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dim";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-accent bg-deep text-deep-text">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-8 sm:px-7 sm:py-10 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1.7fr] lg:gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <Image src="/off-switch-method-logo.svg" alt="Off-Switch Method" width={1120} height={220} className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-[19rem] text-sm leading-6 text-deep-muted">
              Remove the automatic reaction. Recover calm, choice and the ability to act differently.
            </p>
            <Link
              href="https://t.me/ugisstrauss"
              className="mt-5 inline-flex min-h-11 items-center bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dim focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
            >
              Write to Ugis <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <nav aria-label="Site sections">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-dim">Site</p>
            <ul className="grid grid-cols-2 gap-x-4">
              {footerLinks.map((link) => <li key={link.href}><Link href={link.href} className={footerLinkClass}>{link.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="Library subjects">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-dim">Library</p>
            <Link href="/library" className="inline-flex min-h-11 items-center text-sm font-semibold text-deep-text transition-colors hover:text-accent-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dim sm:hidden">
              All 10 subjects <span aria-hidden="true" className="ml-2 text-accent-dim">→</span>
            </Link>
            <ul className="hidden grid-cols-2 gap-x-7 sm:grid">
              {libraryLinks.map((link) => <li key={link.label}><Link href={link.href} className={footerLinkClass}>{link.label}</Link></li>)}
            </ul>
          </nav>
        </div>

        <div className="mt-6 border-t border-deep-border pt-4 text-xs leading-5 text-deep-muted">
          <p className="max-w-[72rem] text-[11px] leading-5">
            Operated by Resulta Consulting FZ-LLC · FDBC0803, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates · Tax Reg. No: 105211901100001
          </p>
          <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ugis Strauss. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <Link href="/privacy-policy" className="inline-flex min-h-11 items-center transition-colors hover:text-accent-dim">Privacy policy</Link>
              <Link href="/terms" className="inline-flex min-h-11 items-center transition-colors hover:text-accent-dim">Terms of use and payment</Link>
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
