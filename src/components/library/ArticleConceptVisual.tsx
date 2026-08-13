import Image from "next/image";

import type { ArticleVisual } from "@/content/article-visuals";

export default function ArticleConceptVisual({ visual }: { visual: ArticleVisual }) {
  return (
    <figure id={visual.id} data-article-visual={visual.id} data-visual-kind="illustration" className="article-concept-visual my-11 overflow-hidden border-y border-border bg-ground sm:-mx-4 sm:my-16">
      <div className="border-b border-border px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7">
        <p className="font-serif text-2xl leading-tight text-ink [overflow-wrap:anywhere] sm:text-[1.75rem]">{visual.statement}</p>
      </div>
      {visual.mobileSrc ? <Image src={visual.mobileSrc} alt={visual.alt} width={visual.mobileWidth} height={visual.mobileHeight} sizes="100vw" className="h-auto w-full bg-ground sm:hidden" /> : null}
      <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 767px) 100vw, 680px" className={`h-auto w-full bg-ground ${visual.mobileSrc ? "hidden sm:block" : "block"}`} />
      <figcaption className="border-t border-border px-5 py-3 text-sm leading-6 text-ink-light sm:px-7">{visual.caption}</figcaption>
    </figure>
  );
}
