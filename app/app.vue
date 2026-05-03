<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { Analytics } from "@vercel/analytics/nuxt";

useSeoMeta({
  ogImage: "/og-image-black-on-white-1200x630.png",
  twitterImage: "/og-image-black-on-white-1200x630.png",
  twitterCard: "summary_large_image",
});
</script>
