import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { TestimonialCard, TestimonialGrid } from "@/components/blocks/TestimonialCard";
import CTABand from "@/components/blocks/CTABand";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Field application data, anonymized case outcomes, participant reports, and practitioner uptake. Presented as field evidence, not as a peer-reviewed clinical trial.",
};

const evidenceCategories = [
  {
    title: "Field application data",
    description:
      "Structured pre/post measurement across multiple cohorts in real-world conditions. The Ukraine 2022 program is the primary example.",
  },
  {
    title: "Client-maintained tracker cases",
    description:
      "Two clients recorded their own symptoms during the work. Each case includes the scores and how they were collected.",
  },
  {
    title: "Retrospective practitioner estimates",
    description:
      "Two cases had no formal tracker. Their ratings were estimated afterwards by the practitioner; they are not validated measurements.",
  },
  {
    title: "Participant reports",
    description:
      "First-person accounts from people who completed the work. Supporting evidence — not the primary proof.",
  },
  {
    title: "Practitioner uptake",
    description:
      "Twenty Ukrainian clinicians experienced the method during active hostilities, then trained and joined the delivery team. This records a professional decision, not a symptom score.",
  },
];

const outcomeSummary = [
  {
    case: "Ukraine field application",
    before: "PTSD scores pre-program",
    after: "42–60% reduction",
    changed: "PTSD symptom scores fell among completing participants in the three publicly shown measured cohorts. Reductions held at one-month follow-up where measured.",
    type: "Field data from self-selected completers; no control group",
    href: "/evidence/ukraine-2022",
    hrefLabel: "Ukraine Project →",
  },
  {
    case: "Senior organizational leader under multiple crises",
    before: "~60/100 distress",
    after: "~10/100",
    changed: "A shorter working day with the same net output. Sleep restored, work capacity returned and the divorce situation accepted, while external pressures continued.",
    type: "Estimated afterwards by the practitioner; no formal tracker",
    href: "/evidence/institutional-leader",
    hrefLabel: "Full case →",
  },
  {
    case: "Catastrophic anxiety after stroke",
    before: "~70/100 threat activation",
    after: "~10–15/100",
    changed: "After the engagement, a layoff and heart surgery did not bring back the earlier collapse response. New work was found. The work addressed anxiety, not the medical conditions.",
    type: "Practitioner-estimated rating + one self-rated recovery marker; no formal tracker",
    href: "/evidence/anxiety-after-stroke",
    hrefLabel: "Full case →",
  },
  {
    case: "Driving panic and public pressure overload",
    before: "Tracker score 79/125",
    after: "4/125 at 90 days",
    changed:
      "Driving expanded from roughly five miles beyond the city edge to completed journeys of 15, 100 and 200 miles. Panic stopped; broader public-pressure overload reduced in the first month.",
    type: "25-item client-maintained, self-reported tracker; individual case",
    href: "/evidence/driving-panic",
    hrefLabel: "Full case →",
  },
  {
    case: "Complex PTSD and burnout",
    before: "Tracker score 72/105",
    after: "7/105 at six-week follow-up",
    changed: "Work boundaries were established, previously avoided financial matters addressed and close relationships reopened. Improvement continued after the meetings ended.",
    type: "21-item client-maintained, self-reported tracker; individual case",
    href: "/evidence/complex-ptsd-burnout",
    hrefLabel: "Full case →",
  },
];

