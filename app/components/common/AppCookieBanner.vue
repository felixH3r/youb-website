<script setup lang="ts">
const { isConsentDefined, acceptAll, declineAll } = useCookieConsent();

const show = ref(true);

onMounted(() => {
  if (!isConsentDefined.value) {
    show.value = true;
  }
});

const handleAccept = () => {
  show.value = false;
  acceptAll();
};

const handleDecline = () => {
  show.value = false;
  declineAll();
};
</script>

<template>
  <Transition
    enter-active-class="transform transition duration-700 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transform transition duration-500 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="show"
      class="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:right-8 md:bottom-8 md:max-w-md"
    >
      <div
        class="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-xl md:p-8"
      >
        <!-- Decorative Glow -->
        <div
          class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-3xl"
        />

        <div class="relative z-10">
          <h3
            class="font-sans text-xl font-semibold tracking-tight text-white mb-3"
          >
            {{ $t("cookie_banner.title") }}
          </h3>
          <p class="font-sans text-sm leading-relaxed text-white/70 mb-8">
            {{ $t("cookie_banner.description") }}
          </p>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              class="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              @click="handleAccept"
            >
              <span class="relative z-10">{{
                $t("cookie_banner.accept")
              }}</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-0 transition-opacity group-hover:opacity-100"
              />
            </button>

            <button
              class="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-[0.98]"
              @click="handleDecline"
            >
              {{ $t("cookie_banner.decline") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
</style>
