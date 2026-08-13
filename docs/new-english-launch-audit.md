# New English surfaces: local launch audit

Date: 13 August 2026  
Status: local work only; nothing published, committed or pushed.

## Scope and boundaries

This audit covers only the new English Library, article and format work ported from the improved Russian site, together with the new shared design and technical infrastructure that supports it. Existing English pages were not translated back from Russian. Previously approved claims and permissions were treated as approved. No new health disclaimer, refund wording or legal change was introduced.

Legacy issue-page changes remain approval-only. The separate route review is in `docs/legacy-issue-route-review.md`.

## Completed locally

- Editorial review of all 48 translated articles and the three new Method articles. The English reads as native editorial writing rather than a literal translation; restrained humour remains in the Method articles. Terminology was standardised to British English without changing approved outcomes.
- Structural parity for the new articles: commercial CTA, dark primary next-read card, light secondary next-read card, Ugis Strauss author block and expanded footer.
- SEO ownership validation for 51 new owners: unique slug, SEO title and primary query; valid next-read targets; no self-links or duplicate next-read choices.
- Internal-link validation for all literal links and redirect aliases. The current check covers 170 literal internal links.
- Conversion-path inspection from Formats to private 1:1, Group and organizational inquiry pages, followed through to their external destinations.
- Google-only measurement boundary. The English site uses the existing Method GA4 stream (`G-CFKX621QSJ`) so English and Russian Method traffic stays in one property and remains separable by hostname; no Yandex code is present.
- Dependency and security work: Next.js 16.3.0, React 19.2.8, zero audit vulnerabilities, identifying header disabled, and baseline browser security headers added.
- Accessibility and responsive verification across 13 representative routes at 375, 414, 768, 1024 and 1440 pixels: 65 route-size combinations, with no horizontal overflow, duplicate IDs, missing image alt text, unnamed controls, heading-level jumps or framework error overlays. Mobile navigation locks page scroll, closes with Escape and restores focus to its button. Reduced-motion behaviour and text contrast tokens were improved.

## Approved and implemented locally: group conversion journey

The misleading private 1:1 Calendly destination has been removed from both Group-page CTAs. They now use a central Group inquiry destination with Ugis's existing direct Telegram contact as the accurate fallback.

The Group journey now uses the dedicated English Tally application at `https://tally.so/r/ODqkr7`. `NEXT_PUBLIC_GROUP_INQUIRY_URL` remains available if that destination changes later.

No external form, event or lead was created or submitted during this audit.

## Approved and implemented locally: legacy issue pages

The seven substantive old English issue pages now have explicit self-canonicals, narrower SEO ownership and a consistent relevant-guides block. Their approved commercial claims remain intact.

The two existing permanent aliases remain unchanged: `/issues/emotional-overload` to `/issues/when-emotions-take-over`, and `/issues/trauma` to `/issues/trauma-and-past-events`.

The exact page-by-page implementation is recorded as LI-01 through LI-09 in `docs/legacy-issue-route-review.md`.

## Launch gate still required later

Because this phase is local-only, production has not been altered or verified. After a separate publication instruction, the launch gate should include production build/deployment, all sitemap URLs, canonical and redirect responses, actual response headers, analytics consent behaviour and the main conversion destinations.
