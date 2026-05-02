interface StatItem {
  value: string;
  label: string;
}

interface EvidenceCalloutProps {
  stats: StatItem[];
  note?: string;
  dark?: boolean;
}

export default function EvidenceCallout({ stats, note, dark = false }: EvidenceCalloutProps) {
  const bg = dark ? "bg-deep-surface border-deep-border" : "bg-surface border-border";
  const valueColor = dark ? "text-accent-dim" : "text-accent";
  const labelColor = dark ? "text-deep-muted" : "text-muted";
  const noteColor = dark ? "text-deep-muted border-deep-border" : "text-muted-light border-border";

  return (
    <div className={`border ${bg} p-8 lg:p-10`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className={`font-serif text-4xl lg:text-5xl font-light ${valueColor} mb-2 tracking-display`}>
              {stat.value}
            </p>
            <p className={`text-sm ${labelColor} leading-snug`}>{stat.label}</p>
          </div>
        ))}
      </div>
      {note && (
        <p className={`mt-6 pt-6 border-t ${noteColor} text-sm leading-relaxed`}>
          {note}
        </p>
      )}
    </div>
  );
}
