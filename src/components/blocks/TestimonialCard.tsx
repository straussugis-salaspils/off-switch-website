interface TestimonialCardProps {
  quote: string;
  attribution: string;
  context?: string;
  dark?: boolean;
}

export function TestimonialCard({ quote, attribution, context, dark = false }: TestimonialCardProps) {
  const borderColor = dark ? "border-accent-dim" : "border-accent";
  const quoteColor = dark ? "text-deep-text/80" : "text-ink-light";
  const citeColor = dark ? "text-deep-muted" : "text-muted";
  const contextColor = dark ? "text-deep-muted" : "text-muted-light";

  return (
    <div className={`border-l-2 ${borderColor} pl-6 py-1`}>
      <blockquote className={`text-base ${quoteColor} leading-relaxed italic mb-3`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className={`not-italic text-sm ${citeColor}`}>
        — {attribution}
        {context && <span className={contextColor}>, {context}</span>}
      </cite>
    </div>
  );
}

interface TestimonialGridProps {
  testimonials: TestimonialCardProps[];
  columns?: 1 | 2 | 3;
  dark?: boolean;
}

export function TestimonialGrid({ testimonials, columns = 2, dark = false }: TestimonialGridProps) {
  const gridClass =
    columns === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      : columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-8"
      : "flex flex-col gap-8";

  return (
    <div className={gridClass}>
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} dark={dark} />
      ))}
    </div>
  );
}
