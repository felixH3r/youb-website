<script setup lang="ts">
const { t } = useI18n();
const emit = defineEmits(["upload"]);
const props = defineProps<{
  loading: boolean;
}>();

const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const handleFileSelect = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    emit("upload", files[0]);
  }
};

const handleDrop = (e: DragEvent) => {
  isDragging.value = false;
  const files = e.dataTransfer?.files;
  if (files && files.length > 0 && files[0]) {
    if (files[0].name.endsWith(".fit")) {
      emit("upload", files[0]);
    }
  }
};
</script>

<template>
  <div
    class="relative group cursor-pointer"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="handleDrop"
    @click="fileInput?.click()"
  >
    <div
      class="border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center transition-all duration-300"
      :class="[
        isDragging
          ? 'border-black bg-black/5 scale-[1.02]'
          : 'border-white/20 bg-white/5 hover:border-white/40',
      ]"
    >
      <div
        class="mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
      >
        <Icon
          name="ph:file-arrow-up-light"
          class="text-3xl"
          :class="loading ? 'animate-bounce' : 'text-white'"
        />
      </div>

      <p class="text-xl font-medium text-white text-center mb-2">
        {{
          props.loading
            ? t("analysis.upload.loading")
            : t("analysis.upload.drop")
        }}
      </p>
      <p class="text-sm text-white/50">
        {{ t("analysis.upload.hint") }}
      </p>

      <input
        ref="fileInput"
        type="file"
        accept=".fit"
        class="hidden"
        @change="handleFileSelect"
      >
    </div>

    <!-- Background Glow -->
    <div
      class="absolute -z-10 inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    />
  </div>
</template>
