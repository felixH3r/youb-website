<script setup lang="ts">
import { onMounted, ref } from "vue";

const heroRef = ref<HTMLElement | null>(null);
const badgeRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const subRef = ref<HTMLElement | null>(null);
const actionsRef = ref<HTMLElement | null>(null);
const graphicRef = ref<HTMLElement | null>(null);

// Animation levels for parallax
const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-20 px-3 md:px-6 overflow-hidden bg-black selection:bg-white selection:text-black"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 z-0 pointer-events-none"
      :style="{
        backgroundImage: `url('/HeroNew.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.15}px)`,
      }"
    />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 z-[1] bg-linear-to-b from-black/10 via-black/50 to-black pointer-events-none"
    />

    <div
      class="relative pt-12 md:pt-24 z-10 max-w-7xl w-full flex flex-col items-center text-center"
    >
      <!-- Badge -->
      <!-- <div
        ref="badgeRef"
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-white/50 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <span class="text-xs font-medium tracking-wider uppercase text-black/60"
          >New Era of Monitoring</span
        >
      </div> -->

      <!-- Main Heading -->
      <h1
        ref="titleRef"
        class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9] text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 ease-out"
      >
        {{ $t("hero.titlePrefix") }} <br />
        <span class="text-white/40 italic">{{
          $t("hero.titleHighlight")
        }}</span>
      </h1>

      <!-- Sub-heading -->
      <p
        ref="subRef"
        class="text-lg md:text-xl text-white/60 max-w-2xl mb-12 text-balance animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-out"
      >
        {{ $t("hero.subtitle") }}
      </p>

      <!-- CTA Actions -->
      <div
        ref="actionsRef"
        class="flex items-center gap-4 mb-10 md:mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 ease-out"
      >
        <NuxtLink
          to="#waitlist"
          class="px-6 md:px-8 py-4 rounded-full bg-white text-black font-semibold text-sm md:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/10"
        >
          {{ $t("hero.ctaPrimary") }}
        </NuxtLink>
        <NuxtLink
          to="/mission"
          class="px-6 md:px-8 py-4 rounded-full bg-black text-white font-semibold text-sm md:text-lg border border-white/10 hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {{ $t("hero.ctaSecondary") }}
        </NuxtLink>
      </div>

      <!-- Hero Graphic -->
      <div
        ref="graphicRef"
        class="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/20 animate-in fade-in zoom-in-95 duration-1000 delay-700 ease-out"
      >
        <div
          class="absolute inset-0 bg-linear-to-tr from-black/[0.02] to-transparent pointer-events-none"
        />

        <!-- Mock UI Elements -->
        <div
          class="absolute inset-x-0 top-0 h-12 border-b border-white/10 flex items-center px-6 gap-2 bg-white/5 backdrop-blur-md z-20"
        >
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-white/20" />
            <div class="w-3 h-3 rounded-full bg-white/20" />
            <div class="w-3 h-3 rounded-full bg-white/20" />
          </div>
          <div class="flex-1 text-center">
            <span
              class="text-[10px] uppercase tracking-widest font-bold text-white/40"
              >YOUB Chat</span
            >
          </div>
          <div class="w-16 md:w-32 h-2 rounded-full bg-white/10" />
        </div>

        <div
          class="relative w-full pt-16 p-4 md:pt-20 md:p-8 flex flex-col gap-6 md:gap-8 pointer-events-none"
        >
          <!-- User Message 1 -->
          <div
            class="flex flex-col items-end gap-1.5 max-w-[80%] self-end animate-in fade-in slide-in-from-right-4 duration-500 delay-500 ease-out"
          >
            <div
              class="px-5 py-3 rounded-3xl rounded-tr-lg bg-white/10 backdrop-blur-md border border-white/5 text-xs text-left font-medium text-white shadow-lg shadow-black/20 overflow-hidden relative"
            >
              <div
                class="typing-text"
                style="--delay: 0.5s; --chars: 60; --duration: 1.2s"
              >
                {{ $t("chat.user1") }}
              </div>
            </div>
          </div>

          <!-- AI Message 1 -->
          <div
            class="flex flex-col items-start gap-1.5 max-w-[85%] animate-in fade-in slide-in-from-left-4 duration-500 delay-2000 ease-out"
          >
            <div class="flex gap-3 items-end">
              <div
                class="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white"
              >
                <span class="text-[9px] font-bold">YB</span>
              </div>
              <div
                class="px-5 py-3 rounded-3xl rounded-bl-lg bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs text-left font-medium leading-relaxed shadow-xl shadow-black/20 overflow-hidden relative"
              >
                <div
                  class="typing-text"
                  style="--delay: 2s; --chars: 90; --duration: 1.8s"
                >
                  <i18n-t keypath="chat.ai1" tag="span">
                    <template #boldStart>
                      <span class="font-bold" />
                    </template>
                  </i18n-t>
                </div>
              </div>
            </div>
          </div>

          <!-- User Message 2 -->
          <div
            class="flex flex-col items-end gap-1.5 max-w-[80%] self-end animate-in fade-in slide-in-from-right-4 duration-500 delay-3500 ease-out"
          >
            <div
              class="px-5 py-3 rounded-3xl rounded-tr-lg bg-white/10 backdrop-blur-md border border-white/5 text-xs text-left font-medium text-white shadow-lg shadow-black/20 overflow-hidden relative"
            >
              <div
                class="typing-text"
                style="--delay: 4.5s; --chars: 15; --duration: 0.5s"
              >
                {{ $t("chat.user2") }}
              </div>
            </div>
          </div>

          <!-- AI Message 2 -->
          <div
            class="flex flex-col items-start gap-1.5 max-w-[85%] animate-in fade-in slide-in-from-left-4 duration-500 delay-4700 ease-out"
          >
            <div class="flex gap-3 items-end">
              <div
                class="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white"
              >
                <span class="text-[9px] font-bold">YB</span>
              </div>
              <div
                class="px-5 py-3 rounded-3xl rounded-bl-lg bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs text-left leading-relaxed shadow-xl shadow-black/20 overflow-hidden relative"
              >
                <div
                  class="typing-text"
                  style="--delay: 5.5s; --chars: 60; --duration: 1.2s"
                >
                  <i18n-t keypath="chat.ai2" tag="span">
                    <template #boldStart>
                      <span class="font-bold" />
                    </template>
                  </i18n-t>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Input Skeleton -->
          <div
            class="mt-auto pt-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[7000ms] ease-out"
          >
            <div
              class="flex-1 h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4"
            >
              <div class="w-24 h-2 rounded-full bg-white/10" />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
            >
              <Icon name="ph:paper-plane-right-fill" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Decorative Elements -->
    <div
      v-for="i in 4"
      :key="i"
      class="absolute w-24 h-24 rounded-2xl bg-black/[0.02] border border-black/5 backdrop-blur-sm pointer-events-none hidden lg:block"
      :style="{
        top: `${15 + i * 15}%`,
        left: i % 2 === 0 ? '5%' : '85%',
        transform: `translateY(${scrollY * (0.05 + i * 0.05)}px) rotate(${
          scrollY * 0.1 + i * 45
        }deg)`,
        opacity: 0.3,
      }"
    />
  </section>
