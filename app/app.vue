<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
import { organizationSchema, webSiteSchema } from "~/utils/geoSchema";

useSeoMeta({
  ogImage: "/og-image-black-on-white-1200x630.png",
  twitterImage: "/og-image-black-on-white-1200x630.png",
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema()),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(webSiteSchema()),
    },
  ],
});
</script>
