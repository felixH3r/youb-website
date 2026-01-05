<template>
  <section class="py-24 px-4 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("howItWorks.principle.title") }}
        </h2>
        <p
          class="text-xl md:text-2xl text-white/50 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          {{ $t("howItWorks.principle.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div
          class="text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
        >
          <div class="text-4xl md:text-5xl font-bold text-white/10 mb-4">
            01
          </div>
          <p class="text-lg md:text-xl text-white font-medium">
            {{ $t("howItWorks.principle.step1") }}
          </p>
        </div>
        <div
          class="text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-450"
        >
          <div class="text-4xl md:text-5xl font-bold text-white/10 mb-4">
            02
          </div>
          <p class="text-lg md:text-xl text-white font-medium">
            {{ $t("howItWorks.principle.step2") }}
          </p>
        </div>
        <div
          class="text-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600"
        >
          <div class="text-4xl md:text-5xl font-bold text-white/10 mb-4">
            03
          </div>
          <p class="text-lg md:text-xl text-white font-medium">
            {{ $t("howItWorks.principle.step3") }}
          </p>
        </div>
      </div>
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
.delay-450 {
  animation-delay: 450ms;
}
.delay-600 {
  animation-delay: 600ms;
}
</style>
