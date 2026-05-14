<script setup lang="ts">
import ToolCard from "~/components/tools/ToolCard.vue";

const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: () => t("tools.seoTitle"),
});

useSeoMeta({
  ogTitle: () => t("tools.seoTitle"),
  description: () => t("tools.seoDescription"),
  ogDescription: () => t("tools.seoDescription"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("tools.seoTitle"),
  twitterDescription: () => t("tools.seoDescription"),
});

const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <main class="tools-page min-h-screen bg-black text-white selection:bg-white selection:text-black">
    <section class="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-44">
      <div
        class="pointer-events-none absolute inset-0 z-0"
        :style="{
          backgroundImage: `url('/HeroNew.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: 0.25,
        }"
      />

      <div class="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-black/20 via-black/60 to-black" />
      <div class="absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div class="relative z-10 mx-auto w-full max-w-6xl px-4 text-center">
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 md:text-xs">
          <Icon name="ph:wrench-bold" class="h-4 w-4 text-white/80" />
          FREE TOOLS
        </div>

        <h1 class="mb-8 text-4xl font-bold leading-[0.9] tracking-tighter text-white animate-in fade-in slide-in-from-bottom-8 delay-150 duration-1000 md:text-7xl lg:text-8xl">
          {{ t("tools.title") }}
        </h1>

        <p class="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/60 animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 md:text-xl">
          {{ t("tools.subtitle") }}
        </p>
      </div>
    </section>

    <section class="relative z-10 -mt-10 px-4 pb-32">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <ToolCard
            :title="t('tools.pace.title')"
            :description="t('tools.pace.description')"
            icon="ph:timer-bold"
            :detail-to="localePath('/tools/pace-converter')"
            :detail-label="t('tools.openToolPage')"
            class="animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000"
          />

          <ToolCard
            :title="t('tools.chainLength.title')"
            :description="t('tools.chainLength.description')"
            icon="ph:link-bold"
            :detail-to="localePath('/tools/chain-length-calculator')"
            :detail-label="t('tools.openToolPage')"
            class="animate-in fade-in slide-in-from-bottom-12 delay-600 duration-1000"
          />

          <ToolCard
            :title="t('tools.gearRatio.title')"
            :description="t('tools.gearRatio.description')"
            icon="ph:bicycle-bold"
            :detail-to="localePath('/tools/gear-ratio-calculator')"
            :detail-label="t('tools.openToolPage')"
            class="animate-in fade-in slide-in-from-bottom-12 delay-700 duration-1000"
          />
        </div>

        <div class="mt-20 text-center animate-in fade-in delay-1000 duration-1000">
          <p class="text-sm font-medium uppercase tracking-widest text-white/20">
            {{ t("tools.moreComing") }}
          </p>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 bg-white/[0.03] px-4 py-16 md:py-24">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
            {{ t("tools.geoEyebrow") }}
          </p>
          <h2 class="mt-4 text-3xl font-bold tracking-tighter text-white md:text-5xl">
            {{ t("tools.geoTitle") }}
          </h2>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <article class="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <h3 class="text-xl font-bold tracking-tight text-white">
              {{ t("tools.geoSections.training.title") }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-white/60">
              {{ t("tools.geoSections.training.text") }}
            </p>
          </article>
          <article class="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <h3 class="text-xl font-bold tracking-tight text-white">
              {{ t("tools.geoSections.setup.title") }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-white/60">
              {{ t("tools.geoSections.setup.text") }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative z-10 overflow-hidden border-y border-white/5 bg-white/[0.02] px-4 py-32">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
          {{ t("tools.cta") }}
        </h2>
        <p class="mb-12 text-lg font-light text-white/40">
          {{ t("tools.ctaSub") }}
        </p>
        <div class="flex flex-col items-center justify-center gap-6 md:flex-row">
          <NuxtLink
            :to="localePath('/pricing')"
            class="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-white px-10 font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {{ t("nav.getStarted") }}
            <Icon name="ph:arrow-right-bold" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>

      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
    </section>

    <CommonCTASection />
  </main>
</template>

<style scoped>
.tools-page {
  background-image:
    radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.05), transparent 40rem);
}

.animate-in {
  animation-fill-mode: both;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom {
  from { transform: translateY(var(--tw-enter-translate-y, 2rem)); }
  to { transform: translateY(0); }
}

.fade-in { animation-name: fade-in; }
.slide-in-from-bottom-4 { --tw-enter-translate-y: 1rem; animation-name: fade-in, slide-in-from-bottom; }
.slide-in-from-bottom-8 { --tw-enter-translate-y: 2rem; animation-name: fade-in, slide-in-from-bottom; }
.slide-in-from-bottom-10 { --tw-enter-translate-y: 2.5rem; animation-name: fade-in, slide-in-from-bottom; }
.slide-in-from-bottom-12 { --tw-enter-translate-y: 3rem; animation-name: fade-in, slide-in-from-bottom; }

.delay-150 { animation-delay: 150ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-1000 { animation-delay: 1000ms; }

.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
