<script setup>
const { t } = useI18n();

useHead({
  title: () => t("mission.hero.title"),
});

useSeoMeta({
  ogTitle: () => t("mission.hero.title"),
  description: () => t("mission.hero.subtitle"),
  ogDescription: () => t("mission.hero.subtitle"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("mission.hero.title"),
  twitterDescription: () => t("mission.hero.subtitle"),
});

definePageMeta({});
</script>

<template>
  <MissionHero />
  <MissionPrinciples />
  <MissionFoundersStory />
  <MissionTeamSection />
  <MissionValues />
  <CommonCTASection />
</template>
