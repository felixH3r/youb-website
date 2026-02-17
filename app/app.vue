<template>
  <Analytics />
  <AppCookieBanner />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
import AppCookieBanner from "./components/common/AppCookieBanner.vue";
</script>
