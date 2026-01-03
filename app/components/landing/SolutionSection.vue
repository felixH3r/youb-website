<script setup lang="ts">
import { ref, onMounted } from "vue";

const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <section
    class="relative py-24 px-4 overflow-hidden bg-black selection:bg-white selection:text-black"
  >
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="max-w-4xl mx-auto text-center mb-24">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("solution.title") }}
        </h2>
      </div>

      <!-- Content Blocks -->
      <div class="space-y-32 md:space-y-48">
        <!-- Block 1: Adaptivity (Image Left / Text Right) -->
        <div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            class="relative group animate-in fade-in slide-in-from-left-8 duration-1000"
          >
            <div
              class="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl group-hover:bg-white/10 transition-colors duration-700"
            />
            <div
              class="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/DataOfToday.png"
                alt="Data Profiling"
                class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <!-- Decorative Element -->
            <div
              class="absolute -top-6 -left-6 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse"
            />
          </div>

          <div
            class="flex flex-col gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
          >
            <div
              class="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit"
            >
              <span
                class="text-[10px] uppercase tracking-widest font-bold text-white/40"
                >{{ $t("solution.block1.tag") }}</span
              >
            </div>
            <h3
              class="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              {{ $t("solution.block1.title") }}
            </h3>
            <p
              class="text-lg md:text-xl text-white/50 leading-relaxed font-light"
            >
              {{ $t("solution.block1.text") }}
            </p>
          </div>
        </div>

        <!-- Block 2: Proactive Interaction (Text Left / Image Right - Chat Mock) -->
        <div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            class="flex flex-col gap-6 order-2 md:order-1 animate-in fade-in slide-in-from-left-8 duration-1000"
          >
            <div
              class="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit"
            >
              <span
                class="text-[10px] uppercase tracking-widest font-bold text-white/40"
                >{{ $t("solution.block2.tag") }}</span
              >
            </div>
            <h3
              class="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              {{ $t("solution.block2.title") }}
            </h3>
            <p
              class="text-lg md:text-xl text-white/50 leading-relaxed font-light"
            >
              {{ $t("solution.block2.text") }}
            </p>
          </div>

          <div
            class="relative group order-1 md:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
          >
            <div
              class="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl group-hover:bg-white/10 transition-colors duration-700"
            />
            <div
              class="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-2xl aspect-[4/3] flex flex-col p-6 md:p-8"
            >
              <!-- Mock Chat Interface -->
              <div class="space-y-4">
                <div class="flex flex-col items-start gap-1 max-w-[85%]">
                  <div
                    class="px-4 py-3 rounded-2xl rounded-bl-none bg-white/10 border border-white/10 text-xs md:text-sm text-white font-medium"
                  >
                    Hey! Dein Schlaf-Score ist heute niedrig (45). Ich habe dein
                    Schwellen-Training in eine lockere Erholungseinheit
                    umgewandelt. Gönn dir die Ruhe. 💤
                  </div>
                </div>
                <div class="flex flex-col items-end gap-1 max-w-[80%] self-end">
                  <div
                    class="px-4 py-3 rounded-2xl rounded-br-none bg-white text-black text-xs md:text-sm font-semibold"
                  >
                    Danke Coach, fühle mich tatsächlich etwas platt. 🙏
                  </div>
                </div>
                <div class="flex flex-col items-start gap-1 max-w-[85%]">
                  <div
                    class="px-4 py-3 rounded-2xl rounded-bl-none bg-white/10 border border-white/10 text-xs md:text-sm text-white font-medium"
                  >
                    Gerne! Morgen checken wir die HRV und schauen, ob wir wieder
                    angreifen. 🚀
                  </div>
                </div>
              </div>

              <!-- Chat Input Placeholder -->
              <div class="mt-auto pt-6 flex items-center gap-3">
                <div
                  class="flex-1 h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4"
                >
                  <div class="w-16 h-1.5 rounded-full bg-white/10" />
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                >
                  <Icon name="ph:paper-plane-right-fill" class="w-4 h-4" />
                </div>
              </div>
            </div>
            <!-- Decorative Element -->
            <div
              class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"
            />
          </div>
        </div>

        <!-- Block 3: Science (Image Left / Text Right) -->
        <div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            class="relative group animate-in fade-in slide-in-from-left-8 duration-1000"
          >
            <div
              class="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl group-hover:bg-white/10 transition-colors duration-700"
            />
            <div
              class="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/AIBrain.png"
                alt="Intelligence"
                class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          <div
            class="flex flex-col gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
          >
            <div
              class="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit"
            >
              <span
                class="text-[10px] uppercase tracking-widest font-bold text-white/40"
                >{{ $t("solution.block3.tag") }}</span
              >
            </div>
            <h3
              class="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              {{ $t("solution.block3.title") }}
            </h3>
            <p
              class="text-lg md:text-xl text-white/50 leading-relaxed font-light"
            >
              {{ $t("solution.block3.text") }}
            </p>
          </div>
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

@keyframes slide-in-from-left {
  from {
    transform: translateX(var(--tw-enter-translate-x, -2rem));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-in-from-right {
  from {
    transform: translateX(var(--tw-enter-translate-x, 2rem));
  }
  to {
    transform: translateX(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-left-8 {
  --tw-enter-translate-x: -2rem;
  animation-name: fade-in, slide-in-from-left;
}

.slide-in-from-right-8 {
  --tw-enter-translate-x: 2rem;
  animation-name: fade-in, slide-in-from-right;
}

.delay-200 {
  animation-delay: 200ms;
}
.delay-700 {
  animation-delay: 700ms;
}
</style>
