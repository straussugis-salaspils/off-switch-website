# Legacy English issue routes: approved local implementation

Date: 13 August 2026  
Approval: approved by Ugis on 13 August 2026.  
Status: implemented locally; nothing published, committed or pushed. No deletion, redirect change, content merge or cross-canonical was made.

## Executive recommendation

Keep seven substantive issue pages as commercially oriented problem-entry pages, but give each a narrower query owner and direct links into the relevant Library hub and articles. Preserve the two existing alias routes, `/issues/emotional-overload` and `/issues/trauma`, as the permanent redirects already configured in `next.config.ts`. Do not use a cross-canonical between a substantive issue page and a Library page: these pages have related topics but different purposes, so internal linking and clearer query ownership are the appropriate tools.

## Current architecture

The issue pages are conversion-oriented: they describe a recognisable situation, explain how the Method relates to it, provide a safety boundary and lead to a conversation. The new Library hubs are editorial indexes, while the articles own specific informational questions. Those three roles can coexist when titles, introductions and internal links make the distinction explicit.

Current direct internal-link evidence was counted in `src` (the sitemap is reported separately):

| Legacy route | Current state | Direct internal sources | In sitemap | Closest new owner |
|---|---:|---:|---:|---|
| `/issues/anxiety` | substantive page | 2 | yes | `/library/anxiety-specific-fears` and `/articles/anxiety-for-no-reason` |
| `/issues/burnout` | substantive page | 3 | yes | `/library/work-burnout-action` and `/articles/how-to-recover-from-burnout` |
| `/issues/emotional-overload` | permanent redirect | 0 | no | `/issues/when-emotions-take-over` |
| `/issues/emotional-triggers` | substantive page | 3 | yes | `/articles/emotional-triggers` and `/library/past-difficult-memories` |
| `/issues/overthinking` | substantive page | 4 | yes | `/articles/why-thoughts-go-in-circles` and `/library/thoughts-sleep-low-mood` |
| `/issues/sleep` | substantive page | 2 | yes | `/articles/why-your-mind-replays-the-day-at-night` and `/library/thoughts-sleep-low-mood` |
| `/issues/stress-and-overload` | substantive page | 5 | yes | `/library/work-burnout-action` plus overload-related articles |
| `/issues/trauma` | permanent redirect | 0 direct links | no | `/issues/trauma-and-past-events` |
| `/issues/when-emotions-take-over` | substantive page | 5 visible sources plus the alias redirect | yes | `/articles/why-your-reaction-feels-bigger-than-the-situation` |

## Query and search-intent observations

- Broad health queries such as anxiety, trauma and PTSD are dominated by medical or diagnostic explanations. The Method's commercial issue pages should therefore avoid pretending to be definitive clinical explainers and should own the narrower situation they actually describe.
- “Overthinking” results are primarily informational and technique-led. The issue page should own the situation “the thinking continues after it stops helping”; the article should own the explanatory question about thoughts going in circles.
- “Sleep anxiety” is a recognisable topic distinct from general sleep advice. The issue page's safety note and focus on recurring night activation create a viable boundary; the nighttime-thought article can own the narrower informational query.
- “Emotional overwhelm,” “emotional flooding,” “emotional triggers,” and “strong reactions” overlap heavily. This is the highest-risk cluster and needs explicit query ownership rather than multiple pages repeating the same definition.
- Trauma and PTSD are not interchangeable. The existing trauma alias should continue to lead to the broader trauma-and-past-events issue page, while the Library's PTSD article and trauma/PTSD hub retain their specific informational roles.

