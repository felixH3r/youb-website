<script setup lang="ts">
import ChainLengthCalculator from "~/components/tools/ChainLengthCalculator.vue";
import GearRatioCalculator from "~/components/tools/GearRatioCalculator.vue";
import PaceConverter from "~/components/tools/PaceConverter.vue";
import type { ToolGeoPage, ToolKey } from "~/data/toolGeoPages";
import {
  breadcrumbListSchema,
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "~/utils/geoSchema";

const props = defineProps<{
  page: ToolGeoPage;
}>();

const { locale } = useI18n();
const localePath = useLocalePath();

const calculatorComponents: Record<ToolKey, Component> = {
  pace: PaceConverter,
  chainLength: ChainLengthCalculator,
  gearRatio: GearRatioCalculator,
};

const copy = computed(() => props.page.copy[locale.value === "en" ? "en" : "de"]);
const localizedPath = computed(() =>
  locale.value === "en" ? `/en${props.page.path}` : props.page.path,
);
const canonicalUrl = computed(() => `https://youb.app${localizedPath.value}`);
const calculatorComponent = computed(() => calculatorComponents[props.page.toolKey]);

const webApplicationSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${canonicalUrl.value}#tool`,
  name: props.page.schemaName,
  url: canonicalUrl.value,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  description: props.page.schemaDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  publisher: {
    "@id": "https://youb.app/#organization",
  },
}));

useHead(() => ({
  title: copy.value.seoTitle,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema()),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(webSiteSchema()),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(webApplicationSchema.value),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        breadcrumbListSchema([
          { name: "Home", item: "https://youb.app/" },
          { name: "Tools", item: "https://youb.app/tools" },
          { name: copy.value.h1, item: canonicalUrl.value },
        ]),
      ),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqPageSchema(copy.value.faqs)),
    },
  ],
}));

useSeoMeta({
  title: () => copy.value.seoTitle,
  description: () => copy.value.seoDescription,
  ogTitle: () => copy.value.seoTitle,
  ogDescription: () => copy.value.seoDescription,
  ogUrl: () => canonicalUrl.value,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: () => copy.value.seoTitle,
  twitterDescription: () => copy.value.seoDescription,
});
</script>

<template>
  <main class="min-h-screen bg-black text-white selection:bg-white selection:text-black">
    <section class="relative isolate overflow-hidden px-4 pb-20 pt-34 md:pb-28 md:pt-44">
      <div class="absolute inset-0 -z-20">
        <img
          src="/HeroNew.png"
          alt=""
          class="h-full w-full object-cover opacity-25"
        >
        <div class="absolute inset-0 bg-linear-to-b from-black/30 via-black/82 to-black" />
      </div>

      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl">
            <Icon :name="page.icon" class="h-4 w-4 text-white/80" />
            {{ copy.eyebrow }}
          </p>
          <h1 class="max-w-4xl text-4xl font-bold leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl">
            {{ copy.h1 }}
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/66 md:text-xl">
            {{ copy.intro }}
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLink
              :to="localePath('/tools')"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Icon name="ph:wrench-bold" class="h-4 w-4" />
              Tools
            </NuxtLink>
            <NuxtLink
              :to="localePath('/#download')"
              class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
            >
              <Icon name="ph:download-simple-bold" class="h-4 w-4" />
              YOUB
            </NuxtLink>
          </div>
        </div>

        <aside class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505]/70 p-6 shadow-2xl backdrop-blur-3xl md:p-8">
          <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div class="mb-8 flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <Icon :name="page.icon" class="h-6 w-6 text-white/85" />
            </div>
            <div>
              <h2 class="text-2xl font-bold tracking-tight text-white">
                {{ copy.toolTitle }}
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-white/46">
                {{ copy.toolDescription }}
              </p>
            </div>
          </div>
          <component :is="calculatorComponent" />
        </aside>
      </div>
    </section>

    <section class="px-4 py-16 md:py-22">
      <div class="mx-auto max-w-7xl">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
          {{ copy.quickFactsTitle }}
        </p>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article
            v-for="fact in copy.quickFacts"
            :key="fact"
            class="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6"
          >
            <Icon name="ph:check-circle-bold" class="h-5 w-5 text-white/80" />
            <p class="mt-4 text-sm leading-relaxed text-white/66">
              {{ fact }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 pb-16 md:pb-24">
      <div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        <article
          v-for="section in copy.sections"
          :key="section.title"
          class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <h2 class="text-2xl font-bold tracking-tight text-white">
            {{ section.title }}
          </h2>
          <p class="mt-5 text-sm leading-relaxed text-white/62">
            {{ section.text }}
          </p>
          <ul v-if="section.bullets?.length" class="mt-6 space-y-3">
            <li
              v-for="bullet in section.bullets"
              :key="bullet"
              class="flex gap-3 text-sm leading-relaxed text-white/62"
            >
              <Icon name="ph:check-bold" class="mt-0.5 h-4 w-4 shrink-0 text-white/75" />
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="border-y border-white/10 bg-white/[0.03] px-4 py-16 md:py-24">
      <div class="mx-auto max-w-5xl">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
          FAQ
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tighter md:text-5xl">
          {{ copy.eyebrow }}
        </h2>
        <div class="mt-10 grid gap-4">
          <article
            v-for="faq in copy.faqs"
            :key="faq.question"
            class="rounded-3xl border border-white/10 bg-black/35 p-6"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ faq.question }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-white/60">
              {{ faq.answer }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold tracking-tighter text-white md:text-5xl">
          {{ copy.relatedTitle }}
        </h2>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            v-for="link in copy.relatedLinks"
            :key="`${link.href}-${link.label}`"
            :to="localePath(link.href)"
            class="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/72 transition hover:bg-white/10 hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <CommonCTASection />
  </main>
</template>
