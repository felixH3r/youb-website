<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: () => t("support.title"),
});

useSeoMeta({
  ogTitle: () => t("support.title"),
  description: () => t("support.subtitle"),
  ogDescription: () => t("support.subtitle"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("support.title"),
  twitterDescription: () => t("support.subtitle"),
});

const form = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const submitted = ref(false);
const error = ref("");

const handleSubmit = async () => {
  loading.value = true;
  error.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });
    submitted.value = true;
    form.value = { name: "", email: "", message: "" };
  } catch (err: unknown) {
    console.error("Submission Error:", err);
    const errorData = err as { data?: { statusMessage?: string } };
    error.value =
      errorData.data?.statusMessage ||
      "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div
    class="support-page bg-black min-h-screen pt-32 md:pt-42 pb-24 px-4 overflow-hidden relative"
  >
    <!-- Background Decor -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20"
    >
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]"
      />
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
      />
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16 md:mb-24">
        <h1
          class="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 animate-fade-in"
        >
          {{ t("support.title") }}
        </h1>
        <p
          class="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {{ t("support.subtitle") }}
        </p>

        <!-- FAQ Quick Link -->
        <div class="flex justify-center mb-12">
          <NuxtLink
            :to="$localePath('/faq')"
            class="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <Icon
              name="ph:question-duotone"
              class="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
            />
            <span class="text-white font-medium">{{
              t("support.quickActions.faq")
            }}</span>
            <Icon
              name="ph:arrow-right"
              class="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="max-w-2xl mx-auto">
        <div
          class="bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div
            v-if="submitted"
            class="text-center py-10 animate-in fade-in duration-500"
          >
            <div
              class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white"
            >
              <Icon name="ph:check-bold" class="w-10 h-10" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">
              {{ t("support.form.successTitle") }}
            </h3>
            <p class="text-white/60 leading-relaxed italic mb-8">
              {{ t("support.form.successMessage") }}
            </p>
            <button
              class="text-white/40 hover:text-white transition-colors text-sm font-medium cursor-pointer"
              @click="submitted = false"
            >
              {{ t("support.form.reset") }}
            </button>
          </div>

          <form v-else class="space-y-6" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <input
                v-model="form.name"
                type="text"
                :placeholder="t('support.form.name')"
                required
                class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300"
              />
            </div>
            <div class="space-y-2">
              <input
                v-model="form.email"
                type="email"
                :placeholder="t('support.form.email')"
                required
                class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300"
              />
            </div>
            <div class="space-y-2">
              <textarea
                v-model="form.message"
                :placeholder="t('support.form.message')"
                required
                rows="5"
                class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full group relative px-8 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:bg-white/90 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 overflow-hidden cursor-pointer"
            >
              <div class="relative z-10 flex items-center justify-center gap-2">
                <span v-if="!loading">{{ t("support.form.submit") }}</span>
                <span v-else class="flex items-center gap-2">
                  <Icon
                    name="ph:circle-notch-bold"
                    class="w-5 h-5 animate-spin"
                  />
                  {{ t("support.form.sending") }}
                </span>
                <Icon
                  v-if="!loading"
                  name="ph:paper-plane-tilt-bold"
                  class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </button>

            <p
              v-if="error"
              class="text-red-400 text-sm text-center animate-in fade-in duration-300"
            >
              {{ error }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.support-page {
  background-image:
    radial-gradient(
      circle at 50% 0%,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 0% 100%,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 40%
    );
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
