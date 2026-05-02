import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import EvidenceCallout from "@/components/blocks/EvidenceCallout";

export const metadata: Metadata = {
  title: "Ugis Strauss — The Off-Switch Method",
  description:
    "For anxiety, overload, and reactions that do not switch off. A structured approach when understanding alone is not enough.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-serif text-xl lg:text-2xl font-normal text-accent-dim tracking-display mb-5">
              The Off-Switch Method
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-6xl font-bold text-deep-text leading-[1.05] tracking-display mb-6">
              When reactions<br />
              don&rsquo;t switch off
            </h1>
            <p className="text-xl lg:text-2xl font-normal text-deep-text leading-snug mb-5 max-w-2xl">
              For anxiety, overload, panic, trauma load, and emotional triggers &mdash; even when you understand what is happening.
            </p>
            <p className="text-base lg:text-lg text-deep-muted leading-relaxed mb-8 max-w-2xl">
              A structured method for reducing the charge behind persistent stress activation when insight alone is not enough.
            </p>
            <div className="border-t border-deep-border pt-5 mb-12 max-w-xl">
              <p className="text-sm text-deep-muted leading-relaxed">
                Developed over 30 years. Applied in individual and institutional work,
                including a documented Ukraine field application with 7,000+ participants.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button href="/the-method" variant="primary" size="lg">
                How the method works
              </Button>
              <Link
                href="/evidence"
                className="text-sm text-deep-muted hover:text-deep-text transition-colors"
              >
                See the evidence →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BLOCK */}
      <section className="py-12 lg:py-14 border-y border-border bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-base lg:text-lg text-ink leading-relaxed max-w-3xl">
            In March 2022, this method was deployed as a free crisis-response
            program for Ukrainians under active war conditions.{" "}
            <strong className="font-bold">7,000+ participants.</strong>{" "}
            <strong className="font-bold">80%</strong> inside Ukraine during
            active hostilities. Average PTSD symptom reduction:{" "}
            <strong className="font-bold text-accent">42&ndash;60%</strong>,
            sustained at one-month follow-up. Developed over{" "}
            <strong className="font-bold">30 years</strong> of clinical and
            institutional practice. Across measured cohorts, the average
            symptom reduction was sustained at one-month follow-up; external
            conditions during the program had not changed.
          </p>
        </div>
      </section>

      {/* UNDERSTANDING VS REACTION */}
      <section className="py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-10 tracking-display">
            Why understanding alone doesn&rsquo;t change it
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl">
            {/* Left: what you understand */}
            <div className="border border-border p-10 lg:p-12 lg:border-r-0">
              <p className="text-xs uppercase tracking-widest text-muted-light mb-6">
                What you understand
              </p>
              <p className="font-serif text-2xl font-normal text-ink leading-snug mb-8">
                Where it came from. What triggers it. Why the pattern exists.
              </p>
              <div className="space-y-3">
                {[
                  "Insight is real.",
                  "The story may be complete.",
                  "The pattern may be named.",
                ].map((l) => (
                  <p key={l} className="text-sm text-muted flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-muted-light shrink-0" />
                    {l}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: what still fires */}
            <div className="border border-border p-10 lg:p-12 bg-deep">
              <p className="text-xs uppercase tracking-widest text-deep-muted mb-6">
                What still fires automatically
              </p>
              <p className="font-serif text-2xl font-normal text-deep-text leading-snug mb-8">
                The 3am activation. The reaction before control. The body that has
                not followed.
              </p>
              <div className="space-y-3">
                {[
                  "Reaction arrives first.",
                  "Understanding comes too late.",
                  "The loop continues.",
                ].map((l) => (
                  <p key={l} className="text-sm text-deep-muted flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent-dim shrink-0" />
                    {l}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="text-base text-ink-light leading-relaxed mt-8 max-w-2xl">
            The Off-Switch Method reduces the charge on specific material — until the
            trigger no longer has the same fuel.
          </p>
        </div>
      </section>

      {/* METHOD OVERVIEW */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-3 tracking-display">
            How the method works
          </h2>
          <p className="text-sm text-muted uppercase tracking-widest mb-6">
            A three-phase structure
          </p>
          <p className="text-base text-ink-light leading-relaxed max-w-2xl mb-8">
            The method moves through three phases in sequence. Each must be substantially
            complete before the next begins. The sequence is the mechanism.
          </p>

          <div className="max-w-4xl border-t-2 border-accent">
            {[
              {
                num: "01",
                title: "Regulate",
                body: "Reduce accumulated emotional load. The primary tool is introduced in Session 1 and owned by the client from that point. Applies to chronic stress, acute overload, and body tension.",
                label: "Immediate",
              },
              {
                num: "02",
                title: "Repattern",
                body: "Clear the full emotional history and rebuild the internal view of the future. Two months of structured daily practice. The main workload runs between sessions.",
                label: "Deep pattern work",
              },
              {
                num: "03",
                title: "Integrate",
                body: "Make the change hold without ongoing practitioner involvement. Behavioral architecture, life structure, and the patterns that are now visible once the emotional weight is cleared.",
                label: "Integration",
              },
            ].map((phase, i) => (
              <div
                key={phase.num}
                className={`grid grid-cols-1 lg:grid-cols-[48px_1fr_160px] gap-4 lg:gap-8 py-10 lg:py-12${i < 2 ? " border-b border-border" : ""}`}
              >
                {/* Number (mobile: inline with label) */}
                <div className="flex items-center justify-between lg:block">
                  <span className="font-sans text-xs font-medium text-muted tabular-nums lg:pt-1.5">
                    {phase.num}
                  </span>
                  <span className="lg:hidden text-xs uppercase tracking-widest text-accent font-medium">
                    {phase.label}
                  </span>
                </div>
                {/* Title + body */}
                <div>
                  <h3 className="font-serif text-3xl lg:text-5xl font-bold text-ink mb-3 lg:mb-5 tracking-display">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted leading-loose">{phase.body}</p>
                </div>
                {/* Phase label (desktop only, right-aligned) */}
                <div className="hidden lg:block">
                  <span className="text-xs uppercase tracking-widest text-accent font-medium">
                    {phase.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/the-method" variant="ghost" size="md">
              Full detail on The Method →
            </Button>
          </div>
        </div>
      </section>

      {/* WHO COMES HERE */}
      <section className="py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-10 tracking-display">
            People who already understand — and still feel it
          </h2>
          <div className="flex flex-col gap-7 mb-10 max-w-2xl">
            {[
              "People who can describe their anxiety in precise detail — and still wake up with it at 3am.",
              "People who have done real work on this — therapy, coaching, years of effort — and still feel the same activation.",
              "People who functioned through burnout for long enough that functioning stopped.",
              "People whose nervous system organized around something that happened years ago and hasn't let go.",
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span className="font-mono text-xs text-muted-light tabular-nums shrink-0 mt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl lg:text-2xl italic text-ink leading-snug">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-ink-light leading-relaxed mb-8 max-w-2xl">
            What changes when the work is completed: the pattern stops returning
            the same way; sleep and recovery come back; the response that did
            not yield to insight does.
          </p>
          <Button href="/who-this-is-for" variant="ghost" size="md">
            Dealing with a specific pattern →
          </Button>
        </div>
      </section>

      {/* EVIDENCE PREVIEW */}
      <section className="py-20 lg:py-24 bg-deep">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-accent-dim mb-3">
            Field evidence
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-deep-text mb-4 tracking-display">
            Ukraine field application — 2022
          </h2>
          <div className="max-w-3xl mb-10">
            <p className="text-base text-deep-muted leading-relaxed">
              In 2022, the Off-Switch Method was deployed as a free crisis-response program
              for Ukrainians experiencing active war trauma. More than 7,000 participants.
              80% inside Ukraine during active hostilities.
            </p>
          </div>

          <EvidenceCallout
            dark
            stats={[
              { value: "7,000+", label: "participants" },
              { value: "80%", label: "inside Ukraine during active hostilities" },
              { value: "42–60%", label: "average PTSD symptom reduction" },
              { value: "sustained", label: "at one-month follow-up" },
            ]}
            note="Field evidence — pre/post measurement across multiple cohorts. Not a randomized controlled trial."
          />

          <div className="mt-10 max-w-2xl">
            <TestimonialCard
              dark
              quote="Panic attacks I had suffered from for more than 40 years disappeared. Not a single doctor had been able to help me with this."
              attribution="Nargiz Huseynzade"
            />
          </div>

          <div className="mt-8">
            <Button href="/evidence" variant="ghost-light" size="md">
              See the full evidence →
            </Button>
          </div>
        </div>
      </section>

      {/* AUDIENCE PATHS */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-4 tracking-display">
            Individual or organizational
          </h2>
          <p className="text-base text-ink-light leading-relaxed mb-10 max-w-2xl">
            What this work produces is different by path.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
            <div className="border border-border bg-white p-10 lg:p-12 flex flex-col">
              <p className="text-xs uppercase tracking-widest text-accent mb-5">
                1:1 Work
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-ink mb-4">
                For individuals
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Anxiety, trauma load, burnout, emotional triggers, overload. For people
                who have not resolved this through previous approaches.
              </p>
              <p className="text-sm text-ink-light leading-relaxed mb-8 flex-1">
                Typical close-state: the recurring pattern stops returning the same way;
                sleep and recovery come back.
              </p>
              <Button href="/one-to-one" variant="outline" size="md">
                See how 1:1 works
              </Button>
            </div>
            <div className="border border-border bg-white p-10 lg:p-12 flex flex-col">
              <p className="text-xs uppercase tracking-widest text-accent mb-5">
                Organizational work
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal text-ink mb-4">
                For organizations
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Structured group delivery for organizations supporting teams under pressure, crisis exposure, burnout risk, or accumulated emotional load. Field-tested at 7,000-participant scale.
              </p>
              <p className="text-sm text-ink-light leading-relaxed mb-8 flex-1">
                Typical close-state: recovery capacity restored, decision quality
                recovered, function held under sustained pressure.
              </p>
              <Button href="/for-organizations" variant="primary" size="md">
                See organizational formats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-deep">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="text-base text-deep-muted leading-relaxed mb-6">
              If this already sounds familiar, this is where it starts.
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-deep-text mb-6 tracking-display">
              Start with a conversation
            </h2>
            <p className="text-base text-deep-muted leading-relaxed mb-12">
              45 minutes. You describe your situation and what you&rsquo;ve already tried.
              I give you a clear picture of whether this engagement makes sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Book a first conversation
              </Button>
              <Button href="https://tally.so/r/441ZOd" variant="ghost-light" size="lg">
                Organizational inquiry →
              </Button>
            </div>
            <p className="mt-8 text-sm text-deep-muted">
              Not ready?{" "}
              <Link
                href="/evidence"
                className="text-accent-dim hover:text-accent transition-colors underline underline-offset-2"
              >
                Read the evidence first →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
