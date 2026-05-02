import Button from "@/components/ui/Button";
import Link from "next/link";

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface Proof {
  type: "testimonial";
  quote: string;
  attribution: string;
  context?: string;
  cta?: { label: string; href: string };
}

interface CTAs {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  closing?: string;
}

interface IssuePageLayoutProps {
  h1: string;
  intro: string[];
  safetyNote?: string;
  whatItLooksLike: string[];
  mechanism: Section;
  methodSection: Section;
  proof: Proof;
  proofLabel?: string;
  ctas: CTAs;
}

export default function IssuePageLayout({
  h1,
  intro,
  safetyNote,
  whatItLooksLike,
  mechanism,
  methodSection,
  proof,
  proofLabel,
  ctas,
}: IssuePageLayoutProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-14 lg:pt-28 lg:pb-18 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-deep-muted mb-4">
              <Link href="/who-this-is-for" className="hover:text-deep-text transition-colors">
                Who This Is For
              </Link>
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-8">
              {h1}
            </h1>
            <div className="space-y-4 max-w-2xl">
              {intro.map((p, i) => (
                <p key={i} className="text-base text-deep-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {safetyNote && (
              <p className="text-sm text-deep-muted leading-relaxed max-w-2xl mt-8 pt-6 border-t border-deep-border">
                {safetyNote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Recognition
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6 tracking-display">
              What this often looks like
            </h2>
            <div className="space-y-3">
              {whatItLooksLike.map((item, i) => (
                <p key={i} className="text-base text-ink-light leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MECHANISM */}
      <section className="py-14 lg:py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Mechanism
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6 tracking-display">
              {mechanism.heading}
            </h2>
            <div className="space-y-4">
              {mechanism.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-ink-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHOD APPLICATION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              The method
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6 tracking-display">
              {methodSection.heading}
            </h2>
            <div className="space-y-4">
              {methodSection.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-ink-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-14 lg:py-16 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent-dim mb-6">
              {proofLabel ?? "What people report"}
            </p>
            <div className="border-l-2 border-accent-dim pl-6 py-1 mb-4">
              <blockquote className="text-base text-deep-text/80 leading-relaxed italic mb-3">
                &ldquo;{proof.quote}&rdquo;
              </blockquote>
              <cite className="not-italic text-sm text-deep-muted">
                — {proof.attribution}
                {proof.context && (
                  <span className="text-deep-muted">, {proof.context}</span>
                )}
              </cite>
            </div>
            {proof.cta && (
              <div className="mt-5">
                <Button href={proof.cta.href} variant="ghost-light" size="sm">
                  {proof.cta.label} →
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {ctas.closing && (
              <p className="text-base text-ink-light leading-relaxed mb-8">
                {ctas.closing}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={ctas.primary.href} variant="primary" size="md">
                {ctas.primary.label}
              </Button>
              {ctas.secondary && (
                <Button href={ctas.secondary.href} variant="ghost" size="md">
                  {ctas.secondary.label} →
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
