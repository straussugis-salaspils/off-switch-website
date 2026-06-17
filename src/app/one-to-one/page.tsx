import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import CTABand from "@/components/blocks/CTABand";

export const metadata: Metadata = {
  title: "1:1 Work",
  description:
    "Ugis Strauss delivers the Off-Switch Method in structured 1:1 engagements. Private work usually runs as a structured 12-session engagement over 3–4 months, with a clear endpoint.",
};

export default function OneToOne() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              1:1 Work
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Ugis Strauss delivers the Off-Switch Method in structured 1:1 engagements.
              Private work usually runs as a structured 12-session engagement over 3–4
              months, with daily practice between sessions. It has a beginning and an end.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              You do not need to prove that it is difficult enough, or explain the whole
              problem perfectly in advance. You can begin with what keeps repeating, what
              you have already tried, and where the reaction still takes over.
            </p>
          </div>
        </div>
      </section>

      {/* WHO COMES */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Who comes for 1:1 work
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base text-ink-light leading-relaxed">
                People who can describe their anxiety in precise detail — where it came
                from, what triggers it, why it makes sense — and still wake up inside the
                same reaction. The understanding is there. The automatic response has not
                changed.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                People who have already done real work on this. Years of therapy, coaching,
                self-development, or sustained effort. It produced insight. The patterns
                remained.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Executives, founders, and professionals in high-demand roles where sustained
                emotional load has become a problem they can no longer manage around.
              </p>
            </div>

            <TestimonialCard
              quote="I was functioning well from the outside. Internally I was carrying constant load — not one trauma, just accumulation that never reset. The effect showed up in clarity and recovery speed, not only in stress levels. For someone in a demanding role, that is what matters."
              attribution="John Bennett"
            />

            <p className="text-base text-ink-light leading-relaxed mt-6">
              People who want a structured engagement with a clear arc and a defined
              endpoint. Not an ongoing support relationship. A course of work that finishes.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT BRINGS PEOPLE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              What brings people here
            </h2>
            <div className="space-y-3 mb-8">
              {[
                "Anxiety that has been understood and worked on for years and still fires without apparent cause.",
                "A sustained period of pressure — a difficult role, a difficult period — that ended. The reaction is still carried in the body.",
                "Grief, loss, or shock that was processed in words but is still present in the body when the memory surfaces.",
                "A specific pattern — a reactive response, an avoidance behaviour, a recurring situation that always produces the same result — that has not responded to previous work.",
                "A high-stakes period ahead where the current emotional baseline is not the starting point they want.",
              ].map((item, i) => (
                <p key={i} className="text-base text-ink-light leading-relaxed">
                  {item}
                </p>
              ))}
            </div>

            <div className="space-y-6 mb-6">
              <TestimonialCard
                quote="I realized that for the last 10 years I could not move forward just because of situations from my past. I tried many methods and was sure I had dealt with everything — only here did it turn out those situations were still affecting me."
                attribution="Victoria Vayzhgela"
                context="Ukraine"
              />
              <TestimonialCard
                quote="I had done years of therapy, including CBT. I understood my patterns. The reactions were still there. This was the first time something shifted not in how I thought about my history, but in how my system actually responded to it."
                attribution="Brooke McDermont"
              />
            </div>

            <p className="text-base text-ink-light leading-relaxed mb-6">
              If a pattern above lands close, a fit conversation is the right next step.
            </p>

            <Button href="/who-this-is-for" variant="ghost" size="sm">
              Dealing with a specific pattern → Who This Is For
            </Button>
          </div>
        </div>
      </section>

      {/* 1:1 PROCESS FLOW */}
      <section className="py-16 lg:py-20 bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-deep-text mb-8 tracking-display">
            How the engagement runs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-deep-border max-w-5xl">
            {[
              { step: "01", label: "Initial conversation", desc: "45 minutes. Your situation. What you've tried. Whether this is a fit." },
              { step: "02", label: "Fit assessment", desc: "Clear picture of what the engagement involves and what it requires." },
              { step: "03", label: "Private work", desc: "Three phases, usually 12 sessions over 3–4 months. Most progress happens in daily practice between sessions." },
              { step: "04", label: "Tracking change", desc: "Symptom score is measured each session. Progress is tracked as a number, not left as a general impression." },
              { step: "05", label: "Integrate", desc: "Behavioral and structural work. Sessions become infrequent. The engagement closes when the work is done." },
            ].map((item) => (
              <div key={item.step} className="bg-deep-surface p-6 lg:p-8">
                <p className="font-serif text-xs text-deep-muted mb-3">{item.step}</p>
                <p className="text-base font-medium text-deep-text mb-3">{item.label}</p>
                <p className="text-sm text-deep-muted leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT'S STRUCTURED */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              How the work is structured
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-6">
              The Off-Switch Method moves through three phases. Each must be substantially
              complete before the next begins.
            </p>
            <div className="space-y-5 mb-8">
              <p className="text-base text-ink-light leading-relaxed">
                The Regulate phase works down accumulated emotional load — chronic stress,
                body tension, future anxiety — to a level where deeper work is accessible
                without destabilizing. The client learns the primary tool in Session 1
                and uses it daily from that point.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The Repattern phase works through the full emotional history systematically
                — not only the presenting situation, but the whole range of material that is
                still carrying activation. This runs for approximately two months of daily
                practice, mostly between sessions.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                The Integrate phase addresses what remains after the emotional work:
                behavioral patterns, structural habits, and ways of operating that are now
                visible as the primary issue.
              </p>
              <p className="text-base text-ink-light leading-relaxed">
                Sessions become less frequent as the work progresses. The engagement closes
                when the work is done.
              </p>
            </div>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              The aim of private work is not endless discussion. Once the
              technique is learned, individual targets can sometimes be worked
              on in minutes; the full process provides the sequence, pacing,
              tracking, and integration around that.
            </p>
            <Button href="/the-method" variant="ghost" size="sm">
              Full detail on The Method page →
            </Button>
          </div>
        </div>
      </section>

      {/* BY THE TIME THE WORK CLOSES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              By the time the work closes
            </h2>
            <p className="text-base text-ink-light leading-relaxed">
              The typical pattern at engagement close is: the presenting issue no longer
              drives the person in the same way, sleep and recovery have returned, and
              behavioral patterns that were previously masked by emotional load have become
              visible and addressable. Sessions become infrequent. The engagement ends.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT REQUIRES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              What the work requires
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The primary tool is introduced in Session 1 and owned by the client from that
              point. It takes about fifteen minutes to learn.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Progress depends on regular practice. A client working with it fifteen to
              thirty minutes daily moves through the work substantially faster than one who
              uses it only when symptoms are acute. One client cleared his full emotional
              history in approximately one month by using the technique consistently during
              otherwise idle time — commuting, waiting, brief gaps in the working day. That
              pace is unusual. The principle is not.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              In the middle phase, the main workload is a structured review of personal
              history — at the client&rsquo;s own pace — until each area no longer
              drives the same response. This runs for approximately two months.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              Clients who are not willing or able to practice daily between sessions are not
              a fit for this engagement.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS NOT FOR */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
              Who this is not for
            </h2>
            <div className="space-y-5">
              {[
                {
                  label: "People who want ongoing conversational support.",
                  body: "The work here is structured and finite. A practitioner offering long-term therapeutic support is better suited.",
                },
                {
                  label: "People whose situation requires immediate psychiatric care.",
                  body: "The Off-Switch Method works alongside psychiatric treatment where that is already part of the picture. It does not replace it.",
                },
                {
                  label: "People looking for accountability coaching or goal support.",
                  body: "That is a different kind of work.",
                },
                {
                  label: "People who are not prepared to practice daily between sessions.",
                  body: "Without the daily work, the method does not progress.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-border-light pb-5">
                  <p className="text-base font-medium text-ink mb-1">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIRST CONVERSATION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-4">
              The first conversation
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The first step is a 45-minute conversation. You describe your situation and
              what you&rsquo;ve already tried. I give you a clear picture of what the
              engagement involves and whether it fits. No commitment is required from that
              conversation.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              If it makes sense to proceed, Session 1 follows and the work begins.
            </p>
            <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
              Book a first conversation
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        dark
        body="If this is the right kind of work, the first step is simple."
        primary={{ label: "Book a first conversation", href: "https://calendly.com/ugisstrauss/private-1to1-fit-conversation" }}
        secondary={{ label: "See the Evidence", href: "/evidence" }}
      />
    </>
  );
}
