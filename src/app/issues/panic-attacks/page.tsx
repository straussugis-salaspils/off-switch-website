import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Panic Attacks | The Off-Switch Method",
  description:
    "The conviction is absolute: something is seriously wrong. Knowing it is a panic attack doesn't change what the body insists while it is happening.",
};

export default function PanicAttacks() {
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
              Panic Attacks
            </h1>
            <div className="space-y-4 max-w-2xl">
              <p className="text-base text-deep-muted leading-relaxed">
                The conviction is absolute: something is seriously wrong. Heart, chest, breathing, dizziness, unreality — the body is certain it is under threat.
              </p>
              <p className="text-base text-deep-muted leading-relaxed">
                The mind may know this has happened before. It may know it is a panic attack. That does not change what the body insists while it is happening.
              </p>
              <p className="text-base text-deep-muted leading-relaxed">
                Then the second problem begins: life between episodes. Monitoring. Avoidance. Checking exits. Scanning for early signs. The fear of the next attack becomes part of the pattern itself.
              </p>
            </div>
            <p className="text-sm text-deep-muted leading-relaxed max-w-2xl mt-8 pt-6 border-t border-deep-border">
              If symptoms are new, severe, unusual, or medically uncertain, medical causes should be ruled out first. This page is about recurring panic patterns after appropriate medical risk has been considered.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Recognition
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-8 tracking-display">
              What this often looks like
            </h2>

            {/* Three recognition groups — h3 subsection headings, border dividers */}
            <div>

              <div className="pb-10">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-ink mb-5">
                  During the episode
                </h3>
                <div className="space-y-3">
                  {[
                    "Heart racing, chest pressure, difficulty breathing — the body's alarm system fully activated.",
                    "Dizziness, unreality, a sense of losing control or that something is medically wrong.",
                    "The mind can know it is a panic attack. That knowledge does not stop it.",
                  ].map((item, i) => (
                    <p key={i} className="text-base text-ink-light leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>

              <div className="py-10 border-t border-border">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-ink mb-5">
                  Between episodes
                </h3>
                <div className="space-y-3">
                  {[
                    "Not returning to the place, situation, or context where a previous attack happened.",
                    "Monitoring: scanning for early physical signs that another might be starting.",
                    "Staying near exits. Staying near safe people or familiar environments. The list of situations that feel risky growing slowly.",
                    "Anticipatory dread before things that have previously triggered attacks — and sometimes before things that haven't.",
                  ].map((item, i) => (
                    <p key={i} className="text-base text-ink-light leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-border">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-ink mb-5">
                  What makes it self-reinforcing
                </h3>
                <div className="space-y-3">
                  {[
                    "Scanning for early signs can produce the very sensations the scan is looking for.",
                    "Fear of the next attack keeps the body in a state already closer to panic.",
                    "The anticipation of when the next one comes becomes part of what makes it more likely.",
                  ].map((item, i) => (
                    <p key={i} className="text-base text-ink-light leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>

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
              What keeps the pattern running
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The body has not fully let go of what happened. When something resembles it — a sensation, a situation, a place — it pulls the same response.
              </p>
              {/* Key sentence — text-ink (full contrast) for visual weight */}
              <p className="text-base text-ink leading-relaxed">
                You don&rsquo;t need to be in danger. You only need to be somewhere the body remembers as dangerous.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                There is also a second layer: scanning for signs that another attack might be coming. That scanning, constant and exhausting, keeps the body closer to panic than it would otherwise be. The fear of the next attack becomes part of what makes the next attack more likely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              The method
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6 tracking-display">
              What the method addresses
            </h2>
            <div className="space-y-4">
              <p className="text-base text-ink-light leading-relaxed">
                The method addresses what the panic connects back to — the specific experiences where the pattern started — and the anticipatory fear that keeps the loop running.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                As the activation on that original material reduces, triggering situations lose their pull. As the anticipatory fear is addressed directly, the vigilance that sustains it changes.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The work does not require recreating the worst episodes. The body&rsquo;s stored response to what happened is what is addressed, not the episode itself.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                This is relevant where understanding the pattern is not the missing piece. The pattern is already known. What has not yet changed is the body&rsquo;s response to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-14 lg:py-16 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-accent-dim mb-6">
              Reported outcome
            </p>
            <div className="border-l-2 border-accent-dim pl-6 py-1 mb-4">
              <blockquote className="text-base text-deep-text/80 leading-relaxed italic mb-3">
                &ldquo;Panic attacks I had suffered from for more than 40 years disappeared. Not a single doctor had been able to help me with this.&rdquo;
              </blockquote>
              <cite className="not-italic text-sm text-deep-muted">
                — Nargiz Huseynzade
              </cite>
            </div>
            <div className="mt-5">
              <Button href="/evidence" variant="ghost-light" size="sm">
                Full documentation on the Evidence page →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-base text-ink-light leading-relaxed mb-8">
              If this pattern is familiar and you want to know whether the method fits your case:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="md">
                Book a first conversation
              </Button>
              <Button href="/the-method" variant="ghost" size="md">
                How the method works →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