Research references: [Cleveland Clinic on sleep anxiety](https://my.clevelandclinic.org/health/diseases/21543-sleep-anxiety), [Harvard Health on rumination](https://www.health.harvard.edu/mind-and-mood/break-the-cycle), [GoodTherapy on emotional overwhelm](https://www.goodtherapy.org/learn-about-therapy/issues/emotional-overwhelm), [American Psychiatric Association on PTSD](https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd), and the [US National Center for PTSD treatment overview](https://www.ptsd.va.gov/professional/treat/txessentials/overview_therapy.asp).

## Route-by-route approval decisions

### LI-01 — `/issues/anxiety`

Recommendation: **Keep, self-canonical, reposition.**

Let the issue page own “persistent anxiety even after you understand it.” Let `/articles/anxiety-for-no-reason` own “anxiety for no reason,” and let the hub own navigation across anxiety and specific fears. Add a short Library section linking to the hub and the most relevant anxiety articles. Avoid broad claims that the page explains anxiety as a whole.

### LI-02 — `/issues/burnout`

Recommendation: **Keep, self-canonical, reposition.**

Let the issue page own “burnout when rest has not restored capacity” as a Method-fit page. Let `/articles/how-to-recover-from-burnout` own the recovery query and the hub own the full work/burnout/action cluster. Add links to the recovery, holiday, inability-to-stop-working and job-not-you articles.

### LI-03 — `/issues/emotional-overload`

Recommendation: **Keep the existing permanent redirect to `/issues/when-emotions-take-over`.**

This route already contains no content and permanently redirects to the stronger substantive page through `next.config.ts`. It has no direct internal links and is absent from the sitemap. There is nothing to merge. Do not delete the route because the old URL should continue resolving.

### LI-04 — `/issues/emotional-triggers`

Recommendation: **Keep, self-canonical, narrow to recurring-trigger/service intent.**

This is the clearest article-versus-issue collision. `/articles/emotional-triggers` should own “what are emotional triggers”; the issue page should own “why a known trigger still fires despite insight.” Its present H1, “Recurring Triggers,” already moves in the right direction, but the title, first paragraph and internal links should make ownership unambiguous. Link prominently to the exact-query article and the past/difficult-memories hub.

### LI-05 — `/issues/overthinking`

Recommendation: **Keep, self-canonical, reposition and interlink.**

Let the issue page own “overthinking that continues after analysis stops being useful.” Let `/articles/why-thoughts-go-in-circles` own the explanatory loop query. Add links to that article, the nighttime-thought article, the cannot-relax article and the thoughts/sleep/low-mood hub.

### LI-06 — `/issues/sleep`

Recommendation: **Keep, self-canonical, rename metadata around sleep anxiety and night waking.**

The page has a clear safety boundary and a distinct Method-fit role. It should target “sleep anxiety” and “waking at night with anxiety,” while `/articles/why-your-mind-replays-the-day-at-night` owns “cannot sleep because of thoughts.” Add links to that article, the cannot-relax article and the hub.

### LI-07 — `/issues/stress-and-overload`

Recommendation: **Keep, self-canonical, make it the accumulated-pressure entry page.**

This page is well connected and distinguishes ongoing load from burnout. Let it own “stress and overload that does not switch off”; keep burnout recovery and panic-after-overload with their respective articles. Add a Library block rather than relying only on links to other issue pages.

### LI-08 — `/issues/trauma`

Recommendation: **Keep the existing permanent redirect to `/issues/trauma-and-past-events`.**

This route already contains no substantive content and permanently redirects through `next.config.ts`. Keep the old URL resolvable. The trauma/PTSD hub and articles remain informational owners; no cross-canonical is needed.

### LI-09 — `/issues/when-emotions-take-over`

Recommendation: **Keep, self-canonical, make it the emotional-overwhelm/strong-reaction entry page.**

Let this page own the broad situation in which emotional intensity outruns choice. Let `/articles/why-your-reaction-feels-bigger-than-the-situation` own the explanatory question and `/articles/emotional-triggers` own the definition of triggers. Add both article links and the appropriate Library hubs; reduce repeated trigger-definition language on the issue page.

## Local implementation completed

1. All seven substantive routes now have explicit self-canonical metadata; none points its canonical at a Library page.
2. The two one-step permanent aliases remain unchanged and the old URLs were not deleted.
3. Every retained issue page now has a consistent “Read the relevant guides” block linking to its Library hub and narrower articles.
4. Titles, descriptions and H1 copy were narrowed to establish the agreed query owner while preserving the approved claims and commercial purpose.
5. The link graph, sitemap, metadata, lint, build and responsive browser checks remain launch gates before any separate publication decision.
