<template>
  <div class="min-h-screen bg-black pt-32 pb-24 px-4 overflow-hidden relative">
    <!-- Background Decor -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-1"
    />
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-1"
    />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div
        class="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000"
      >
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          YOUB
          <span
            class="bg-gradient-to-r from-white/100 to-white/40 bg-clip-text text-transparent"
            >Insights</span
          >
        </h1>
        <p
          class="text-xl md:text-2xl font-light text-white/60 max-w-2xl mx-auto"
        >
          Deep dives into sports science, AI, and the evolution of personal
          coaching.
        </p>
      </div>

      <!-- Content State -->
      <div v-if="pending" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="i in 3"
          :key="i"
          class="h-[450px] rounded-3xl bg-white/5 animate-pulse border border-white/10"
        />
      </div>

      <div v-else-if="error" class="text-center py-24">
        <p class="text-white/60 mb-8">
          Failed to load articles. Please check your Storyblok configuration.
        </p>
        <button
          @click="refresh"
          class="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all"
        >
          Try Again
        </button>
      </div>

      <div
        v-else-if="stories?.length"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <BlogCard
          v-for="story in stories"
          :key="story.uuid"
          :title="story.content.title"
          :excerpt="story.content.excerpt"
          :image="story.content.image?.filename"
          :slug="story.slug"
          :date="formatDate(story.published_at || story.created_at)"
          :category="story.content.category"
          class="animate-in fade-in slide-in-from-bottom-12 duration-1000"
          :style="{ animationDelay: `${stories.indexOf(story) * 150}ms` }"
        />
      </div>

      <div v-else class="text-center py-24">
        <Icon
          name="ph:article-ny-times-light"
          class="w-16 h-16 text-white/20 mx-auto mb-6"
        />
        <p class="text-xl text-white/40">No articles found yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const { locale } = useI18n();

const {
  data: stories,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "blog-posts",
  async () => {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "published", // or 'draft'
      starts_with: "blog/",
      is_startpage: false,
    });
    return data.stories;
  },
  {
    watch: [locale],
  }
);

const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale.value === "de" ? "de-DE" : "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
};

useHead({
  title: "Blog | YOUB Insights",
  meta: [
    {
      name: "description",
      content:
        "Explore the connection between sports science and artificial intelligence on the YOUB blog.",
    },
  ],
});
</script>

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

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(var(--tw-enter-translate-y, 2rem));
  }
  to {
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fade-in;
}
.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
  animation-name: fade-in, slide-in-from-bottom;
}
.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
  animation-name: fade-in, slide-in-from-bottom;
}
</style>
