<template>
  <section class="relative w-full py-24 px-4 bg-black overflow-hidden">
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div
        class="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000"
      >
        <h2 class="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          {{ $t("targetGroup.title") }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-12">
        <!-- For You Column -->
        <div
          class="group relative p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-700 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300"
        >
          <div class="mb-8 flex items-center gap-4">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white"
            >
              <Icon name="ph:check-circle-light" class="w-7 h-7" />
            </div>
            <div>
              <span
                class="text-xs font-medium tracking-widest uppercase text-white/40 mb-1 block"
                >{{ $t("targetGroup.forYou.title") }}</span
              >
              <h3 class="text-2xl font-semibold text-white leading-tight">
                {{ $t("targetGroup.forYou.subtitle") }}
              </h3>
            </div>
          </div>

          <div class="space-y-6">
            <div
              v-for="i in 4"
              :key="i"
              class="flex items-center gap-4 group/item"
            >
              <div
                class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white/60 transition-colors duration-300"
              />
              <p
                class="text-lg text-white/50 leading-relaxed font-light group-hover/item:text-white/80 transition-colors duration-300"
              >
                {{ $t(`targetGroup.forYou.item${i}`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Not For You Column -->
        <div
          class="group relative p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-700 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500"
        >
          <div class="mb-8 flex items-center gap-4">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white"
            >
              <Icon name="ph:minus-circle-light" class="w-7 h-7" />
            </div>
            <div>
              <span
                class="text-xs font-medium tracking-widest uppercase text-white/40 mb-1 block"
                >{{ $t("targetGroup.notForYou.title") }}</span
              >
              <h3 class="text-2xl font-semibold text-white leading-tight">
                {{ $t("targetGroup.notForYou.subtitle") }}
              </h3>
            </div>
          </div>

          <div class="space-y-6">
            <div
              v-for="i in 3"
              :key="i"
              class="flex items-center gap-4 group/item"
            >
              <div
                class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white/60 transition-colors duration-300"
              />
              <p
                class="text-lg text-white/50 leading-relaxed font-light group-hover/item:text-white/80 transition-colors duration-300"
              >
                {{ $t(`targetGroup.notForYou.item${i}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Using standard Nuxt features
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

.delay-150 {
  animation-delay: 150ms;
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
</style>
