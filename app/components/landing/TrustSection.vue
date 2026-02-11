<template>
  <section
    class="py-24 md:py-32 bg-black overflow-hidden selection:bg-white selection:text-black"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
        <!-- Text Content -->
        <div class="mb-16 lg:mb-0">
          <h2
            class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out"
          >
            <span class="block mb-2">{{ $t("trust.titlePrefix") }}</span>
            <span class="block">{{ $t("trust.titleHighlight") }}</span>
          </h2>
          <p
            class="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-out"
          >
            {{ $t("trust.text") }}
          </p>
        </div>

        <!-- Badges Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <!-- Science & Evidence -->
          <div
            class="group flex flex-col items-center justify-center p-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500"
          >
            <div
              class="mb-8 group-hover:scale-110 transform transition-transform duration-500"
            >
              <img
                src="/ScienceMedicalLogo.png"
                alt="Science & Medical Logo"
                class="h-16 w-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              >
            </div>
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/70 font-bold leading-tight whitespace-pre-line"
            >
              {{ $t("trust.badges.hycys") }}
            </span>
          </div>

          <!-- GDPR -->
          <div
            class="group flex flex-col items-center justify-center p-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700"
          >
            <div
              class="mb-8 group-hover:scale-110 transform transition-transform duration-500"
            >
              <img
                :src="gdprBadgeSrc"
                alt="GDPR/DSGVO Logo"
                class="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              >
            </div>
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/70 font-bold leading-tight whitespace-pre-line"
            >
              {{ $t("trust.badges.gdpr") }}
            </span>
          </div>

          <!-- AI Act -->
          <div
            class="group flex flex-col items-center justify-center p-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-900"
          >
            <div
              class="mb-8 group-hover:scale-110 transform transition-transform duration-500"
            >
              <img
                src="/AIActReady.png"
                alt="AI Act Logo"
                class="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              >
            </div>
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/70 font-bold leading-tight whitespace-pre-line"
            >
              {{ $t("trust.badges.aiAct") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const gdprBadgeSrc = computed(() => {
  return locale.value === "de" ? "/DSGVOKonform.png" : "/GDPRCompliant.png";
});
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

.slide-in-from-bottom-10 {
  --tw-enter-translate-y: 2.5rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-300 {
  animation-delay: 300ms;
}
.delay-500 {
  animation-delay: 500ms;
}
.delay-700 {
  animation-delay: 700ms;
}
.delay-900 {
  animation-delay: 900ms;
}
</style>
