# Tool GEO Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build GEO-optimized detail pages for the three existing free tools.

**Architecture:** Page-specific content lives in one typed data module. A shared Vue component renders SEO metadata, schema, hero, calculator, content sections, FAQ, related links, and CTA. Three route files pass the correct data object into the shared component.

**Tech Stack:** Nuxt 4, Vue 3, TypeScript, Nuxt i18n, Nuxt SEO metadata composables, existing tool calculator components.

---

### Task 1: Add Tool GEO Content

**Files:**
- Create: `app/data/toolGeoPages.ts`

- [ ] **Step 1: Define page data types**

Create `ToolGeoPage`, localized copy types, section types, FAQ references, and `getToolGeoPageBySlug(slug)`.

- [ ] **Step 2: Add the three page records**

Add localized copy for `pace-converter`, `chain-length-calculator`, and `gear-ratio-calculator` including title, description, H1, intro, quick facts, sections, FAQs, and related links.

### Task 2: Add Shared Renderer

**Files:**
- Create: `app/components/tools/ToolGeoPage.vue`

- [ ] **Step 1: Resolve localized copy and calculator component**

Use the active i18n locale to choose German or English copy. Map each `toolKey` to the existing calculator component.

- [ ] **Step 2: Add SEO metadata and JSON-LD**

Emit canonical, Open Graph, Twitter, `WebApplication`, `BreadcrumbList`, and `FAQPage` schema.

- [ ] **Step 3: Render page sections**

Render hero, embedded calculator, quick facts, explanatory sections, FAQ, related links, and existing CTA section.

### Task 3: Add Routes And Overview Links

**Files:**
- Create: `app/pages/tools/pace-converter.vue`
- Create: `app/pages/tools/chain-length-calculator.vue`
- Create: `app/pages/tools/gear-ratio-calculator.vue`
- Modify: `app/components/tools/ToolCard.vue`
- Move: `app/pages/tools.vue` to `app/pages/tools/index.vue`
- Modify: `i18n/locales/de.json`
- Modify: `i18n/locales/en.json`
- Create: `app/utils/paceTime.ts`

- [ ] **Step 1: Add thin route files**

Each route loads its page by slug and renders `<ToolsToolGeoPage :page="page" />`.

- [ ] **Step 2: Add optional ToolCard link**

Expose `detailTo` and `detailLabel` props and render a link below the calculator when provided.

- [ ] **Step 3: Move and link overview cards**

Move the overview route to `app/pages/tools/index.vue` so `/tools/*` child routes can resolve, then pass localized detail routes and the new `tools.openToolPage` label from `/tools`.

- [ ] **Step 4: Remove calculators from overview**

Render short GEO descriptions and links only on `/tools`; keep the interactive calculators exclusively on each tool detail page.

- [ ] **Step 5: Format pace input as time**

Parse pace values from `mm:ss` and `hh:mm:ss`, keep speed values numeric, and format pace results back to time strings.

### Task 4: Verify

**Files:**
- Verify all changed files.

- [ ] **Step 1: Run typecheck**

Run `npm run typecheck`; expected result: command completes successfully.

- [ ] **Step 2: Run lint**

Run `npm run lint`; expected result: command completes successfully or only reports pre-existing unrelated issues.

- [ ] **Step 3: Run local dev server if needed**

Open `/tools/pace-converter`, `/tools/chain-length-calculator`, and `/tools/gear-ratio-calculator` to verify layout and calculator rendering.
