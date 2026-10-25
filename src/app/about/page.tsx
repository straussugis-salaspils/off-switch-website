import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Ugis Strauss",
  description:
    "Ugis Strauss is the founder of The Off-Switch Method. Nearly three decades of applied work in individual and organizational contexts under pressure.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Ugis Strauss
            </h1>
            <p className="font-serif text-lg font-light text-deep-muted mb-8">
              Founder of The Off-Switch Method
            </p>
            <p className="text-base text-deep-text leading-relaxed max-w-2xl mb-4">
              I came to this method because I kept seeing the same gap: people could
              understand their reactions very well, and still be carried by the same
              reaction in the moment.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Knowing what you ought to do and being able to do it under pressure are
              different things. I had seen that in management simulations, in teams,
              and in private work with people who knew themselves well — but still
              found themselves back in the same reaction.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              The Off-Switch Method grew out of that problem: how to change the reaction,
              not just become better at explaining it.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THE METHOD IS STRUCTURED AS IT IS */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:items-start">
            <div className="min-w-0">
              <div className="relative w-[220px] lg:w-[260px] aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/ugis/ugis-strauss-portrait-2026-v1.webp"
                  alt="Ugis Strauss"
                  fill
                  sizes="(min-width: 1024px) 520px, 440px"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="mt-4 w-[220px] lg:w-[260px]">
                <p className="text-[14px] text-ink leading-snug">Ugis Strauss</p>
                <p className="text-[12px] text-muted leading-snug mt-1">
                  Founder of The Off-Switch Method
                </p>
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-3xl leading-tight font-light text-ink mb-8 lg:text-[46px] lg:leading-[1.05]">
                Why the method is structured as it is
              </h2>
              <div className="border-t border-border">
                {[
                  {
                    title: "Sequence",
                    body: "We reduce emotional load before approaching deeper material. Being willing to work on something is not the same as being ready for it.",
                  },
                  {
                    title: "Measurement",
                    body: "We look at what happens when you meet the memory, trigger or situation again. Feeling better in the meeting is not the only test.",
                  },
                  {
                    title: "Endpoint",
                    body: "The aim is for the original reaction to stop driving you in the same way, without needing ongoing help to keep it that way. The private programme includes 12 sessions. If more work is needed afterwards, you continue independently or under a separate arrangement.",
                  },
                ].map((block) => (
                  <div key={block.title} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-5">
                    <h3 className="font-serif text-xl font-light text-ink leading-snug">
                      {block.title}
                    </h3>
                    <p className="text-base text-ink-light leading-relaxed">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE BIOGRAPHICAL THREAD */}
      <section className="pt-[96px] pb-[96px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-[760px]">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-8">
              How training, coaching and work under pressure led to the Off-Switch Method
            </h2>
            <div className="space-y-5">
              <p className="text-base text-ink-light leading-[1.65]">
                Before The Off-Switch Method, a substantial part of my professional life
                was built around corporate training, business games, and simulations.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                I put leaders and teams into situations where they had to decide,
                negotiate and act with incomplete information. There were competing
                interests, responsibility, and a clock that did not stop while they
                worked out the ideal answer.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                In a well-designed business game, you can see what a person actually
                does under pressure: takes responsibility, avoids a decision, rescues
                someone else, enters a conflict, or retreats from one.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                That experience still informs my work. An explanation can sound
                convincing in a quiet room. What matters is whether something changes
                when the person meets the situation again.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                My private work began in coaching more than 15 years ago. Alongside it,
                I built training organizations, developed simulations and trained other
                trainers. The Method brought those strands together: a process someone
                can learn, use, and eventually continue without me.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                I wanted a way to work on the moment when the reaction takes over —
                not another explanation to remember after it has happened. Insight is
                real and useful; on its own, it does not always change the pattern
                that fires under pressure.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                The method became a structured process with defined phases and clear
                completion criteria: reduce accumulated emotional load first, then
                address deeper material without destabilizing the person. We track
                what changes and work towards an endpoint, rather than ongoing support.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                It is not an open-ended support model. Not a substitute for medical,
                psychiatric, emergency, or crisis care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — THE FACTS ONCE, WITH OPTIONAL PROFESSIONAL REFERENCES */}
      <section className="pt-[96px] pb-[96px] bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-6">
              Experience in brief
            </h2>
            <p className="text-base text-ink-light leading-[1.65] mb-10">
              Nearly three decades of work with people, teams and organizations under
              pressure, with training and simulation programs delivered across 15+ countries.
            </p>
            <div className="border border-border bg-white p-6 lg:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                {[
                  { value: "28+ years", label: "Working with behavior under pressure" },
                  { value: "15+ years", label: "Private 1:1 work" },
                  { value: "Hundreds", label: "Private 1:1 clients" },
                  { value: "120+", label: "Trainers certified" },
                  { value: "20+", label: "Proprietary simulations built" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="font-serif text-2xl lg:text-3xl font-light text-ink tracking-display tabular-nums mb-2">
                      {m.value}
                    </p>
                    <p className="text-xs text-muted leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-base text-ink-light leading-relaxed">
              That sustained practice across individual and group settings shaped
              what became the Off-Switch Method.
            </p>
            <div className="mt-6 border-t border-border">
              <div className="grid gap-3 border-b border-border py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8">
                <h3 className="font-serif text-xl text-ink leading-snug">Management training</h3>
                <div className="space-y-4 text-base text-ink-light leading-relaxed">
                  <p>
                    For more than 20 years, I have built and led simulation-based
                    management programs, training organizations, trainer networks and
                    repeatable delivery systems across 15+ countries. My active portfolio
                    includes more than 20 proprietary simulations that make decisions,
                    conflict, avoidance and responsibility visible through what people do.
                  </p>
                  <p>
                    I designed a one-year internal trainer certification program, from
                    curriculum to delivery. More than 120 management trainers have been
                    certified for institutional and corporate clients, so a structured
                    method can be taught and delivered by more than one person.
                  </p>
                  <p>
                    Programs have covered leadership under pressure, negotiation,
                    governance, transformation, delegation, crisis decisions, trust
                    and cross-cultural collaboration.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 border-b border-border py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8">
                <h3 className="font-serif text-xl text-ink leading-snug">Teaching entrepreneurship</h3>
                <p className="text-base text-ink-light leading-relaxed">
                  I have lectured and designed programs at BA School of Business and
                  Finance since 2008, including entrepreneurship and business simulations
                  for EU students through Riga Business Week / Erasmus.
                </p>
              </div>
              <div className="grid gap-3 border-b border-border py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8">
                <h3 className="font-serif text-xl text-ink leading-snug">Private 1:1 work</h3>
                <p className="text-base text-ink-light leading-relaxed">
                  From coaching, my work developed into structured private 1:1 work with
                  hundreds of clients dealing with anxiety, pressure, emotional triggers,
                  burnout and recurring reaction patterns.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-base text-ink-light leading-relaxed">
              Earlier simulation, training, and organizational design work — not
              Off-Switch Method delivery — across corporate, institutional, and
              educational contexts.
            </p>
            <details className="group mt-3 border-b border-border">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-xl leading-snug text-ink marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                Earlier training and simulation work: organisations and institutions
                <span aria-hidden="true" className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 border border-border bg-white px-6 lg:px-8">
              {[
                {
                  group: "Consumer & retail",
                  names: "IKEA, Coca-Cola, Procter & Gamble, Rimi, Stockmann, JYSK",
                },
                {
                  group: "Pharmaceutical & life sciences",
                  names:
                    "Abbott Laboratories, AstraZeneca, GlaxoSmithKline, Boehringer Ingelheim",
                },
                {
                  group: "Banking & finance",
                  names: "SEB Bank, Swedbank, Nordea Bank, Home Credit Bank",
                },
                {
                  group: "Technology, telecom, industry",
                  names:
                    "Hewlett Packard, Siemens, Tele2, TeliaSonera, ABB, Harsco",
                },
                {
                  group: "Institutional & public sector",
                  names: "British Council, EU PHARE, Latvian Ministry of Education",
                },
                {
                  group: "Education & academic",
                  names:
                    "Stockholm School of Economics, BA School of Business and Finance, Bizness24h, Riga Business Week / Erasmus entrepreneurship simulations",
                },
              ].map((g, i, arr) => (
                <div
                  key={g.group}
                  className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-5 ${
                    i < arr.length - 1 ? "border-b border-border-light" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-widest text-muted leading-snug">
                    {g.group}
                  </p>
                  <p className="font-serif text-base text-ink-light leading-[1.6]">
                    {g.names}
                  </p>
                </div>
              ))}
              </div>
              <p className="mb-6 mt-5 max-w-3xl text-sm text-muted leading-relaxed">
                These references describe my earlier simulation, training, and
                organizational design work. They do not represent Off-Switch Method
                clients, endorsements, evaluations, or outcomes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* UKRAINE 2022 */}
      <section className="pt-[96px] pb-[96px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-[720px]">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-6">
              Ukraine 2022
            </h2>
            <p className="text-base text-ink leading-[1.65] mb-5">
              The Ukraine application did not create the method. It stress-tested it at scale.
            </p>
            <p className="text-base text-ink-light leading-[1.65] mb-5">
              In 2022, following Russia&rsquo;s full invasion of Ukraine, the method was
              applied as a free online program for Ukrainians experiencing active war
              trauma. It ran for six months, across six cohort groups, with approximately
              7,000 participants — around 80% of them inside Ukraine during active
              hostilities.
            </p>
            <p className="text-base text-ink-light leading-[1.65] mb-5">
              Twenty Ukrainian therapists, psychologists, and medical doctors participated
              in the program, requested training in the method, and joined the delivery
              team.
            </p>
            <p className="text-base text-ink-light leading-[1.65] mb-8">
              Measured completed cohorts showed substantial symptom reduction, with the
              full evidence and limitations documented separately.
            </p>
            <Button href="/evidence/ukraine-2022" variant="ghost" size="sm">
              Read the documented Ukraine field application →
            </Button>
          </div>
        </div>
      </section>

      {/* WHERE THE WORK IS USED NOW */}
      <section className="pt-[96px] pb-[96px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-[720px]">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-4">
              Where this work now applies
            </h2>
            <p className="text-base text-ink-light leading-[1.65] mb-10">
              Today, the method is applied in focused private 1:1 work, institutional contexts,
              and professional referral or collaboration settings.
            </p>
            <div className="border-t border-border">
              {[
                {
                  title: "Private 1:1 work",
                  body: "For individuals dealing with recurring anxiety, trauma-driven reactions, panic, emotional triggers, burnout, overload, and persistent reaction patterns.",
                },
                {
                  title: "Institutional application",
                  body: "For organizations supporting teams under pressure, crisis exposure, burnout risk, or accumulated emotional load.",
                },
                {
                  title: "Professional referral and collaboration",
                  body: "For practitioners, clinicians, and institutional partners with a serious interest in referral, training, or structured application.",
                },
              ].map((path, i) => (
                <div key={i} className="py-9 border-b border-border">
                  <p className="font-serif text-[22px] text-ink mb-3">{path.title}</p>
                  <p className="text-base text-ink-light leading-[1.65]">{path.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-[96px] pb-[96px] lg:pt-[120px] lg:pb-[120px] bg-deep">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[38px] leading-[1.1] font-light text-deep-text mb-6">
              Start with a conversation
            </h2>
            <p className="text-base text-deep-muted leading-[1.65] mb-10">
              Private 1:1 work begins with a 45-minute conversation: a clear look at your
              situation, what has already been tried, whether the method fits, and what
              the next step would involve.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="https://calendly.com/ugisstrauss/private-1to1-fit-conversation" variant="primary" size="lg">
                Book a first conversation
              </Button>
              <Button href="/for-organizations" variant="ghost-light" size="lg">
                Organizational inquiry →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

