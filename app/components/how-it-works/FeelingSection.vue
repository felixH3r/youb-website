<script setup lang="ts">
import MockChat from "../common/MockChat.vue";
const { t } = useI18n();

const chatMessages = computed(() => [
  { text: t("howItWorks.feeling.chat.msg1"), sender: "ai" as const },
  { text: t("howItWorks.feeling.chat.msg2"), sender: "user" as const },
  { text: t("howItWorks.feeling.chat.msg3"), sender: "ai" as const },
]);
</script>

<template>
  <section class="relative py-24 px-4 overflow-hidden bg-black">
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <!-- Content Column -->
        <div
          class="flex flex-col gap-6 animate-in fade-in slide-in-from-left-8 duration-1000"
        >
          <div
            class="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit"
          >
            <span
              class="text-[10px] uppercase tracking-widest font-bold text-white/80"
              >{{ $t("howItWorks.feeling.tag") }}</span
            >
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {{ $t("howItWorks.feeling.title") }}
          </h2>
          <div class="flex flex-col gap-6">
            <p
              class="text-lg md:text-xl text-white/80 leading-relaxed font-light whitespace-pre-line"
            >
              {{ $t("howItWorks.feeling.text1") }}
            </p>
            <p
              class="text-lg md:text-xl text-white/80 leading-relaxed font-light whitespace-pre-line"
            >
              {{ $t("howItWorks.feeling.text2") }}
            </p>
          </div>
        </div>

        <!-- Chat Column -->
        <div
          class="relative group animate-in fade-in slide-in-from-right-8 duration-1000 delay-200"
        >
          <div
            class="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl group-hover:bg-white/10 transition-colors duration-700"
          />
          <MockChat :messages="chatMessages" />
          <!-- Decorative Element -->
          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"
          />
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

@keyframes slide-in-from-left {
  from {
    transform: translateX(-2rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-in-from-right {
  from {
    transform: translateX(2rem);
  }
  to {
    transform: translateX(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-left-8 {
  animation-name: fade-in, slide-in-from-left;
}

.slide-in-from-right-8 {
  animation-name: fade-in, slide-in-from-right;
}

.delay-200 {
  animation-delay: 200ms;
}
.delay-700 {
  animation-delay: 700ms;
}
</style>
