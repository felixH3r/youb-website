<template>
  <section class="py-24 px-4 bg-black overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("howItWorks.examples.title") }}
        </h2>
        <p
          class="text-lg text-white/50 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          {{ $t("howItWorks.examples.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Message 1 -->
        <div
          class="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
        >
          <div class="flex gap-3 items-end mb-4">
            <div
              class="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white"
            >
              <span class="text-[9px] font-bold">AI</span>
            </div>
            <div
              class="px-5 py-3 rounded-2xl rounded-bl-lg bg-white/10 border border-white/10 text-white text-sm"
            >
              {{ $t("howItWorks.examples.msg1") }}
            </div>
          </div>
        </div>

        <!-- Message 2 -->
        <div
          class="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-450"
        >
          <div class="flex gap-3 items-end mb-4">
            <div
              class="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white"
            >
              <span class="text-[9px] font-bold">AI</span>
            </div>
            <div
              class="px-5 py-3 rounded-2xl rounded-bl-lg bg-white/10 border border-white/10 text-white text-sm"
            >
              {{ $t("howItWorks.examples.msg2") }}
            </div>
          </div>
        </div>

        <!-- Message 3 -->
        <div
          class="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600"
        >
          <div class="flex gap-3 items-end mb-4">
            <div
              class="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white"
            >
              <span class="text-[9px] font-bold">AI</span>
            </div>
            <div
              class="px-5 py-3 rounded-2xl rounded-bl-lg bg-white/10 border border-white/10 text-white text-sm"
            >
              {{ $t("howItWorks.examples.msg3") }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-white/40 italic">
          👉 Genau das, was du früher selbst geschrieben hast.
        </p>
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
