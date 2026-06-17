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
              A background in behavior under pressure, private client work, structured
              method development, and field application under real emotional load.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Ugis Strauss developed The Off-Switch Method from nearly three decades of
              applied work with individuals, teams, and organizations under pressure.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              I came to this method because I kept seeing the same gap: people could
              understand their reactions very well, and still be carried by the same
              reaction in the moment.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Private 1:1 work spans 15+ years and hundreds of clients, beginning in
              coaching and developing into the structured Off-Switch Method work.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              The method addresses patterns that keep firing even after people understand
              them: stress, overload, trauma load, emotional triggers, and reactions that
              do not yield to insight.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS TRAINING BACKGROUND */}
      <section className="pt-[96px] pb-[96px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-[760px]">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-8">
              Training, business games, and behavior under pressure
            </h2>
            <div className="space-y-5">
              <p className="text-base text-ink-light leading-[1.65]">
                Before The Off-Switch Method, a substantial part of my professional life
                was built around corporate training, business games, and simulations.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                Through Nordic / NTI, I spent many years creating and delivering programs
                where leaders and teams did not simply listen to theory. They entered a
                live management environment: making decisions, negotiating, meeting
                uncertainty, competition, responsibility, conflicting interests, and time
                pressure.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                For me, this was always more than skills training. In a well-designed
                business game, it quickly becomes visible how a person behaves not in a
                calm conversation, but in the moment when there is risk, responsibility,
                limited information, and a need to act.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                That is where I kept seeing the same important gap: a person may
                understand the right answer, know the model, and agree with the logic —
                but under pressure still return to the old reaction.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                This experience became one of the professional foundations of my
                approach. The Off-Switch Method grew not only from individual work with
                anxiety, stress, and emotional triggers, but also from years of observing
                how people, teams, and leaders act inside complex systems.
              </p>
              <p className="text-base text-ink-light leading-[1.65]">
                More about my work in corporate training, business games, and simulations
                can be found on the{" "}
                <a
                  href="https://nti.su/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-ink transition-colors underline underline-offset-4"
                >
                  Nordic / NTI
                </a>{" "}
                website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY SNAPSHOT */}
      <section className="pt-[96px] pb-[96px] bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-6">
              Professional credibility at a glance
            </h2>
            <p className="text-base text-ink-light leading-[1.65] mb-10">
              Before The Off-Switch Method, this work lived in executive training,
              business simulations, leadership programs, crisis decision games,
              institutional education, training organizations, and private client work.
              Programs were delivered across 15+ countries.
            </p>
            <div className="border border-border bg-white p-6 lg:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                {[
                  { value: "28+ years", label: "Applied behavior-under-pressure work" },
                  { value: "15+ years", label: "Private 1:1 work" },
                  { value: "Hundreds", label: "Private clients" },
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
          </div>
        </div>
      </section>

      {/* BACKGROUND / TIMELINE */}
      <section className="pt-[96px] pb-[110px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,720px)] gap-12 lg:gap-[88px] lg:items-start">

            {/* Left: founder credential */}
            <div className="min-w-0">
              <div className="relative w-[220px] lg:w-[260px] aspect-[3/4] overflow-hidden">
                <Image
                  src="/ugis-strauss.jpg"
                  alt="Ugis Strauss"
                  fill
                  sizes="(max-width: 1024px) 220px, 260px"
                  className="object-cover object-[center_20%] saturate-[.65] brightness-[.85]"
                />
              </div>
              <div className="mt-4 w-[220px] lg:w-[260px]">
                <p className="text-[14px] text-ink leading-snug">Ugis Strauss</p>
                <p className="text-[12px] text-muted leading-snug mt-1">
                  Founder of The Off-Switch Method
                </p>
              </div>
            </div>

            {/* Right: H2 + intro + timeline */}
            <div className="min-w-0">
              <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-6">
                A background in behavior under pressure
              </h2>
              <p className="text-[17px] text-ink-light leading-[1.65] max-w-[680px] mb-6">
                The Off-Switch Method did not emerge from theory alone. It developed through
                decades of applied work with people and groups under stress, consequence,
                uncertainty, and emotional load.
              </p>
              <p className="text-[17px] text-ink-light leading-[1.65] max-w-[680px] mb-6">
                For years, Ugis designed simulations where people could not hide behind
                explanations — their real patterns appeared under pressure: decision
                ownership, avoidance, rescue behavior, conflict, governance failure,
                negotiation habits. The same principle informs the method: do not argue
                with the explanation; observe the reaction pattern, intervene, and test
                whether the system changes.
              </p>
              <p className="text-[17px] text-ink-light leading-[1.65] max-w-[680px] mb-[72px]">
                Beyond delivering programs, the work has involved building and managing
                training organizations, developing trainer networks, certifying trainers,
                and designing repeatable delivery systems across countries. This matters
                because the Off-Switch Method is not only a personal technique. It is a
                structured delivery system: observable target, repeatable process,
                measurable change, and defined endpoint.
              </p>

              <div className="max-w-[760px]">
                {[
                  {
                    period: "28+ years",
                    label:
                      "Applied work with individuals and organizations under pressure",
                    body: "Sustained practice across individual and group settings — developing and refining what became the Off-Switch Method.",
                  },
                  {
                    period: "20+ years",
                    label: "Management simulations and training organization building",
                    body: "Built and led simulation-based management programs across 15+ countries. Designed and managed training organizations, trainer certification networks, and repeatable delivery systems — including the NTI Internal Trainer University, with 120+ management trainers certified.",
                  },
                  {
                    period: "15+ years",
                    label: "Private 1:1 work with hundreds of clients",
                    body: "Started in coaching and developed into structured private work with anxiety, pressure, emotional triggers, burnout, and recurring reaction patterns.",
                  },
                  {
                    period: "Development",
                    label: "The Off-Switch Method",
                    body: "The method became a structured process with defined phases, clear completion criteria, and a practical endpoint: the work is designed to reduce dependence on ongoing sessions, not create it.",
                  },
                  {
                    period: "2022",
                    label: "Ukraine field application",
                    body: "Free online program for Ukrainians experiencing active war trauma. Six cohorts, six months, approximately 7,000 participants, around 80% of them inside Ukraine during active hostilities. Documented symptom reduction in completed cohorts.",
                  },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`flex gap-8 pb-16 relative ${
                      i < arr.length - 1 ? "border-l border-border ml-3" : "ml-3"
                    }`}
                  >
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent shrink-0" />
                    <div className="ml-8">
                      <p className="text-xs uppercase tracking-widest text-muted mb-2">
                        {item.period}
                      </p>
                      <p className="font-serif text-[22px] text-ink mb-3">{item.label}</p>
                      <p className="text-base text-ink-light leading-[1.6]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROFESSIONAL GROUND */}
      <section className="pt-[96px] pb-[96px] bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-12 max-w-[720px]">
            Professional ground
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Simulation architect",
                body: "28+ years designing environments where decisions, conflict, avoidance, ownership, and pressure responses become visible. Programs delivered across 15+ countries, with 20+ proprietary simulations in active portfolio.",
              },
              {
                title: "Training organization builder",
                body: "Built and managed training organizations and trainer networks across countries. Designed repeatable delivery systems where structured methods could be taught, certified, and reproduced beyond a single practitioner.",
              },
              {
                title: "Train-the-trainer systems",
                body: "Designed the NTI Internal Trainer University concept, curriculum, and one-year trainer certification program. Over 120 management trainers certified for institutional and corporate clients.",
              },
              {
                title: "Institutional educator",
                body: "Lecturer and program architect at BA School of Business and Finance since 2008. Built and delivered entrepreneurship and business simulation programs for EU students, including Riga Business Week / Erasmus entrepreneurship simulations.",
              },
              {
                title: "Organizational behavior under pressure",
                body: "Programs designed for leadership under pressure, negotiation, governance, transformation, delegation, crisis decision-making, trust, and cross-cultural collaboration.",
              },
              {
                title: "Field application",
                body: "The Ukraine 2022 program applied the method at scale — approximately 7,000 participants, around 80% inside Ukraine during active hostilities, with structured measurement and practitioner uptake.",
              },
            ].map((block) => (
              <div key={block.title} className="border border-border bg-white p-6 lg:p-8">
                <h3 className="font-serif text-xl font-light text-ink leading-snug mb-4">
                  {block.title}
                </h3>
                <p className="text-base text-ink-light leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED EARLIER PROFESSIONAL CONTEXTS */}
      <section className="pt-[96px] pb-[96px]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-6">
              Selected earlier professional contexts
            </h2>
            <p className="text-base text-ink-light leading-[1.65] mb-10">
              Earlier simulation, training, and organizational design work — not
              Off-Switch Method delivery — across corporate, institutional, and
              educational contexts.
            </p>
            <div className="border border-border bg-white p-6 lg:p-8">
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
            <p className="text-xs text-muted leading-relaxed mt-6 max-w-[680px]">
              These references describe Ugis&rsquo;s earlier simulation, training, and
              organizational design work. They do not represent Off-Switch Method
              clients, endorsements, evaluations, or outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE METHOD DEVELOPED */}
      <section className="pt-[96px] pb-[96px] bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-[720px]">
            <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-10">
              How the method developed
            </h2>
            <p className="text-base text-ink-light leading-[1.65] mb-5">
              The method developed from a repeated observation: people could understand
              the reason for their reaction and still keep reacting.
            </p>
            <p className="text-base text-ink-light leading-[1.65] mb-5">
              The work therefore became focused on the activation itself, not the
              explanation. Insight is real and useful — on its own, it does not always
              change the pattern that fires under pressure.
            </p>
            <p className="text-base text-ink-light leading-[1.65] mb-5">
              From that observation, the method became a structured sequence: reduce
              accumulated emotional load first, address deeper material without
              destabilizing the client, and end when the reaction no longer drives the
              same response. Sequence, observable measurement, and defined endpoint are
              shaped by the prior simulation, training, organizational work, and private
              client work.
            </p>
            <p className="text-base text-ink-light leading-[1.65]">
              It is not an open-ended support model. Not a substitute for medical,
              psychiatric, emergency, or crisis care.
            </p>
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
            <Button href="/ukraine-project" variant="ghost" size="sm">
              Read the documented Ukraine field application →
            </Button>
          </div>
        </div>
      </section>

      {/* WHY THE METHOD IS STRUCTURED AS IT IS */}
      <section className="pt-[96px] pb-[96px] bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-[46px] leading-[1.05] font-light text-ink mb-12 max-w-[600px]">
            Why the method is structured as it is
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              {
                title: "Sequence",
                body: "Emotional load is reduced before deeper material is addressed. The order is part of the mechanism.",
              },
              {
                title: "Measurement",
                body: "Progress is tracked through observable response change, not general impression.",
              },
              {
                title: "Endpoint",
                body: "The work ends when the original reaction no longer drives the person in the same way.",
              },
            ].map((block) => (
              <div key={block.title} className="border border-border bg-white p-6 lg:p-8">
                <h3 className="font-serif text-xl font-light text-ink leading-snug mb-4">
                  {block.title}
                </h3>
                <p className="text-base text-ink-light leading-relaxed">{block.body}</p>
              </div>
            ))}
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
              Today, the method is applied in focused private work, institutional contexts,
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
              Private work begins with a 45-minute conversation: a clear look at your
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
