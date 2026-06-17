import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Book a First Conversation",
  description:
    "The first conversation is 45 minutes. You describe your situation and what you've tried. A clear picture of what the work involves and whether it fits.",
};

export default function Book() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              The First Conversation
            </h1>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              The first conversation is 45 minutes. You describe your situation and what
              you&rsquo;ve tried. I give you a clear picture of what the work involves and
              whether it fits. That&rsquo;s the whole agenda.
            </p>
            <p className="text-base text-deep-muted leading-relaxed">
              No commitment is required from the conversation itself. This is not a sales
              trap, and it is not a test of readiness. Fit is checked in both directions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE CONVERSATION COVERS */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">
              What this conversation covers
            </h2>
            <div className="space-y-3">
              {[
                "Your situation — what is present, how long, what you've already tried.",
                "Whether the Off-Switch Method is the right fit for your situation and goals.",
                "What a full engagement involves and what it requires from you.",
                "Any questions you have about the method or what the work looks like in practice.",
              ].map((item, i) => (
                <p key={i} className="text-base text-ink-light leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-6">
              What this is not
            </h2>
            <div className="space-y-5">
              {[
                {
                  label: "The work begins later.",
                  body: "If both sides decide to proceed, the engagement starts with Session 1. The first conversation is about fit.",
                },
                {
                  label: "Nothing is agreed until both sides are clear.",
                  body: "The conversation is the start of a decision, not the decision itself.",
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

      {/* BEFORE YOU BOOK */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-4">
              Before you book
            </h2>
            <p className="text-base text-muted leading-relaxed">
              It helps to have a rough sense of your situation — what you&rsquo;re dealing
              with, how long, what you&rsquo;ve already tried. A plain description is
              enough. You do not need to arrive with a perfectly formulated problem. It
              is enough to describe what keeps repeating, what you have already tried,
              and what you no longer want to carry alone.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER THE CONVERSATION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-ink mb-4">
              After the conversation
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-3">
              If it makes sense to proceed, the next step is Session 1 — where the method
              begins and the primary tool is introduced.
            </p>
            <p className="text-base text-muted leading-relaxed">
              If it is not the right fit, you will have a clearer picture of what kind of
              support would be.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-base text-muted leading-relaxed mb-8">
              Select a time. The conversation takes 45 minutes.
            </p>

            <div className="border border-accent/40 bg-ground p-10 text-center">
              <p className="text-sm text-muted-light mb-6">
                Choose a time in Calendly. The conversation takes 45 minutes.
              </p>
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Open booking
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
