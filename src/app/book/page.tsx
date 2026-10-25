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
      <section data-editorial-section className="grain py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow-page-dark">A first conversation · 45 minutes</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              The First Conversation
            </h1>
            <p className="text-base text-deep-muted leading-relaxed mb-4">
              You describe your situation and what you&rsquo;ve tried. I explain what
              the work would involve, and we consider whether it makes sense for you.
            </p>
            <p className="text-base text-deep-muted leading-relaxed">
              The 45-minute conversation is complimentary. You do not have to decide in advance. The conversation does not commit
              you to the work.
            </p>
            <div className="mt-8">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Choose a time in Calendly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE CONVERSATION COVERS */}
      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-screen-xl gap-12 px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] lg:gap-20 lg:px-10">
          <div>
            <h2 className="mb-8 font-serif text-3xl tracking-display text-ink lg:text-4xl">
              What this conversation covers
            </h2>
            <ol className="border-t border-border">
              {[
                ["The situation you want to change", "Where it shows up, how long it has been happening and what you have already tried."],
                ["Whether the Off-Switch Method fits your situation", "Whether the Off-Switch Method makes sense for your situation and what you want to change."],
                ["What the sessions and independent practice involve", "What we would do together, the daily practice between meetings, and any questions you have about the method."],
              ].map(([question, answer], i) => (
                <li key={question} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-border py-6">
                  <span className="pt-1 font-serif text-lg text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl">{question}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{answer}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="self-start border-t-2 border-accent bg-surface p-6 sm:p-8">
            <h2 className="font-serif text-2xl leading-snug text-ink">Before you book</h2>
            <p className="mt-4 text-base leading-7 text-ink-light">
              You might know exactly what the problem is, or only that the same
              thing keeps happening and you want it to change. You do not need
              a diagnosis or a perfectly organised story.
            </p>
            <h3 className="mt-8 border-t border-border pt-6 font-serif text-xl text-ink">After the conversation</h3>
            <p className="mt-3 text-base leading-7 text-muted">
              We both need to be comfortable with the decision to proceed. If it
              makes sense, the next step is Session 1, where the method begins
              and the primary tool is introduced.
            </p>
            <p className="mt-3 text-base leading-7 text-muted">
              If it is not the right fit, you will have a clearer picture of
              what kind of support would be.
            </p>
          </aside>
        </div>
      </section>

      {/* BOOKING */}
      <section data-editorial-section className="py-12 sm:py-14 lg:py-16 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-ink mb-6">
              Choose a time for your first conversation
            </h2>

            <div className="border border-accent/40 bg-ground p-6 text-center sm:p-10">
              <p className="text-sm text-muted-light mb-6">
                Choose a time in Calendly. The 45-minute conversation is complimentary.
              </p>
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Choose a time in Calendly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
