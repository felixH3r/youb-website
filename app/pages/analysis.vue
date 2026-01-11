<script setup lang="ts">
import FileUpload from "~/components/analysis/FileUpload.vue";
import AnalysisDashboard from "~/components/analysis/AnalysisDashboard.vue";
import ChatSection from "~/components/analysis/ChatSection.vue";

const { t } = useI18n();

const loading = ref(false);
const analysisData = ref<{ analysisId: string; summary: any } | null>(null);

const handleUpload = async (file: File) => {
  loading.value = true;
  const formData = new FormData();
  formData.append("file", file);

  try {
    const { data } = await useFetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    if (data.value) {
      analysisData.value = data.value as any;
    }
  } catch (e) {
    console.error("Upload failed:", e);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-black pt-32 pb-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          {{ t("analysis.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          {{ t("analysis.subtitle") }}
        </p>
      </div>

      <!-- Main Content -->
      <div class="space-y-12">
        <!-- Step 1: Upload -->
        <div v-if="!analysisData">
          <FileUpload :loading="loading" @upload="handleUpload" />
        </div>

        <!-- Step 2: Dashboard & Chat -->
        <template v-else>
          <!-- Summary Dashboard -->
          <Transition
            appear
            enter-active-class="transition duration-700 ease-out"
            enter-from-class="opacity-0 translate-y-8"
            enter-to-class="opacity-100 translate-y-0"
          >
            <AnalysisDashboard :summary="analysisData.summary" />
          </Transition>

          <!-- Chat Section -->
          <Transition
            appear
            enter-active-class="transition duration-1000 ease-out delay-300"
            enter-from-class="opacity-0 translate-y-8"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div class="max-w-4xl mx-auto w-full">
              <ChatSection :analysisId="analysisData.analysisId" />
            </div>
          </Transition>

          <!-- Reset Button -->
          <div class="flex justify-center">
            <button
              @click="analysisData = null"
              class="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon name="ph:arrow-counter-clockwise" />
              Neue Analyse starten
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}
</style>
