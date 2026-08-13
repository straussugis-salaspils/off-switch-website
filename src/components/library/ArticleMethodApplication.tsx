import { headingId } from "@/lib/translated-article-content";
import type { ArticleMethodApplication as Application } from "@/content/article-method-applications";

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    const match = part.match(/^\*\*(.+)\*\*$/);
    return match ? <strong key={index} className="font-semibold text-ink">{match[1]}</strong> : part;
  });
}

export default function ArticleMethodApplication({ articleId, application }: { articleId: string; application: Application }) {
  return (
    <section aria-labelledby={headingId(application.heading)} className="space-y-5" data-article-method-application={articleId}>
      <h2 id={headingId(application.heading)} className="article-section-heading scroll-mt-36 pt-5 font-serif text-[1.875rem] font-normal leading-tight tracking-display text-ink sm:text-4xl">{application.heading}</h2>
      <div className="space-y-5">
        {application.blocks.map((block, index) => {
          if (block.kind === "heading") return <h3 key={index} id={headingId(block.text)} className="scroll-mt-36 pt-4 font-serif text-2xl font-normal leading-snug text-ink">{block.text}</h3>;
          if (block.kind === "quote") return <blockquote key={index} className="article-pull-quote border-l-[3px] border-accent bg-accent-surface/45 px-5 py-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl">{block.text}</blockquote>;
          return <p key={index} className="text-[17px] leading-[1.75] text-ink-light">{inline(block.text)}</p>;
        })}
      </div>
    </section>
  );
}