</template>

<style scoped>
/* Fallback for animate-in if tailwind-animate is not available */
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

@keyframes zoom-in {
  from {
    transform: scale(var(--tw-enter-scale, 0.95));
  }
  to {
    transform: scale(1);
  }
}

.fade-in {
  --tw-enter-opacity: 0;
  animation-name: fade-in;
}
@keyframes slide-in-from-right {
  from {
    transform: translateX(var(--tw-enter-translate-x, 2rem));
  }
  to {
    transform: translateX(0);
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

.slide-in-from-bottom-4 {
  --tw-enter-translate-y: 1rem;
  animation-name: fade-in, slide-in-from-bottom;
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
.slide-in-from-right-4 {
  --tw-enter-translate-x: 1rem;
  animation-name: fade-in, slide-in-from-right;
}
.slide-in-from-left-4 {
  --tw-enter-translate-x: -1rem;
  animation-name: fade-in, slide-in-from-left;
}
.zoom-in-95 {
  --tw-enter-scale: 0.95;
  animation-name: fade-in, zoom-in;
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
.delay-1000 {
  animation-delay: 1000ms;
}
.delay-1200 {
  animation-delay: 1200ms;
}
.delay-1300 {
  animation-delay: 1300ms;
}
.delay-1500 {
  animation-delay: 1500ms;
}
.delay-2000 {
  animation-delay: 2000ms;
}
.delay-2400 {
  animation-delay: 2400ms;
}
.delay-2800 {
  animation-delay: 2800ms;
}
.delay-3000 {
  animation-delay: 3000ms;
}
.delay-3500 {
  animation-delay: 3500ms;
}
.delay-4700 {
  animation-delay: 4700ms;
}

@keyframes reveal-text {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.typing-text {
  display: inline-block;
  white-space: normal;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  animation: reveal-text var(--duration, 1.5s) steps(var(--chars, 100)) forwards;
  animation-delay: var(--delay, 0s);
}

.animate-in {
  animation-duration: 700ms;
  animation-fill-mode: both;
}
</style>
