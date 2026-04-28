<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: () => "Contact - YOUB",
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
    error.value = errorData.data?.statusMessage || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="contact-page bg-black min-h-screen pt-32 md:pt-42 pb-24 px-4 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Contact
        </h1>
        <p class="text-white/40 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Have questions or want to get in touch? We're here to help you.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-12 items-start">
        <!-- Contact Info -->
        <div class="md:col-span-2 space-y-8">
          <div>
            <h3 class="text-white font-bold text-xl mb-4">Get in touch</h3>
            <div class="space-y-4">
              <a href="mailto:felix@youb.app" class="flex items-center gap-4 text-white/40 hover:text-white transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Icon name="ph:envelope-duotone" class="w-5 h-5" />
                </div>
                felix@youb.app
              </a>
              <div class="flex items-center gap-4 text-white/40">
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Icon name="ph:map-pin-duotone" class="w-5 h-5" />
                </div>
                1010 Vienna, Austria
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:col-span-3">
          <div class="bg-white/[0.02] border border-white/10 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div v-if="submitted" class="text-center py-10 animate-in fade-in duration-500">
              <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white">
                <Icon name="ph:check-bold" class="w-10 h-10" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">{{ t("support.form.successTitle") }}</h3>
              <p class="text-white/60 leading-relaxed italic mb-8">
                {{ t("support.form.successMessage") }}
              </p>
              <button 
                class="text-white/40 hover:text-white transition-colors text-sm font-medium"
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
                >
              </div>
              <div class="space-y-2">
                <input 
                  v-model="form.email"
                  type="email" 
                  :placeholder="t('support.form.email')"
                  required
                  class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300"
                >
              </div>
              <div class="space-y-2">
                <textarea 
                  v-model="form.message"
                  :placeholder="t('support.form.message')"
                  required
                  rows="4"
                  class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                />
              </div>

              <button 
                type="submit"
                :disabled="loading"
                class="w-full group relative px-8 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:bg-white/90 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 overflow-hidden"
              >
                <div class="relative z-10 flex items-center justify-center gap-2">
                  <span v-if="!loading">{{ t("support.form.submit") }}</span>
                  <span v-else class="flex items-center gap-2">
                    <Icon name="ph:circle-notch-bold" class="w-5 h-5 animate-spin" />
                    {{ t("support.form.sending") }}
                  </span>
                  <Icon v-if="!loading" name="ph:paper-plane-tilt-bold" class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </button>

              <p v-if="error" class="text-red-400 text-sm text-center animate-in fade-in duration-300">
                {{ error }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.02) 0%, transparent 40%);
}

.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
