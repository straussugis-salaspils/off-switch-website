import Image from "next/image";

export default function UgisWorkingPhoto({ className = "" }: { className?: string }) {
  return (
    <figure className={`max-w-[520px] ${className}`}>
      <Image
        src="/images/ugis/ugis-at-work-edited-v1.webp"
        alt="Ugis Strauss at his desk, looking towards his computer"
        width={1536}
        height={1024}
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 520px, calc(100vw - 40px)"
        className="h-auto w-full"
      />
      <figcaption className="mt-2 text-xs leading-relaxed text-muted">
        Ugis at his desk · AI-edited personal photograph
      </figcaption>
    </figure>
  );
}
