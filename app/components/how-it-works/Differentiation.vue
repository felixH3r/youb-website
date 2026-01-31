<template>
  <section
    class="relative flex flex-col items-center justify-center bg-black overflow-hidden h-[80vh]"
  >
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Centered Header & Subline -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("howItWorks.anti.title") }}
        </h2>
        <p
          class="text-xl md:text-2xl font-light text-white/50 max-w-3xl mx-auto text-balance animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          {{ $t("howItWorks.anti.closing") }}
        </p>
      </div>

      <!-- Desktop: Horizontal Row | Mobile: Vertical Stack -->
      <div
        class="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
      >
        <p class="text-xl xl:text-2xl font-light text-white/90">
          {{ $t("howItWorks.anti.item1") }}
        </p>

        <!-- Separator -->
        <div
          class="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <p class="text-xl xl:text-2xl font-light text-white/90">
          {{ $t("howItWorks.anti.item2") }}
        </p>

        <!-- Separator -->
        <div
          class="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <p class="text-xl xl:text-2xl font-light text-white/90">
          {{ $t("howItWorks.anti.item3") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed
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

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}
</style>
