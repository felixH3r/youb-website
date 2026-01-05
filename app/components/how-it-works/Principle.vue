<template>
  <section class="relative pt-24 px-4 bg-black overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -top-32 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[140px]"
      />
      <div
        class="absolute -bottom-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-white/[0.04] blur-[120px]"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("howItWorks.principle.title") }}
        </h2>
        <p
          class="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto text-balance animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          {{ $t("howItWorks.principle.subtitle") }}
        </p>
      </div>

      <div class="relative">
        <div
          class="hidden lg:block absolute left-10 right-10 top-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div
            v-for="(block, index) in blocks"
            :key="block.key"
            class="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 overflow-hidden hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-12 duration-1000"
            :style="{ animationDelay: `${300 + index * 150}ms` }"
          >
            <!-- Decorative Background Glow -->
            <div
              class="absolute -inset-2 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
            />
            <div
              class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            <div class="flex items-center justify-between mb-6">
              <div
                class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500"
              >
                <Icon :name="block.icon" class="w-6 h-6" />
              </div>
              <span
                class="text-[11px] font-semibold tracking-[0.35em] text-white/30"
                >{{ block.order }}</span
              >
            </div>

            <h3 class="text-xl font-semibold text-white mb-6 leading-tight">
              {{ $t(`howItWorks.principle.${block.key}.title`) }}
            </h3>

            <ul class="space-y-3">
              <li
                v-for="(item, i) in block.items"
                :key="i"
                class="flex items-center gap-3 text-white/80 text-sm md:text-base font-light leading-relaxed group-hover:text-white/75 transition-colors duration-300"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-white/25" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

const blocks = [
  {
    key: "block1",
    order: "01",
    icon: "ph:circle-dashed-light",
    items: [
      t("howItWorks.principle.block1.items[0]"),
      t("howItWorks.principle.block1.items[1]"),
      t("howItWorks.principle.block1.items[2]"),
    ],
  },
  {
    key: "block2",
    order: "02",
    icon: "ph:layout-light",
    items: [
      t("howItWorks.principle.block2.items[0]"),
      t("howItWorks.principle.block2.items[1]"),
      t("howItWorks.principle.block2.items[2]"),
    ],
  },
  {
    key: "block3",
    order: "03",
    icon: "ph:users-light",
    items: [
      t("howItWorks.principle.block3.items[0]"),
      t("howItWorks.principle.block3.items[1]"),
      t("howItWorks.principle.block3.items[2]"),
    ],
  },
  {
    key: "block4",
    order: "04",
    icon: "ph:chat-teardrop-dots-light",
    items: [
      t("howItWorks.principle.block4.items[0]"),
      t("howItWorks.principle.block4.items[1]"),
      t("howItWorks.principle.block4.items[2]"),
    ],
  },
];
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
</style>
