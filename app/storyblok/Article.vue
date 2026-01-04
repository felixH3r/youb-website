<template>
  <div v-editable="blok" class="max-w-4xl mx-auto px-4 relative z-10">
    <!-- Back Button (Optional: depends if you want it inside the blok or page) -->

    <!-- Header -->
    <header class="mb-16">
      <div class="flex items-center gap-4 mb-6 text-sm font-medium">
        <span
          class="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70"
        >
          {{ blok.category || "Insight" }}
        </span>
        <span v-if="formattedDate" class="text-white/40">{{
          formattedDate
        }}</span>
      </div>

      <h1
        class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
      >
        {{ blok.title || "Untitled Insight" }}
      </h1>

      <p
        class="text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-3xl"
      >
        {{
          blok.excerpt ||
          "Exploring the next frontier of sports intelligence and personalized coaching."
        }}
      </p>
    </header>

    <!-- Main Image -->
    <div
      v-if="blok.image?.filename"
      class="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
    >
      <img
        :src="blok.image.filename"
        :alt="blok.title"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
      />
    </div>

    <!-- Content -->
    <div class="max-w-3xl mx-auto">
      <div
        v-if="blok.content"
        v-html="resolvedRichText"
        class="prose prose-invert prose-lg md:prose-xl max-w-none text-white/70 prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-white prose-p:text-white/70 prose-p:leading-[1.8] prose-p:font-light prose-strong:text-white prose-strong:font-semibold prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:font-light prose-blockquote:italic prose-blockquote:text-white/60"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: Object,
});

const { locale } = useI18n();

const formattedDate = computed(() => {
  const dateStr = props.blok.date || props.blok._created_at; // Standardize date handling
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale.value === "de" ? "de-DE" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
});

const resolvedRichText = computed(() => {
  if (!props.blok.content) return "";
  return renderRichText(props.blok.content);
});
</script>

<style scoped>
:deep(.prose) {
  --tw-prose-body: rgba(255, 255, 255, 0.7);
  --tw-prose-headings: #fff;
}

:deep(.prose p) {
  margin-bottom: 2rem;
}

:deep(.prose h2) {
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 2.25rem;
}

:deep(.prose h3) {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}
</style>
