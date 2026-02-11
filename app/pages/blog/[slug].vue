<template>
  <div
    v-if="story"
    class="min-h-screen bg-black pt-32 pb-24 relative overflow-hidden"
  >
    <!-- Background Decor -->
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-1"
    />
    <div
      class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -z-1"
    />

    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <!-- Back Button -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center text-white/40 hover:text-white transition-colors mb-12 group"
      >
        <Icon
          name="ph:arrow-left-light"
          class="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform"
        />
        {{ $t("blog.backToInsights") }}
      </NuxtLink>

      <StoryblokComponent v-if="story" :blok="story.content" />

      <!-- Footer / Share / Tags -->
      <footer
        class="mt-24 pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-8"
      >
        <div class="flex items-center gap-6">
          <span class="text-sm text-white/40">{{ $t("blog.share") }}</span>
          <div class="flex gap-4">
            <button class="text-white/40 hover:text-white transition-colors">
              <Icon name="ph:twitter-logo-light" class="w-6 h-6" />
            </button>
            <button class="text-white/40 hover:text-white transition-colors">
              <Icon name="ph:linkedin-logo-light" class="w-6 h-6" />
            </button>
            <button class="text-white/40 hover:text-white transition-colors">
              <Icon name="ph:link-simple-light" class="w-6 h-6" />
            </button>
          </div>
        </div>

        <NuxtLink
          to="/blog"
          class="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all font-medium"
        >
          {{ $t("blog.viewAll") }}
        </NuxtLink>
      </footer>
    </div>
  </div>

  <div
    v-else-if="!error"
    class="min-h-screen bg-black flex items-center justify-center"
  >
    <div
      class="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"
    />
  </div>

  <div
    v-else
    class="min-h-screen bg-black flex flex-col items-center justify-center px-4"
  >
    <h1 class="text-4xl text-white font-bold mb-4">
      {{ $t("blog.notFound") }}
    </h1>
    <p class="text-white/60 mb-8">
      {{ $t("blog.notFoundText") }}
    </p>
    <NuxtLink
      to="/blog"
      class="px-8 py-3 rounded-full bg-white text-black font-semibold"
    >
      {{ $t("blog.backToBlog") }}
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const { locale, t } = useI18n();

const slug = route.params.slug;
const actualSlug = Array.isArray(slug) ? slug.join("/") : slug || "";

const storyblokApi = useStoryblokApi();

// Fetch story with useAsyncData for more stability
const { data: story, error } = await useAsyncData(
  `story-${actualSlug}-${locale.value}`,
  async () => {
    try {
      if (!actualSlug) return null;
      const { data } = await storyblokApi.get(
        `cdn/stories/blog/${actualSlug}`,
        {
          version: "published",
          language: locale.value,
        },
      );
      return data.story;
    } catch (e) {
      console.error("Error fetching story:", e);
      return null;
    }
  },
  {
    watch: [locale],
  },
);

// Enable Storyblok Bridge for live editing if we are in the browser
onMounted(() => {
  if (story.value && window.location.search.includes("_storyblok")) {
    useStoryblokBridge(story.value.id, (newStory) => {
      story.value = newStory;
    });
  }
});

// SEO & Geo Setup
watchEffect(() => {
  if (!story.value || !story.value.content) return;

  const content = story.value.content;
  const seo = content.seo || {};
  const geo = content.geo || {};

  useHead({
    title: seo.title || `${content.title || t("blog.notFound")} | YOUB`,
    meta: [
      {
        name: "description",
        content: seo.description || content.excerpt || "",
      },
      // Geo tags
      ...(geo.region ? [{ name: "geo.region", content: geo.region }] : []),
      ...(geo.placename
        ? [{ name: "geo.placename", content: geo.placename }]
        : []),
      ...(geo.position
        ? [{ name: "geo.position", content: geo.position }]
        : []),
      ...(geo.position ? [{ name: "ICBM", content: geo.position }] : []),
      // OG Tags
      {
        property: "og:title",
        content: seo.title || content.title || "Untitled",
      },
      {
        property: "og:description",
        content: seo.description || content.excerpt || "",
      },
      { property: "og:image", content: content.image?.filename },
      { property: "og:type", content: "article" },
      {
        property: "article:published_time",
        content:
          story.value.published_at ||
          story.value.created_at ||
          new Date().toISOString(),
      },
    ],
  });
});
</script>

<style scoped>
/* Custom typography refinements to match premium look */
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
