<script setup>
import { softwareApplicationSchema } from "~/utils/geoSchema";

const { t } = useI18n();

useHead({
  title: () => t("seo.title"),
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(softwareApplicationSchema()),
    },
  ],
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
  <div>
    <LandingHeroSection />
    <LandingProblemSection />
    <LandingSolutionSection />
    <LandingMagicMoment />
    <LandingTrustSection />
    <LandingTargetGroupSection />
    <CommonCTASection />
  </div>
</template>
