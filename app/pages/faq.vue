<script setup>
const { t, tm } = useI18n();

useHead({
  title: () => t("faq.title"),
});

useSeoMeta({
  ogTitle: () => t("faq.title"),
  description: () => t("seo.description"),
  ogDescription: () => t("seo.description"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("faq.title"),
  twitterDescription: () => t("seo.description"),
});

const categories = computed(() => {
  // Use tm() to get the object structure from i18n
  const data = tm("faq.categories");
  if (!data || typeof data === "string") {
    console.warn("FAQ categories not yet loaded or missing:", data);
    return {};
  }
  return data;
});
</script>

<template>
  <div class="faq-page bg-black min-h-screen pt-32 md:pt-42 pb-24 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-20 text-center">
        <h1
          class="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
        >
          {{ $t("faq.title") }}
        </h1>
        <div class="w-24 h-1 bg-white/20 mx-auto rounded-full" />
      </div>

      <!-- FAQ Accordion -->
      <FaqAccordion :categories="categories" />

      <!-- Founder Quote -->
      <div class="mt-32 pt-20 pb-24 text-center">
        <blockquote class="relative max-w-2xl mx-auto">
          <!-- Quote Icon -->
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 text-white/10">
            <Icon name="ph:quotes-fill" class="w-20 h-20" />
          </div>

          <p
            class="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-8"
          >
            "{{ $t("faq.founderQuote.text") }}"
          </p>

          <footer
            class="text-white/40 uppercase tracking-widest text-sm font-medium"
          >
            {{ $t("faq.founderQuote.author") }}
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
  <CommonCTASection />
</template>

<style scoped>
.faq-page {
  background-image: radial-gradient(
      circle at 50% 0%,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 40%
    );
}
</style>
