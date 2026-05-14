# Tool GEO Pages Design

## Goal

Create one GEO-optimized detail page for each existing free tool: pace converter, chain length calculator, and gear ratio calculator.

## Approach

Use one shared Vue component for the layout and one typed data file for page-specific copy, metadata, FAQs, and internal links. Each tool gets a thin Nuxt page file under `/tools/*` that resolves its content by slug and renders the shared component.

## Pages

- `/tools/pace-converter`
- `/tools/chain-length-calculator`
- `/tools/gear-ratio-calculator`

## SEO And GEO Requirements

Each detail page includes:

- localized title and meta description for German and English
- canonical URL
- Open Graph and Twitter metadata
- structured data for `WebApplication`, `BreadcrumbList`, and `FAQPage`
- a direct, concise answer-oriented intro
- the interactive calculator near the top of the page
- explanatory sections covering what the tool does, how to use it, how to interpret the result, and practical limits
- FAQs written as direct question/answer pairs
- internal links to the tools overview and relevant coaching pages

## Files

- Create `app/data/toolGeoPages.ts` for typed page content.
- Create `app/components/tools/ToolGeoPage.vue` for the shared page experience.
- Create `app/pages/tools/pace-converter.vue`.
- Create `app/pages/tools/chain-length-calculator.vue`.
- Create `app/pages/tools/gear-ratio-calculator.vue`.
- Modify `app/components/tools/ToolCard.vue` to expose an optional detail-page link.
- Move the overview page to `app/pages/tools/index.vue` and link each overview card to its detail page.
- Keep calculators only on their dedicated detail pages; the `/tools` overview shows short GEO descriptions and links.
- Use `mm:ss` or `hh:mm:ss` input and output formatting for pace values instead of decimal-minute entry.
- Modify locale files only for the new overview CTA label.

## Verification

Run Nuxt typecheck and lint after implementation. Start the dev server and inspect the pages locally.
