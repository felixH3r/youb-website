<template>
  <NuxtLink
    :to="`/blog/${slug}`"
    class="group relative flex flex-col h-full p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
  >
    <!-- Image -->
    <div class="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div
        v-else
        class="w-full h-full bg-white/5 flex items-center justify-center"
      >
        <Icon name="ph:image-light" class="w-12 h-12 text-white/10" />
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <div class="flex items-center gap-3 mb-4">
        <span
          class="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/70"
        >
          {{ category || $t("blog.categoryArticle") }}
        </span>
        <span class="text-xs text-white/40">{{ date }}</span>
      </div>

      <h3
        class="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors"
      >
        {{ title }}
      </h3>

      <p
        class="text-white/50 text-sm leading-relaxed font-light line-clamp-3 mb-6"
      >
        {{ excerpt }}
      </p>

      <div
        class="mt-auto flex items-center text-sm font-medium text-white/80 group-hover:translate-x-1 transition-transform"
      >
        {{ $t("blog.readMore") }}
        <Icon name="ph:arrow-right-light" class="ml-2 w-4 h-4" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  excerpt: String,
  image: String,
  slug: String,
  date: String,
  category: String,
});
</script>
