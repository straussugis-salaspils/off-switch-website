interface CaseSummaryProps {
  evidenceType: string;
  startingPoint: string;
  endPoint: string;
  functionalOutcome: string;
}

/**
 * Premium case-summary panel used across individual case pages.
 *
 * Layout (3 rows, 4 cards):
 *   Row 1: paired metrics — Starting point | End point     (2-col on md+)
 *   Row 2: Functional outcome                              (full-width, strongest)
 *   Row 3: Evidence type                                   (full-width, demoted methodology footer)
 *
 * Mobile: all cards stack 1-col in the same hierarchy order.
 *
 * Hierarchy is expressed via card width (full vs paired) and typography
 * weight (`text-ink` for the strongest card, `text-muted` for the methodology
 * footer). Cards are static — they are non-clickable evidence panels, so
 * they do not use the `card-hover` utility (which is reserved for clickable
 * elements only).
 */
export default function CaseSummary({
  evidenceType,
  startingPoint,
  endPoint,
  functionalOutcome,
}: CaseSummaryProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {/* Row 1: paired metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
            Starting point
          </p>
          <p className="text-base text-ink-light leading-relaxed">{startingPoint}</p>
        </div>
        <div className="border border-border bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-muted-light mb-2">
            End point
          </p>
          <p className="text-base text-ink-light leading-relaxed">{endPoint}</p>
        </div>
      </div>

      {/* Row 2: functional outcome — strongest emphasis (carried by full width
          and `text-ink` body weight; eyebrow stays neutral per Type 4 rule) */}
      <div className="border border-border bg-white p-6">
        <p className="text-xs uppercase tracking-widest text-muted-light mb-3">
          Functional outcome
        </p>
        <p className="text-base text-ink leading-relaxed">{functionalOutcome}</p>
      </div>

      {/* Row 3: evidence type — methodology footer, demoted */}
      <div className="border border-border bg-white p-5">
        <p className="text-[10px] uppercase tracking-widest text-muted-light mb-2">
          Evidence type
        </p>
        <p className="text-sm text-muted leading-relaxed">{evidenceType}</p>
      </div>
    </div>
  );
}
