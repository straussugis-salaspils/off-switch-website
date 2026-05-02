import Button from "@/components/ui/Button";

interface CTABandProps {
  heading?: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tertiary?: { label: string; href: string };
  tint?: boolean;
  dark?: boolean;
}

export default function CTABand({
  heading,
  body,
  primary,
  secondary,
  tertiary,
  tint = false,
  dark = false,
}: CTABandProps) {
  const sectionBg = dark ? "bg-deep" : tint ? "bg-surface" : "";
  const headingColor = dark ? "text-deep-text" : "text-ink";
  const bodyColor = dark ? "text-deep-muted" : "text-muted";
  const primaryVariant = dark ? "primary" : "outline";
  const secondaryVariant = dark ? "ghost-light" : "ghost";

  return (
    <section className={`py-16 lg:py-20 ${sectionBg}`}>
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {heading && (
            <h2 className={`font-serif text-3xl lg:text-4xl font-light ${headingColor} mb-4`}>
              {heading}
            </h2>
          )}
          {body && (
            <p className={`text-base ${bodyColor} leading-relaxed mb-8`}>{body}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button href={primary.href} variant={primaryVariant} size="md">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant={secondaryVariant} size="md">
                {secondary.label} →
              </Button>
            )}
          </div>
          {tertiary && (
            <div className="mt-4">
              <Button href={tertiary.href} variant={secondaryVariant} size="sm">
                {tertiary.label} →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
