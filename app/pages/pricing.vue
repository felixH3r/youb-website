<script setup lang="ts">
const { t, tm, rt } = useI18n();
const { appDownloadUrl } = useAppLinks();
const selectedBilling = ref<"yearly" | "monthly">("yearly");

useHead({
  title: () => t("pricing.seoTitle"),
});

useSeoMeta({
  ogTitle: () => t("pricing.seoTitle"),
  description: () => t("pricing.seoDescription"),
  ogDescription: () => t("pricing.seoDescription"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("pricing.seoTitle"),
  twitterDescription: () => t("pricing.seoDescription"),
});

const billingOptions = ["yearly", "monthly"] as const;

const selectedPlan = computed(() => ({
  key: selectedBilling.value,
  icon:
    selectedBilling.value === "yearly"
      ? "ph:calendar-check-bold"
      : "ph:calendar-blank-bold",
}));

const proofPoints = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const points = tm("pricing.proofPoints") as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Array.isArray(points) ? points.map((p: any) => rt(p)) : [];
});

const includedItems = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = tm("pricing.includedItems") as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Array.isArray(items) ? items.map((i: any) => rt(i)) : [];
});

const scrollY = ref(0);
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <main class="pricing-page min-h-screen bg-black text-white selection:bg-white selection:text-black">
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex flex-col items-center justify-center px-4 pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <!-- Background Image with Parallax -->
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        :style="{
          backgroundImage: `url('/HeroNew.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: 0.35
        }"
      />

      <!-- Gradient Overlays -->
      <div class="absolute inset-0 z-[1] bg-linear-to-b from-black/20 via-black/60 to-black pointer-events-none" />
      <div class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

      <div class="relative z-10 mx-auto max-w-6xl w-full text-center px-4">
        <!-- Badge -->
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Icon name="ph:sparkle-bold" class="h-4 w-4 text-white/80" />
          {{ $t("pricing.badge") }}
        </div>

        <h1 class="text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          {{ $t("pricing.title") }}
        </h1>

        <p class="mx-auto max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/60 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          {{ $t("pricing.subtitle") }}
        </p>

        <!-- Proof Points -->
        <div class="mx-auto max-w-3xl flex flex-wrap justify-center gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div
            v-for="point in proofPoints"
            :key="point"
            class="flex items-center gap-2.5 text-sm md:text-base font-medium text-white/50"
          >
            <Icon name="ph:check-circle-fill" class="h-5 w-5 text-white/20" />
            <span>{{ point }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="relative z-10 px-4 pb-24 md:pb-40 -mt-12">
      <div class="mx-auto max-w-5xl">
        <!-- Billing Toggle -->
        <div class="flex flex-col items-center gap-4 mb-16">
          <div class="relative p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl w-full max-w-[280px]">
            <!-- Active Indicator -->
            <div
              class="absolute inset-y-1 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              :style="{
                left: selectedBilling === 'yearly' ? '4px' : 'calc(50% + 2px)',
                width: 'calc(50% - 6px)'
              }"
            />
            <div class="relative flex z-10">
              <button
                v-for="option in billingOptions"
                :key="option"
                type="button"
                class="flex-1 min-h-11 flex items-center justify-center text-sm font-bold tracking-tight transition-colors duration-500"
                :class="selectedBilling === option ? 'text-black' : 'text-white/30 hover:text-white/60'"
                @click="selectedBilling = option"
              >
                {{ $t(`pricing.plans.${option}.title`) }}
              </button>
            </div>
          </div>
          <!-- Subtitle for Toggle -->
          <div class="h-6 flex items-center">
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <span 
                v-if="selectedBilling === 'yearly'"
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
              >
                {{ $t("pricing.plans.yearly.label") }}
              </span>
            </Transition>
          </div>
        </div>

        <!-- Main Plan Card - REVERTED TO "COOL" TWO-COLUMN LAYOUT -->
        <div class="group relative">
          <!-- Subtle Glow Effect -->
          <div class="absolute -inset-1 bg-linear-to-b from-white/10 to-transparent rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000" />

          <article class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505]/60 backdrop-blur-3xl shadow-2xl">
            <!-- Top Shine -->
            <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
            
            <div class="grid md:grid-cols-[1.1fr_0.9fr] gap-0">
              <!-- Left Side: Pricing Info -->
              <div class="p-8 md:p-14 lg:p-16 border-b md:border-b-0 md:border-r border-white/5">
                <div class="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white backdrop-blur-xl">
                  <Icon :name="selectedPlan.icon" class="h-7 w-7 text-white/80" />
                </div>

                <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20 mb-6">
                  {{ $t("pricing.trialNote") }}
                </p>

                <div class="flex items-baseline gap-3 mb-8">
                  <span class="text-7xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                    {{ $t(`pricing.plans.${selectedPlan.key}.price`) }}
                  </span>
                  <span class="text-lg font-medium text-white/30">
                    / {{ $t("pricing.perMonth") }}
                  </span>
                </div>

                <h2 class="text-3xl font-bold tracking-tight text-white mb-6">
                  {{ $t(`pricing.plans.${selectedPlan.key}.title`) }}
                </h2>

                <p class="text-lg leading-relaxed text-white/40 mb-12 max-w-sm font-light">
                  {{ $t(`pricing.plans.${selectedPlan.key}.description`) }}
                </p>

                <div class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/20 mb-12">
                  <Icon name="ph:info-bold" class="h-3.5 w-3.5" />
                  {{ $t(`pricing.plans.${selectedPlan.key}.billing`) }}
                </div>

                <a
                  :href="appDownloadUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] shadow-xl shadow-white/5"
                >
                  {{ $t("pricing.planCta") }}
                  <Icon name="ph:arrow-right-bold" class="h-5 w-5" />
                </a>
              </div>

              <!-- Right Side: Included Features -->
              <div class="p-8 md:p-14 lg:p-16 bg-white/[0.01]">
                <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20 mb-10">
                  {{ $t("pricing.includedEyebrow") }}
                </p>

                <ul class="space-y-8 mb-16">
                  <li
                    v-for="item in includedItems"
                    :key="item"
                    class="flex items-start gap-5 text-base md:text-lg leading-snug text-white/50"
                  >
                    <div class="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-white/5 border border-white/5 flex-shrink-0">
                      <Icon name="ph:check-bold" class="h-3.5 w-3.5 text-white/40" />
                    </div>
                    <span class="font-light tracking-tight">{{ item }}</span>
                  </li>
                </ul>

                <div class="pt-10 border-t border-white/5">
                  <h3 class="text-xl font-bold text-white/80 mb-4 tracking-tight">
                    {{ $t("pricing.fairTitle") }}
                  </h3>
                  <p class="text-sm md:text-base leading-relaxed text-white/30 font-light">
                    {{ $t("pricing.fairText") }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CommonCTASection />
  </main>
</template>

<style scoped>
.pricing-page {
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

/* Custom ease for the toggle slider */
.cubic-bezier\(0\.34\,\ 1\.56\,\ 0\.64\,\ 1\) {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Ensure backdrop blur works on safari */
.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
