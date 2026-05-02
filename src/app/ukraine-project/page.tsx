import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { TestimonialGrid } from "@/components/blocks/TestimonialCard";
import CTABand from "@/components/blocks/CTABand";

export const metadata: Metadata = {
  title: "Ukraine Project",
  description:
    "In 2022, the Off-Switch Method was deployed as a free crisis-response program for 7,000 Ukrainians experiencing active war trauma. Documented outcomes across six cohorts.",
};

export default function UkraineProject() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 grain">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-deep-muted mb-4">
              <span>Field Application</span>
              <span className="mx-2 text-deep-muted/40">·</span>
              <span>2022</span>
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-deep-text leading-tight tracking-display mb-6">
              Ukraine Project
            </h1>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-4">
              In March 2022, two weeks after Russia&rsquo;s full invasion of Ukraine, a
              free online program was launched for Ukrainians experiencing war trauma. Six
              cohorts. Six months. Approximately 7,000 participants — 80% inside Ukraine
              during active hostilities.
            </p>
            <p className="text-base text-deep-muted leading-relaxed max-w-2xl mb-8">
              Average PTSD symptom reduction of 42–60% at program completion. Results
              sustained at one-month follow-up.
            </p>
            <Button href="/for-organizations" variant="ghost-light" size="md">
              For Organizations →
            </Button>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Context
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              On February 24, 2022, Russia launched a full-scale invasion of Ukraine. Within
              two weeks, the Off-Switch Method was deployed as a free crisis-response program
              for the Ukrainian population.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The program ran entirely online, in Russian, at no cost to participants. It was
              available to anyone in Ukraine or abroad. The conditions under which it was
              delivered — active hostilities, displacement, ongoing uncertainty — represent
              some of the most challenging possible circumstances for any psychological
              intervention.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              80% of enrolled participants were inside Ukraine during active hostilities.
              20% were refugees abroad. The program ran for six months across six successive
              cohort groups.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
            Program structure
          </h2>
          <dl className="max-w-2xl border-t border-border grid grid-cols-1 sm:grid-cols-2">
            {[
              { label: "Format", value: "Six live online sessions over approximately four weeks per cohort" },
              { label: "Language", value: "Russian" },
              { label: "Cost", value: "Free to all participants" },
              { label: "Recordings", value: "Available after each session" },
              { label: "Mentoring", value: "Optional small-group mentoring by trained Ukrainian practitioners" },
              { label: "Cohorts", value: "Six cohort groups over six months" },
            ].map((item) => (
              <div key={item.label} className="py-5 border-b border-border-light">
                <dt className="text-xs uppercase tracking-widest text-accent mb-2">
                  {item.label}
                </dt>
                <dd className="text-sm text-ink-light leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* DELIVERY TEAM */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              The delivery team
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              As the program progressed, a significant pattern emerged among the
              participants. Ukrainian therapists, psychologists, and medical doctors who
              were enrolled in the program began requesting training in the Off-Switch
              Method.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              They were not recruited. They participated in the program during active
              hostilities, observed and experienced the results, and concluded they needed
              to learn the method for their own patients. Twenty joined the delivery team.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              This professional uptake — clinicians voluntarily seeking training after
              experiencing outcomes — represents a different category of validation than
              participant testimonials.
            </p>
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Measurement
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              PTSD symptoms were measured using a structured 21-item scale (maximum score
              105) at three points: before the program, at program completion, and four
              weeks after program completion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { g: "Group 3", pre: "53.1", end: "21.5", red: "60%", fu: "—", fuc: "—" },
                { g: "Group 4", pre: "62.7", end: "36.4", red: "42%", fu: "34.9", fuc: "44%" },
                { g: "Group 5", pre: "69.2", end: "39.6", red: "43%", fu: "37.2", fuc: "46%" },
              ].map((r) => (
                <div key={r.g} className="border border-border bg-white p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-widest text-muted-light mb-1.5">Cohort</p>
                  <h3 className="font-serif text-xl font-light text-ink mb-6">{r.g}</h3>

                  <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">Reduction</p>
                  <p className="font-serif text-4xl lg:text-5xl font-light text-ink tabular-nums leading-none">
                    {r.red}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border-light space-y-2 text-sm text-muted leading-relaxed">
                    <p>
                      Pre-course <span className="text-ink-light tabular-nums">{r.pre}</span>{" "}
                      → End <span className="text-ink-light tabular-nums">{r.end}</span>
                    </p>
                    <p>
                      Follow-up: <span className="text-ink-light tabular-nums">{r.fu === "—" ? "—" : `${r.fu} (${r.fuc})`}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-border p-6">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">
                Methodology note
              </p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The study population was participants who completed all six sessions —
                approximately 30% of each cohort&rsquo;s enrollment, representing roughly
                300–500 individuals across the measured groups. The 7,000 figure is total
                enrollment across all six cohorts.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Results were consistent across Groups 3, 4, and 5 and were sustained at
                one-month follow-up. This is field data, not a controlled trial. There was
                no control group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              What the results show
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              Across Groups 3, 4, and 5, average PTSD symptom reduction at program
              completion ranged from 42% to 60%. The reduction was not only achieved at
              program end — it was sustained at one-month follow-up in Groups 4 and 5,
              where it slightly improved.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              This suggests the method produced durable change rather than temporary relief.
              Participants continued improving after the program ended, consistent with a
              change in underlying state rather than a dependence on active sessions.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              These results were achieved in conditions of ongoing active conflict. Many
              participants remained in areas under daily threat throughout. The external
              stressor did not change. The internal response to it did.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-8">
            From participants
          </h2>
          <TestimonialGrid
            columns={2}
            testimonials={[
              {
                quote: "My sleep has normalized. I am in a stable calm state despite war and daily bomb threats. Once again I have the desire to live and create.",
                attribution: "Elena Kopychenko",
                context: "Ukraine",
              },
              {
                quote: "Not only did I get rid of the phantom siren in my head — in just three weeks I also resolved issues I had been working on for years in psychotherapy.",
                attribution: "Svetlana Valerievna",
                context: "Ukraine",
              },
            ]}
          />
        </div>
      </section>

      {/* INSTITUTIONAL RELEVANCE */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Why this matters for institutions
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The Ukraine program demonstrates the method operating at scale, under extreme
              conditions, with documented outcomes. The protocol that produced these results
              is transferable.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The group delivery format — six sessions over four weeks, participants working
              independently between sessions — is specifically designed for organizational
              implementation. It does not require ongoing individual practitioner time for
              each participant.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              For organizations managing sustained emotional load — humanitarian settings,
              frontline and medical contexts, leadership teams under prolonged pressure —
              the Ukraine data represents the closest available proof of what this protocol
              can produce at the organizational level.
            </p>
            <Button href="https://tally.so/r/441ZOd" variant="outline" size="md">
              Send an organizational inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* LIMITS AND HONESTY */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-6">
              Limits and honesty
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              This is field application — a structured intervention deployed in real
              conditions, not a controlled clinical trial.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The protocol was not randomized. There was no control group. Self-selected
              participants enrolled and chose whether to complete the program. The results
              have not been peer-reviewed.
            </p>
            <p className="text-base text-ink-light leading-relaxed mb-4">
              The reduction figures shown reflect participants who completed all six
              sessions — approximately 30% of each cohort&rsquo;s enrollment. They do not
              describe outcomes for participants who dropped out or chose not to enroll.
            </p>
            <p className="text-base text-ink-light leading-relaxed">
              Individual reports are not guarantees of similar outcomes for any specific
              person. The Off-Switch Method is not a substitute for medical, psychiatric,
              emergency, or crisis care.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        dark
        primary={{ label: "For Organizations", href: "/for-organizations" }}
        secondary={{ label: "See the Evidence", href: "/evidence" }}
      />
    </>
  );
}