const caseCards = [
  {
    title: "Driving Panic and Public Pressure Overload",
    proof: "The work began with broader role overload, then addressed driving-specific fear and tested the change on the road.",
    metric: "79 → 4",
    metricNote: "25-item self-reported tracker, out of 125; baseline to 90 days",
    outcome:
      "Panic stopped. Driving range expanded from roughly five miles beyond the city edge to 15, 100, and eventually 200-mile drives.",
    type: "Client-maintained tracker",
    href: "/evidence/driving-panic",
    active: true,
  },
  {
    title: "Complex PTSD and Burnout",
    proof:
      "Daily practice and systematic work through personal history, including workplace experiences, family relationships and longstanding self-criticism.",
    metric: "72 → 7",
    metricNote: "21-item self-reported tracker, out of 105; baseline to six-week follow-up",
    outcome:
      "The score continued falling during six weeks of independent practice after the meetings ended. Work boundaries improved and previously avoided financial matters were addressed.",
    type: "Client-maintained tracker",
    href: "/evidence/complex-ptsd-burnout",
    active: true,
  },
  {
    title: "Senior organizational leader under multiple crises",
    proof: "Daily practice, work through accumulated emotional material and a shorter working day with time protected for recovery.",
    metric: "~60 → ~10",
    metricNote: "Retrospective practitioner estimate, 0–100",
    outcome:
      "Net output stayed stable despite the shorter day. Sleep and energy for work improved while the external crises continued; change held at an informal four-month review.",
    type: "Retrospective practitioner estimate",
    href: "/evidence/institutional-leader",
    active: true,
  },
  {
    title: "Catastrophic Anxiety and Future Collapse After Stroke",
    proof: "Work on fear of the future and an older response to criticism, with unusually intensive independent practice. The medical conditions were treated medically.",
    metric: "~70 → ~10–15",
    metricNote: "Retrospective practitioner estimate, 0–100",
    outcome:
      "During a three-month pause after the engagement, the client handled a layoff and heart surgery without the earlier collapse response and found new work.",
    type: "Retrospective practitioner estimate",
    href: "/evidence/anxiety-after-stroke",
    active: true,
  },
];

