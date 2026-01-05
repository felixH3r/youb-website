<script setup>
const { t } = useI18n();

useHead({
  title: () => t("seo.title"),
});

useSeoMeta({
  ogTitle: () => t("seo.title"),
  description: () => t("seo.description"),
  ogDescription: () => t("seo.description"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.title"),
  twitterDescription: () => t("seo.description"),
});

definePageMeta({});
</script>

<template>
  <LandingHeroSection />
  <LandingProblemSection />
  <LandingSolutionSection />
  <LandingMagicMoment />
  <LandingTrustSection />
  <LandingTargetGroupSection />
  <CommonCTASection />
</template>
