<script setup lang="ts">
import type { GeoLink, GeoPage } from "~/data/geoPages";
import {
  breadcrumbListSchema,
  faqPageSchema,
  softwareApplicationSchema,
} from "~/utils/geoSchema";

const props = defineProps<{
  page: GeoPage;
}>();

const { locale } = useI18n();
const localePath = useLocalePath();

const canonicalUrl = computed(() => `https://youb.app/${props.page.slug}`);
const pageTitle = computed(() =>
  locale.value === "de" ? props.page.titleDe ?? props.page.title : props.page.title,
);
const pageEyebrow = computed(() =>
  locale.value === "de" ? props.page.eyebrowDe ?? props.page.eyebrow : props.page.eyebrow,
);
const pageHeading = computed(() =>
  locale.value === "de" ? props.page.h1De ?? props.page.h1 : props.page.h1,
);

const germanLinkLabels: Record<string, string> = {
  "/triathlon-coach": "Triathlon-Coach",
  "/running-coach": "Laufcoach",
  "/cycling-coach": "Radsport-Coach",
  "/faq": "Häufige Fragen",
  "/privacy-policy": "Datenschutz",
  "/mission": "Mission",
  "/google-calendar-training": "Training mit Google Kalender",
  "/whoop-training-coach": "WHOOP-Trainingscoach",
  "/garmin-ai-coach": "Garmin-KI-Coach",
  "/ironman-training-app": "Ironman-Trainingsapp",
  "/strava-ai-coach": "Strava-KI-Coach",
  "/join-cycling-alternative": "Alternative zu Join Cycling",
  "/tridot-alternative": "Alternative zu TriDot",
};

const linkLabel = (link: GeoLink) =>
  locale.value === "de" ? germanLinkLabels[link.href] ?? link.label : link.label;

useHead(() => ({
  title: pageTitle.value,
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(softwareApplicationSchema()),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        breadcrumbListSchema([
          { name: "Home", item: "https://youb.app/" },
          { name: pageHeading.value, item: canonicalUrl.value },
        ]),
      ),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqPageSchema(props.page.faqs)),
    },
  ],
}));

useSeoMeta({
  title: () => pageTitle.value,
  description: () => props.page.description,
  ogTitle: () => pageTitle.value,
  ogDescription: () => props.page.description,
  ogUrl: () => canonicalUrl.value,
  twitterCard: "summary_large_image",
  twitterTitle: () => pageTitle.value,
  twitterDescription: () => props.page.description,
});
</script>

<template>
  <main class="min-h-screen bg-black text-white">
    <section class="relative isolate overflow-hidden px-4 pb-20 pt-36 md:pb-28 md:pt-44">
      <div class="absolute inset-0 -z-20">
        <img
          src="/HeroNew.png"
          alt=""
          class="h-full w-full object-cover opacity-35"
        >
        <div class="absolute inset-0 bg-linear-to-b from-black/20 via-black/80 to-black" />
      </div>

      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            {{ pageEyebrow }}
          </p>
          <h1 class="max-w-4xl text-4xl font-bold leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl">
            {{ pageHeading }}
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-white/68 md:text-xl">
            {{ page.intro }}
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLink
              :to="localePath('/#download')"
              class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
            >
              <Icon name="ph:download-simple-bold" class="h-4 w-4" />
              App herunterladen
            </NuxtLink>
            <NuxtLink
              :to="localePath('/faq')"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Icon name="ph:question-bold" class="h-4 w-4" />
              Fragen klären
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-2xl md:p-8">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/38">
            YOUB Prinzip
          </p>
          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <Icon name="ph:chat-circle-dots-bold" class="mt-1 h-5 w-5 shrink-0 text-white" />
              <p class="text-sm leading-relaxed text-white/68">
                Coaching als Dialog: YOUB fragt, erklärt und passt an, statt dich mit Dashboards allein zu lassen.
              </p>
            </div>
            <div class="flex gap-4">
              <Icon name="ph:heartbeat-bold" class="mt-1 h-5 w-5 shrink-0 text-white" />
              <p class="text-sm leading-relaxed text-white/68">
                Wearable-, Trainings-, Recovery- und Schlafdaten werden im sportwissenschaftlichen Kontext bewertet.
              </p>
            </div>
            <div class="flex gap-4">
              <Icon name="ph:calendar-check-bold" class="mt-1 h-5 w-5 shrink-0 text-white" />
              <p class="text-sm leading-relaxed text-white/68">
                Google Calendar hilft, Training an Arbeit, Familie, Termine und echte Verfügbarkeit anzupassen.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        <article
          v-for="section in page.sections"
          :key="section.title"
          class="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:p-8"
        >
          <h2 class="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {{ section.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-white/62">
            {{ section.text }}
          </p>
          <ul v-if="section.bullets?.length" class="mt-6 space-y-3">
            <li
              v-for="bullet in section.bullets"
              :key="bullet"
              class="flex gap-3 text-sm leading-relaxed text-white/62"
            >
              <Icon name="ph:check-circle-bold" class="mt-0.5 h-4 w-4 shrink-0 text-white/80" />
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
          Häufige Fragen zu {{ pageEyebrow }}
        </h2>
        <div class="mt-10 grid gap-4">
          <article
            v-for="faq in page.faqs"
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
          Weiterführende YOUB Seiten
        </h2>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            v-for="link in page.links"
            :key="`${link.href}-${link.label}`"
            :to="localePath(link.href)"
            class="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/72 transition hover:bg-white/10 hover:text-white"
          >
            {{ linkLabel(link) }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <CommonCTASection />
  </main>
</template>