export default function Evidence() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-deep-text leading-[1.08] sm:leading-tight tracking-display mb-6">
              Evidence from the Off-Switch Method: outcomes and how they were recorded
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Being able to drive beyond a five-mile limit. Finishing a shorter working
              day with the same output and some room to recover. Dealing with a difficult
              event without the old collapse response. These are changes recorded in
              the individual cases below.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              The records also show what the work involved. Some clients kept symptom
              trackers; two cases use ratings estimated afterwards by the practitioner.
              They are not interchangeable kinds of evidence.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              Separately, the Ukraine 2022 field programme documents delivery at scale,
              measured changes among completing participants and clinicians who went on
              to join the delivery team. Participant accounts are included in their own
              words.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl">
              This is field evidence and anonymised practitioner case evidence, not a
              peer-reviewed clinical trial. Each record explains what was measured and
              what it cannot establish about another person&rsquo;s outcome.
            </p>
          </div>
        </div>
      </section>

      {/* EVIDENCE AT A GLANCE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">

          {/* Ukraine primary metric block */}
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
            Evidence at a glance
          </h2>
          <div className="border border-accent bg-deep max-w-4xl">
            <div className="p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-accent mb-4">
                Field application — Ukraine 2022
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                {[
                  { value: "7,000+", label: "participants enrolled" },
                  { value: "6", label: "cohort groups" },
                  { value: "42–60%", label: "PTSD symptom reduction" },
                  { value: "20", label: "clinicians trained" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl lg:text-3xl font-light text-accent-dim tracking-display mb-1">
                      {s.value}
                    </p>
                    <p className="text-sm text-deep-muted leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-deep-muted leading-relaxed">
                The reductions concern completing participants in the three publicly
                shown measured cohorts, not all enrolments. They held at one-month
                follow-up where measured. Field data — no control group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME SUMMARY */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-3">
            Reported changes in symptoms and everyday life
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl">
            Four individual cases and one field programme. Each link opens the full
            account, including how the change was recorded and its limitations.
          </p>

          {/* Case-record strips */}
          <div className="space-y-4">
            {outcomeSummary.map((row) => {
              const stripInner = (
                <>
                  <div className="grid md:grid-cols-[1fr_auto] gap-5 md:gap-10">
                    <div className="min-w-0">
                      <h3 className="font-serif text-xl lg:text-2xl font-light text-ink leading-snug mb-3 group-hover:text-accent group-focus-visible:text-accent transition-colors">
                        {row.case}
                      </h3>
                      <p className="text-base text-ink-light leading-relaxed">
                        {row.changed}
                      </p>
                    </div>
                    <div className="md:min-w-[200px] md:text-right">
                      <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1">
                        Before
                      </p>
                      <p className="font-serif text-lg font-light text-ink-light tabular-nums leading-snug mb-4">
                        {row.before}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-light mb-1">
                        After
                      </p>
                      <p className="font-serif text-lg font-light text-accent tabular-nums leading-snug">
                        {row.after}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-light flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-xs text-muted-light">{row.type}</p>
                    {row.href ? (
                      <span className="text-sm text-accent group-hover:text-accent-dim group-focus-visible:text-accent-dim transition-colors inline-flex items-center gap-1.5">
                        {row.hrefLabel}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-light">Full record coming soon</span>
                    )}
                  </div>
                </>
              );
              return row.href ? (
                <Link
                  key={row.case}
                  href={row.href}
                  className="card-hover group block border border-border bg-white p-6 lg:p-8"
                >
                  {stripInner}
                </Link>
              ) : (
                <div key={row.case} className="border border-border bg-white p-6 lg:p-8">
                  {stripInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVIDENCE CATEGORIES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-3">
              How the evidence was collected
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl">
              A symptom tracker, a practitioner&rsquo;s estimate and a participant&rsquo;s
              account tell us different things. Here is how to distinguish them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {evidenceCategories.map((cat) => (
                <div key={cat.title} className="border border-border p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{cat.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UKRAINE FIELD APPLICATION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-3">
            Field Application: Ukraine 2022
          </h2>
          <p className="text-base text-muted-light mb-8">
            A free online programme during active war, with symptom measurement among
            participants who completed it.
          </p>

          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-base text-ink-light leading-relaxed">
              In March 2022, two weeks after Russia&rsquo;s full invasion of Ukraine, a
              free online program was launched for Ukrainians experiencing war trauma. It
              ran for six months across six cohort groups — entirely online, in Russian,
              at no cost. Total enrollment: approximately 7,000 participants. Around 80%
              were inside Ukraine during active hostilities. Around 20% were refugees
              abroad.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              PTSD symptoms were measured using a structured 21-item scale (maximum score
              105) before, at the end of, and four weeks after the program. The measured
              population was participants who completed all six sessions — approximately
              30% of each cohort&rsquo;s enrollment, representing roughly 300–500
              individuals across the measured groups.
            </p>
          </div>

          {/* Cohort cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mb-6">
            {[
              { cohort: "Group 3", pre: "53.1", end: "21.5", reduction: "60%", followUp: "—" },
              { cohort: "Group 4", pre: "62.7", end: "36.4", reduction: "42%", followUp: "34.9 (44%)" },
              { cohort: "Group 5", pre: "69.2", end: "39.6", reduction: "43%", followUp: "37.2 (46.2%)" },
            ].map((row) => (
              <div key={row.cohort} className="border border-border bg-white p-6 lg:p-8">
                <p className="text-xs uppercase tracking-widest text-muted-light mb-1.5">Cohort</p>
                <h3 className="font-serif text-xl font-light text-ink mb-6">{row.cohort}</h3>

                <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">Reduction</p>
                <p className="font-serif text-4xl lg:text-5xl font-light text-accent tabular-nums leading-none">
                  {row.reduction}
                </p>

                <div className="mt-6 pt-5 border-t border-border-light space-y-2 text-sm text-muted leading-relaxed">
                  <p>
                    Pre-course <span className="text-ink-light tabular-nums">{row.pre}</span>{" "}
                    → End <span className="text-ink-light tabular-nums">{row.end}</span>
                  </p>
                  <p>
                    Follow-up: <span className="text-ink-light tabular-nums">{row.followUp}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-border p-5 max-w-3xl mb-6">
            <p className="text-sm text-muted leading-relaxed italic">
              This is field data, not a controlled trial. There was no control group.
              The study population was self-selected completers. The method did not treat
              the war, bombardment, displacement, or external events. It worked on the
              trauma and stress activation produced by those events. External conditions
              remained what they were.
            </p>
          </div>

          <div className="max-w-3xl mb-8">
            <p className="text-base text-ink-light leading-relaxed">
              As the program progressed, twenty Ukrainian therapists, psychologists, and
              medical doctors who were participating in the sessions requested training in
              the Off-Switch Method and joined the delivery team.
            </p>
          </div>

          <Button href="/evidence/ukraine-2022" variant="ghost" size="md">
            Full project documentation → Ukraine Project
          </Button>
        </div>
      </section>

      {/* INDIVIDUAL CASE OUTCOMES */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-4">
            What the work involved in each case
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl mb-10">
            The same method did not mean the same work for everyone. These anonymised
            records show the sequence, the practice and what happened afterwards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {caseCards.map((c) => {
              const cardInner = (
                <>
                  {c.active && (
                    <p className="text-xs uppercase tracking-widest text-accent mb-3">
                      Full record available
                    </p>
                  )}
                  <h3 className="font-serif text-xl font-light text-ink leading-snug mb-2 group-hover:text-accent group-focus-visible:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted italic leading-relaxed mb-5 flex-1">
                    {c.proof}
                  </p>
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="font-serif text-2xl font-light text-ink mb-0.5">
                      {c.metric}
                    </p>
                    <p className="text-xs text-muted-light leading-snug">{c.metricNote}</p>
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed mb-5">{c.outcome}</p>
                  <p className="text-xs text-muted-light mb-4">{c.type}</p>
                  {c.href ? (
                    <span className="text-sm text-accent group-hover:text-accent-dim group-focus-visible:text-accent-dim transition-colors inline-flex items-center gap-1.5">
                      Full case record
                      <span className="transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">→</span>
                    </span>
                  ) : (
                    <span className="text-sm text-muted-light">Full record coming soon</span>
                  )}
                </>
              );
              return c.href ? (
                <Link
                  key={c.title}
                  href={c.href}
                  className="card-hover group border border-border bg-white p-7 flex flex-col"
                >
                  {cardInner}
                </Link>
              ) : (
                <div
                  key={c.title}
                  className="border border-border bg-white p-7 flex flex-col"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTICIPANT REPORTS */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-4">
            What participants report
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl mb-10">
            From people who came here after other approaches had not produced lasting
            results, or who came in conditions where standard approaches could not reach
            them. Participant reports are supporting evidence, not the primary proof.
          </p>
          <TestimonialGrid
            columns={2}
            testimonials={[
              {
                quote: "Panic attacks I had suffered from for more than 40 years disappeared. Not a single doctor had been able to help me with this.",
                attribution: "Participant report, anonymized",
              },
              {
                quote: "Not only did I get rid of the phantom siren in my head — in just three weeks I also resolved issues I had been working on for years in psychotherapy.",
                attribution: "Participant report, Ukraine program",
              },
              {
                quote: "My sleep has normalized. I am in a stable calm state despite war and daily bomb threats. Once again I have the desire to live and create.",
                attribution: "Participant report, Ukraine program",
              },
              {
                quote: "For four years they could not find the right antidepressants for my anxiety-phobic disorder. Thanks to this method I began to feel better.",
                attribution: "Participant report, anonymized",
              },
              {
                quote: "I almost didn't try this. The method sounded too simple to do anything real. I expected placebo. What changed my mind wasn't the explanation — it was that situations which normally triggered a strong reaction just stopped hitting with the same intensity. I believed it because something shifted, not because it sounded impressive.",
                attribution: "Participant report, anonymized",
              },
            ]}
          />
        </div>
      </section>

      {/* PRACTITIONER UPTAKE */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Practitioner uptake
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Some participants were themselves treating people affected by the war.
              After experiencing the programme, they wanted to learn to deliver it.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              Twenty Ukrainian therapists, psychologists, and medical doctors joined the
              delivery team — not through recruitment, but after experiencing the program
              themselves during active hostilities and concluding they needed to learn it
              for their own patients.
            </p>
            <TestimonialCard
              quote="I have been working with trauma for many years and currently have a large number of refugee clients with whom many standard methods do not produce results. This approach works and brings real benefit."
              attribution="Trauma professional working with refugees"
              context="Ukraine program"
            />
          </div>
        </div>
      </section>

      {/* WHAT THIS EVIDENCE IS AND IS NOT */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
              What this evidence is and is not
            </h2>
            <div className="space-y-4">
              {[
                "Field evidence, not a peer-reviewed trial. The Ukraine data is structured measurement across multiple cohorts with follow-up where available. There was no control group.",
                "Case evidence, not a controlled study. Individual case records are anonymized practitioner records. They represent range across different presenting situations, not a selected set of the most dramatic available.",
                "Tracker data where available. Two of the four individual cases include client-maintained symptom trackers. These are self-reported, not clinically administered instruments.",
                "Practitioner-estimated ratings where explicitly labelled. The remaining two cases use retrospective practitioner severity estimates. These are directional indicators, not validated measurements.",
                "Not a substitute for medical or psychiatric care. No claim is made that this method guarantees similar outcomes. Results vary. Where clinical or psychiatric care is needed, it takes precedence.",
              ].map((item, i) => (
                <div key={i} className="border-b border-border-light pb-4">
                  <p className="text-base text-ink-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        dark
        body="If you recognise something of your own situation here, we can talk about what you want to change and what the work would involve."
        primary={{ label: "Book a first conversation", href: "/book" }}
        secondary={{ label: "How the method works", href: "/the-method" }}
      />
    </>
  );
}
