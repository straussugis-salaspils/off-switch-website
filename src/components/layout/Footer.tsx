import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "The Method", href: "/the-method" },
  { label: "Evidence", href: "/evidence" },
  { label: "Ukraine Project", href: "/ukraine-project" },
  { label: "1:1 Work", href: "/one-to-one" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "About", href: "/about" },
];

const issueLinks = [
  { label: "Anxiety", href: "/issues/anxiety" },
  { label: "PTSD", href: "/issues/ptsd" },
  { label: "Burnout", href: "/issues/burnout" },
  { label: "Panic Attacks", href: "/issues/panic-attacks" },
  { label: "Recurring Triggers", href: "/issues/emotional-triggers" },
  { label: "Trauma and Past Events", href: "/issues/trauma-and-past-events" },
  { label: "Sleep and Night Anxiety", href: "/issues/sleep" },
  { label: "When Emotions Take Over", href: "/issues/when-emotions-take-over" },
  { label: "Stress and Overload", href: "/issues/stress-and-overload" },
  { label: "Overthinking", href: "/issues/overthinking" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/off-switch-method-logo.svg"
              alt="Off-Switch Method"
              width={1200}
              height={220}
              className="h-11 w-auto mb-4"
            />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              The Off-Switch Method. A structured method for working with emotional
              charge, triggers, and stress reactions.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-light mb-4">Pages</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Issues */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-light mb-4">Who This Is For</p>
            <ul className="space-y-2.5">
              {issueLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-muted-light">
            © {new Date().getFullYear()} Ugis Strauss. All rights reserved.
          </p>
          <Link
            href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation"
            className="text-xs text-muted hover:text-ink transition-colors"
          >
            Book a first conversation →
          </Link>
        </div>
      </div>
    </footer>
  );
}
