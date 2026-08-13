"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SectionNavigationItem {
  href: string;
  label: string;
}

export default function SectionNavigation({
  items,
  label,
}: {
  items: readonly SectionNavigationItem[];
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className="context-navigation-scrollbar sticky top-16 z-40 overflow-x-auto border-b border-border bg-ground/95 shadow-[0_8px_24px_rgba(26,24,23,0.06)] backdrop-blur-md lg:top-[68px]"
    >
      <div className="mx-auto flex min-h-12 w-full max-w-[1180px] items-stretch gap-6 px-5 sm:px-7 lg:gap-8 lg:px-10">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative inline-flex min-h-12 shrink-0 items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
                active ? "text-ink" : "text-muted hover:text-accent"
              }`}
            >
              {item.label}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
