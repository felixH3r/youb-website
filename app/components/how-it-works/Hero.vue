<script setup lang="ts">
import { onMounted, ref } from "vue";

const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <section
    class="relative min-h-[70vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-3 md:px-6 overflow-hidden bg-black selection:bg-white selection:text-black"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 pointer-events-none"
      :style="{
        backgroundImage: `url('/HeroNew.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.15}px)`,
        opacity: 0.4,
      }"
    />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-[1] bg-linear-to-b from-black/20 via-black/0 to-black pointer-events-none"
    />

    <div
      class="relative z-10 max-w-7xl w-full flex flex-col items-center text-center"
    >
      <!-- Main Heading -->
      <h1
        class="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out"
      >
        {{ $t("howItWorks.hero.title") }}
      </h1>

      <!-- Sub-heading -->
      <p
        class="text-xl md:text-2xl text-white/70 max-w-3xl mb-6 text-balance animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 ease-out whitespace-pre-line"
      >
        {{ $t("howItWorks.hero.subtitle") }}
      </p>

      <!-- Optional Micro-Line -->
      <p
        class="text-sm md:text-base text-white/40 italic animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 ease-out"
      >
        {{ $t("howItWorks.hero.micro") }}
      </p>
    </div>
  </section>
</template>

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

.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}
</style>
