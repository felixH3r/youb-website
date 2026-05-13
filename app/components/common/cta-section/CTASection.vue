<template>
  <section
    id="download"
    class="relative w-full py-24 md:py-32 px-4 overflow-hidden min-h-[800px] flex items-center"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="/LoneCyclistMountain.png"
        alt="Cyclist in mountains"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/20 to-transparent"
      />
      <div
        class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/20 to-transparent"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-center">
        <!-- Text Content -->
        <div
          class="text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <h2
            class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.08] text-balance"
          >
            {{ $t("download.titlePrefix") }} <br class="hidden md:block" >
            <span class="text-white/40 italic">{{ $t("download.titleHighlight") }}</span>
          </h2>
          <p
            class="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
          >
            {{ $t("download.subtitle") }}
          </p>
        </div>

        <!-- Onboarding Steps -->
        <div
          class="w-full max-w-2xl mx-auto lg:ml-auto lg:mr-0 p-4 md:p-8 rounded-[2.5rem] border border-white/10 bg-black/25 backdrop-blur-3xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 shadow-2xl overflow-hidden"
        >
          <ol class="space-y-3 md:space-y-4">
            <li
              v-for="(step, index) in stepKeys"
              :key="step"
              class="grid grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr] gap-3 md:gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-6 text-left transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <span class="pt-0.5 text-2xl md:text-3xl font-light text-white/20 tabular-nums">
                {{ index + 1 }}
              </span>
              <div>
                <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white">
                  {{ $t(`download.steps.${step}.title`) }}
                </h3>
                <p
                  v-if="$te(`download.steps.${step}.text`)"
                  class="mt-2 max-w-lg text-sm md:text-base leading-relaxed text-white/50 font-light"
                >
                  {{ $t(`download.steps.${step}.text`) }}
                </p>
                <div v-if="step === 'download'" class="mt-6 grid gap-4 sm:grid-cols-2">
                  <a
                    :href="iosAppUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Icon name="ph:apple-logo-fill" class="h-6 w-6" />
                    <span class="text-lg font-semibold leading-none">
                      {{ $t("download.ios.label") }}
                    </span>
                  </a>

                  <a
                    :href="androidAppUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Icon name="ph:android-logo-fill" class="h-6 w-6" />
                    <span class="text-lg font-semibold leading-none">
                      {{ $t("download.android.label") }}
                    </span>
                  </a>
                </div>
                <span
                  v-if="step === 'questions'"
                  class="mt-4 block text-sm leading-relaxed text-white/35 font-light italic"
                >
                  {{ $t("download.steps.questions.examples") }}
                </span>
              </div>
            </li>
          </ol>

          <p
            class="mt-8 text-center text-sm text-white/40 leading-relaxed max-w-[420px] mx-auto font-light"
          >
            {{ $t("download.microcopy") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { androidAppUrl, iosAppUrl } = useAppLinks();

const stepKeys = ["download", "connect", "questions", "plan"];
</script>

<style scoped>
.animate-in {
  animation-fill-mode: both;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(var(--tw-enter-translate-y, 2rem));
  }
  to {
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-300 {
  animation-delay: 300ms;
}

/* Ensure backdrop blur works on safari */
.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
