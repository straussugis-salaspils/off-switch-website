"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface TocHeading {
  id: string;
  level: 2 | 3;
  text: string;
}

function useActiveHeading(headings: TocHeading[]) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");
  useEffect(() => {
    const update = () => {
      const elements = headings.map((heading) => document.getElementById(heading.id)).filter((element): element is HTMLElement => Boolean(element));
      if (!elements.length) return;
      const marker = Math.min(window.innerHeight * 0.32, 230);
      let current = elements[0];
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= marker) current = element;
        else break;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = elements[elements.length - 1];
      setActiveId((previous) => previous === current.id ? previous : current.id);
    };
    let frame = 0;
    const schedule = () => { window.cancelAnimationFrame(frame); frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); window.cancelAnimationFrame(frame); };
  }, [headings]);
  return activeId;
}

export default function ArticleTableOfContents({ headings }: { headings: TocHeading[] }) {
  const stableHeadings = useMemo(() => headings, [headings]);
  const activeId = useActiveHeading(stableHeadings);
  const tocRef = useRef<HTMLElement>(null);
  const activeIndex = Math.max(0, headings.findIndex((heading) => heading.id === activeId));
  const progress = headings.length > 1 ? activeIndex / (headings.length - 1) : 0;

  useEffect(() => {
    const toc = tocRef.current;
    const activeLink = toc?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!toc || !activeLink) return;
    const top = activeLink.offsetTop;
    const bottom = top + activeLink.offsetHeight;
    if (top < toc.scrollTop + 64) toc.scrollTo({ top: Math.max(0, top - 64) });
    else if (bottom > toc.scrollTop + toc.clientHeight - 24) toc.scrollTo({ top: bottom - toc.clientHeight + 24 });
  }, [activeId]);

  return (
    <aside ref={tocRef} className="article-toc-scrollbar sticky top-[9rem] hidden max-h-[calc(100vh-11rem)] self-start overflow-y-auto overscroll-contain border border-border bg-white p-4 shadow-[0_16px_40px_rgba(26,24,23,0.08)] xl:block" aria-label="Article contents">
      <p className="mb-3 border-b border-border pb-3 text-sm font-semibold text-ink">In this article</p>
      <div className="relative pl-5">
        <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-2"><span className="absolute bottom-0 left-[3px] top-0 w-px bg-border" /><span data-toc-progress-marker className="absolute left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-surface)] transition-[top] duration-300 motion-reduce:transition-none" style={{ top: `${progress * 100}%` }} /></span>
        <ol className="space-y-1">
          {headings.map((heading) => <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}><a href={`#${heading.id}`} aria-current={heading.id === activeId ? "location" : undefined} className={`block min-h-11 py-2.5 text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${heading.id === activeId ? "font-semibold text-accent" : "text-muted hover:text-ink"}`}>{heading.text}</a></li>)}
        </ol>
      </div>
    </aside>
  );
}
