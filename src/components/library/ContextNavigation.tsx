import Link from "next/link";

export interface ContextNavigationItem {
  label: string;
  href?: string;
}

export default function ContextNavigation({
  items,
}: {
  items: readonly ContextNavigationItem[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-ground"
    >
      <ol className="mx-auto flex min-h-12 w-full max-w-[1180px] items-center gap-2 overflow-x-auto px-5 text-sm text-muted sm:px-7 lg:px-10">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex shrink-0 items-center gap-2">
            {index > 0 && <span aria-hidden="true">→</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center text-accent hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
