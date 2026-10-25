import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import EvidenceCallout from "@/components/blocks/EvidenceCallout";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Ugis Strauss — The Off-Switch Method",
  description:
    "For anxiety, overload, and reactions that do not switch off. A structured approach when understanding alone is not enough.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section data-editorial-section className="grain py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10">
          <div className="max-w-5xl">
            <p className="font-serif text-xl font-normal tracking-display text-accent-dim sm:text-2xl">
              The Off-Switch Method
            </p>
            <h1 className="type-page-title mt-6 max-w-5xl text-deep-text">
              When a reaction does not switch off by itself
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-normal leading-relaxed text-deep-text sm:text-xl">
              Anxiety you can explain. A yes when you meant no. Work you cannot
              put down, even when you are exhausted.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-text/75">
              Learn a physical technique you can use yourself, with Ugis guiding the work.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="/formats" variant="primary" size="lg">
                Work with Ugis
              </Button>
              <Link href="/the-method" className="inline-flex min-h-11 items-center gap-3 text-base text-deep-text underline decoration-deep-text/40 underline-offset-4 hover:decoration-deep-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-dim">
                How the method works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE WORK INVOLVES */}
      <section data-editorial-section className="border-y border-border bg-surface py-9 sm:py-11 lg:py-12">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid max-w-4xl grid-cols-[6rem_minmax(0,1fr)] gap-x-6 gap-y-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-8">
            <div className="relative aspect-[3/4] overflow-hidden sm:row-span-2">
              <Image
                src="/images/ugis/ugis-strauss-portrait-2026-v1.webp"
                alt="Ugis Strauss"
                fill
                sizes="(min-width: 640px) 288px, 192px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="contents sm:block sm:self-end">
              <p className="self-center text-xs uppercase tracking-widest text-accent">The person you work with</p>
              <h2 className="col-span-2 font-serif text-3xl tracking-display text-ink sm:mt-3">Ugis Strauss, founder of the Off-Switch Method</h2>
            </div>
            <div className="col-span-2 sm:col-span-1 sm:col-start-2">
              <p className="max-w-2xl text-base leading-relaxed text-ink-light sm:text-lg">
                I&rsquo;ve worked privately with people for more than 15 years.
                I teach you a physical technique, guide what you work on and
                help you check what changes in the conversations, decisions
                and ordinary days that brought you here.
              </p>
              <Link href="/about" className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dim">
                Meet Ugis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION — one sequence, not two overlapping lists */}
      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="eyebrow-section">In ordinary life</p>
          <h2 className="max-w-3xl font-serif text-3xl lg:text-4xl font-normal text-ink mb-8 tracking-display">
            Everyday situations affected by anxiety and automatic reactions
          </h2>
          <div className="max-w-5xl border-t border-border">
            {[
              { label: "The conversation", now: "You know you want to say no. Then you hear yourself agreeing.", change: "Say what you mean while the other person is still there." },
              { label: "The end of the day", now: "The laptop is shut. The working day carries on in your head.", change: "Rest without feeling you should be doing something." },
              { label: "The journey", now: "You want to go. Just picturing the journey starts the fear.", change: "Make the journey you wanted to make." },
            ].map((scene) => (
              <div key={scene.label} className="grid gap-5 border-b border-border py-8 sm:py-9 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">{scene.label}</p>
                  <h3 className="mt-3 max-w-xl font-serif text-2xl leading-snug tracking-display text-ink sm:text-3xl">{scene.now}</h3>
                </div>
                <div className="border-l-2 border-accent pl-5 md:self-center md:pl-7">
                  <p className="text-xs uppercase tracking-widest text-accent">What you want</p>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-light sm:text-lg">{scene.change}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base text-ink-light leading-relaxed mt-8 max-w-2xl">
            We work with a specific memory, sensation or anxious thought and check
            how the response changes. Then comes the test that matters: what
            happens when you speak to that person, stop work or return to the
            place you have been avoiding?
          </p>
          <Link href="/who-this-is-for" className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dim">
            Find the situation that fits yours →
          </Link>
        </div>
      </section>

      {/* INDIVIDUAL CASES */}
      <section data-editorial-section className="border-y border-border bg-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-accent">Individual case records</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-display text-ink lg:text-4xl">
            What changed outside the meetings
          </h2>
          <div className="mt-10 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-serif text-2xl leading-snug text-ink">Driving again after panic had restricted his journeys</h3>
              <p className="mt-6 text-xs uppercase tracking-widest text-accent">Completed journeys over 90 days</p>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-4xl tracking-display text-ink sm:text-5xl">
                <span>15</span><span aria-hidden="true" className="text-xl text-accent">→</span><span>100</span><span aria-hidden="true" className="text-xl text-accent">→</span><span>200</span><span className="text-base tracking-normal text-muted">miles</span>
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-light">
                One client went from a driving limit of roughly five miles beyond
                the city to completed 15-, 100- and 200-mile journeys over 90 days.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">Individual case · Client-maintained symptom tracker</p>
              <Link href="/evidence/driving-panic" className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dim">
                Read the driving case →
              </Link>
            </div>
            <div className="border-t border-border pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h3 className="font-serif text-2xl leading-snug text-ink">How a senior leader reduced her working hours without reducing output</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-light">
                A senior leader made room for recovery without reducing her net
                output. Sleep and capacity for work returned while the pressures
                outside work continued.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">Individual case · Practitioner record, no formal tracker</p>
              <Link href="/evidence/institutional-leader" className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dim">
                Read her case →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A CLEAR CHOICE — individual offers first, organisational route retained */}
      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="eyebrow-section">Work with Ugis</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-4 tracking-display">
            Choose private sessions, a group programme or organisational work
          </h2>
          <p className="text-base text-ink-light leading-relaxed mb-10 max-w-2xl">
            Private meetings built around you, or a shared programme you
            apply to your own life. In both, I lead the meetings and you practise
            between them.
          </p>
          <div className="grid max-w-5xl border-y border-border md:grid-cols-2">
            <div className="flex flex-col bg-surface px-6 py-8 sm:p-9 md:border-r md:border-border">
              <p className="text-xs uppercase tracking-widest text-accent">
                Private 1:1
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-display text-ink sm:text-3xl">
                Private 1:1 work with Ugis
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-light">
                We work directly on your situation. What happens between sessions
                helps me choose what we do next, how deeply and in what order.
              </p>
              <p className="mt-7 text-sm leading-relaxed text-muted">
                12 private sessions · 3–4 months · €6,000
              </p>
              <div className="mt-5"><Button href="/one-to-one" variant="primary" size="md">Explore private 1:1 →</Button></div>
            </div>
            <div className="flex flex-col border-t border-border px-6 py-8 sm:p-9 md:border-t-0">
              <p className="text-xs uppercase tracking-widest text-accent">
                Group with Ugis
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-display text-ink sm:text-3xl">
                The Off-Switch group programme
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-light">
                I take a small group through a shared sequence. You apply the
                method to your own memories, worries and reactions.
              </p>
              <p className="mt-7 text-sm leading-relaxed text-muted">
                12 weekly meetings · 12 weeks · €2,000
              </p>
              <div className="mt-5"><Button href="/group" variant="outline" size="md">Explore the group →</Button></div>
              <p className="mt-4 text-sm leading-relaxed text-muted">Next group planned for January 2027.</p>
            </div>
          </div>
          <div className="mt-8 max-w-5xl md:flex md:items-start md:justify-between md:gap-12">
            <div className="max-w-2xl">
              <h3 className="text-base font-medium text-ink">For your organisation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">For teams facing sustained pressure, crisis exposure or burnout risk. People may still be delivering while sleep, recovery and decision-making are becoming harder.</p>
            </div>
            <Link href="/for-organizations" className="mt-3 inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-accent underline underline-offset-4 md:mt-0">
              See organisational formats →
            </Link>
          </div>
        </div>
      </section>

      {/* METHOD OVERVIEW */}
      <section data-editorial-section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ink mb-3 tracking-display">
            How the method works
          </h2>
          <p className="text-sm text-muted uppercase tracking-widest mb-6">
            What you do, and how I guide it
          </p>
          <p className="text-base text-ink-light leading-relaxed max-w-2xl mb-8">
            You learn the main technique in the first session and practise it
            daily between meetings. I guide you through three phases, checking
            that each is substantially complete before we move to the next.
          </p>

          <div className="grid max-w-5xl border-t-2 border-accent md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Regulate",
                body: "Start with the stress, overload and body tension you are carrying now. Learn the technique you can use yourself, so the work is not confined to the time we spend in a meeting.",
                label: "Learn the tool",
              },
              {
                num: "02",
                title: "Repattern",
                body: "Work through your emotional history across all areas of life, not only the problem that first brought you here. This includes two months of structured daily practice and work on how you see your future.",
                label: "Daily practice",
              },
              {
                num: "03",
                title: "Integrate",
                body: "Put the change into your conversations, decisions and daily life. Address the habits and practical arrangements that still need to change. The aim is to finish the work without needing me to keep it going.",
                label: "Use it in life",
              },
            ].map((phase, i) => (
              <div
                key={phase.num}
                className={`py-8 md:px-7 md:py-9 ${i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""} ${i === 0 ? "md:pl-0" : ""} ${i === 2 ? "md:pr-0" : ""}`}
              >
                {/* Number (mobile: inline with label) */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-lg text-accent tabular-nums">
                    {phase.num}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {phase.label}
                  </span>
                </div>
                {/* Title + body */}
                <div>
                  <h3 className="mb-4 mt-5 font-serif text-3xl font-normal text-ink tracking-display">
                    {phase.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-light">{phase.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/the-method" variant="ghost" size="md">
              What the full process involves →
            </Button>
          </div>
        </div>
      </section>

      {/* EVIDENCE PREVIEW */}
      <section data-editorial-section className="bg-deep py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-accent-dim mb-3">
            Field evidence
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-deep-text mb-4 tracking-display">
            Ukraine, 2022: help while the war continued
          </h2>
          <div className="max-w-3xl mb-10">
            <p className="text-base text-deep-muted leading-relaxed">
              In March 2022, the Off-Switch Method was delivered as a free
              crisis-response programme for Ukrainians experiencing active war
              trauma. More than 7,000 people enrolled; 80% were inside Ukraine
              during active hostilities. The method was developed over 30 years
              of clinical and institutional practice. The war was still going on.
            </p>
          </div>

          <EvidenceCallout
            dark
            stats={[
              { value: "7,000+", label: "participants enrolled" },
              { value: "80%", label: "inside Ukraine during active hostilities" },
              { value: "42–60%", label: "average PTSD symptom reduction in measured cohorts" },
              { value: "sustained", label: "at one-month follow-up where measured" },
            ]}
            note="Results reflect completing participants in the measured cohorts. Pre/post field evidence across multiple cohorts, not a randomized controlled trial."
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

      {/* FINAL CTA */}
      <section data-editorial-section className="bg-deep py-14 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-base text-deep-muted leading-relaxed mb-6">
              You do not need a polished explanation.
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-deep-text mb-6 tracking-display">
              Start with a conversation
            </h2>
            <p className="text-base text-deep-muted leading-relaxed mb-12">
              45 minutes. You describe your situation and what you&rsquo;ve already tried.
              I explain what the work would involve, and we consider whether it
              makes sense for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Book a first conversation
              </Button>
              <Button href="https://tally.so/r/441ZOd" variant="ghost-light" size="lg">
                Organisational inquiry →
              </Button>
            </div>
            <p className="mt-8 text-sm text-deep-muted">
              Want to read more first?{" "}
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
