"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const GOOGLE_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-CFKX621QSJ";
const CONSENT_KEY = "method_en_analytics_consent_v2";
const PRODUCTION_HOST = "method.yourbalancerestored.com";

type AnalyticsConsent = "analytics_granted" | "essential_only";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(name: string, params: Record<string, string>) {
  window.gtag?.("event", name, params);
}

function removeAnalyticsCookies() {
  const analyticsCookie = /^(?:_ga|_gid|_gat)/;
  const domains = ["", window.location.hostname, ".yourbalancerestored.com"];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !analyticsCookie.test(name)) continue;
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`;
    }
  }
}

function AnalyticsEvents() {
  const pathname = usePathname();
  const previousUrl = useRef<string | null>(null);

  useEffect(() => {
    const pageUrl = `${window.location.pathname}${window.location.search}`;
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: pageUrl,
      page_title: document.title,
    });
    previousUrl.current = pageUrl;
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const element = event.target instanceof Element ? event.target : null;
      const anchor = element?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const articleId = anchor.dataset.articleCommercial;
      if (articleId) {
        sendEvent("article_commercial_click", {
          article_id: articleId,
          destination: new URL(anchor.href, window.location.href).pathname,
          placement: anchor.dataset.commercialPlacement || "unknown",
          cta_text: (anchor.textContent || "").trim().slice(0, 100),
        });
      }

      const destination = new URL(anchor.href, window.location.href);
      if (window.location.pathname === "/formats" && ["/one-to-one", "/group", "/for-organizations"].includes(destination.pathname)) {
        sendEvent("format_select", {
          format: destination.pathname.slice(1),
          destination: destination.pathname,
          placement: window.location.pathname,
          cta_text: (anchor.textContent || "").trim().slice(0, 100),
        });
      }

      const channel = destination.hostname === "tally.so"
        ? "tally"
        : destination.hostname === "calendly.com"
          ? "calendly"
          : destination.hostname === "t.me" || destination.hostname === "telegram.me"
            ? "telegram"
            : "";
      if (!channel) return;
      sendEvent("lead_start", {
        channel,
        destination: destination.origin + destination.pathname,
        placement: window.location.pathname,
        cta_text: (anchor.textContent || "").trim().slice(0, 100),
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const placements = Array.from(document.querySelectorAll<HTMLElement>("[data-article-commercial-view]"));
    if (placements.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const placement = entry.target as HTMLElement;
        const articleId = placement.dataset.articleCommercialView || "unknown";
        const key = `method_en_article_cta_view_${articleId}_${window.location.pathname}`;
        if (!window.sessionStorage.getItem(key)) {
          window.sessionStorage.setItem(key, "1");
          sendEvent("article_commercial_view", { article_id: articleId, page_path: window.location.pathname });
        }
        observer.unobserve(placement);
      }
    }, { threshold: 0.35 });
    for (const placement of placements) observer.observe(placement);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function ConsentControls({ onChoiceChange }: { onChoiceChange: (choice: AnalyticsConsent | null) => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    const frame = window.requestAnimationFrame(() => {
      if (saved === "analytics_granted" || saved === "essential_only") {
        onChoiceChange(saved);
        window.gtag?.("consent", "update", { analytics_storage: saved === "analytics_granted" ? "granted" : "denied" });
      } else {
        setOpen(true);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [onChoiceChange]);

  useEffect(() => {
    const openSettings = () => setOpen(true);
    window.addEventListener("method:open-cookie-settings", openSettings);
    return () => window.removeEventListener("method:open-cookie-settings", openSettings);
  }, []);

  function choose(next: AnalyticsConsent) {
    window.localStorage.setItem(CONSENT_KEY, next);
    onChoiceChange(next);
    setOpen(false);
    window.gtag?.("consent", "update", { analytics_storage: next === "analytics_granted" ? "granted" : "denied" });
    if (next === "essential_only") removeAnalyticsCookies();
  }

  if (!open) return null;
  return (
    <section aria-label="Cookie settings" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-accent/20 bg-ground p-4 text-ink shadow-[0_18px_56px_rgba(26,24,23,0.18)] sm:p-5">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center sm:gap-6">
        <div className="max-w-[65ch]">
          <h2 className="text-base font-semibold">Help make the library easier to use</h2>
          <p className="mt-1.5 text-sm leading-6 text-ink-light">
            Optional Google Analytics shows where readers struggle to find an article or next step. It loads only if you allow it. <a className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-dim" href="/privacy-policy">Privacy details</a>.
          </p>
        </div>
        <div className="grid gap-1.5">
          <button type="button" onClick={() => choose("analytics_granted")} className="min-h-11 rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim">Allow analytics</button>
          <button type="button" onClick={() => choose("essential_only")} className="min-h-11 rounded-full px-3 py-2 text-xs font-medium text-muted underline decoration-border underline-offset-4 hover:text-ink">Essential only</button>
        </div>
      </div>
    </section>
  );
}

export default function Analytics() {
  const [choice, setChoice] = useState<AnalyticsConsent | null>(null);
  const [activeHost, setActiveHost] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setActiveHost(window.location.hostname === PRODUCTION_HOST && Boolean(GOOGLE_ID)));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const analyticsEnabled = activeHost && choice === "analytics_granted";
  return (
    <>
      {analyticsEnabled ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics-config" strategy="afterInteractive">{`
            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ID}', { send_page_view: false });
          `}</Script>
          <AnalyticsEvents />
        </>
      ) : null}
      {activeHost ? <ConsentControls onChoiceChange={setChoice} /> : null}
    </>
  );
}
