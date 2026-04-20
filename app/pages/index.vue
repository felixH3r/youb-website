<script setup>
const { t } = useI18n();

useHead({
  title: () => t("seo.title"),
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "YOUB",
        "operatingSystem": "iOS, Android, Web",
        "applicationCategory": "HealthAndFitnessApplication",
        "description": "YOUB ist dein intelligenter KI-Coach für Triathlon, Radsport und Laufen.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        }
      })
    }
  ]
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
