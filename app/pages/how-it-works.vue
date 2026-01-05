<script setup>
const { t } = useI18n();

useHead({
  title: () => t("howItWorks.hero.title") + " | YOUB",
});

useSeoMeta({
  ogTitle: () => t("howItWorks.hero.title") + " | YOUB",
  description: () => t("howItWorks.hero.subtitle"),
  ogDescription: () => t("howItWorks.hero.subtitle"),
});
</script>

<template>
  <main class="bg-black min-h-screen">
    <HowItWorksHero />
    <HowItWorksFeelingSection />
    <HowItWorksPrinciple />
    <HowItWorksDifferentiation />
    <CommonCTASection />

    <LandingFooter />
  </main>
</template>

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

.slide-in-from-bottom-10 {
  --tw-enter-translate-y: 2.5rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-150 {
  animation-delay: 150ms;
}
</style>
