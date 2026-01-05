<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const currentLocale = computed(() =>
  locales.value.find((l) => l.code === locale.value)
);

const toggleLanguage = () => {
  const nextLocale = locale.value === "de" ? "en" : "de";
  setLocale(nextLocale);
};
</script>

<template>
  <footer
    class="w-full py-16 px-6 border-t border-white/10 bg-black relative z-20"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
    >
      <div
        class="flex flex-col gap-6 items-center md:items-start text-center md:text-left"
      >
        <!-- Logo matching Navbar -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <span class="text-2xl font-bold tracking-tighter text-white">
            YOU<span class="font-normal opacity-50">B</span>
          </span>
        </NuxtLink>
        <p class="text-sm text-white/40 max-w-xs">
          {{ $t("footer.rights") }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <nav class="flex gap-8">
          <a
            href="#"
            class="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >{{ $t("nav.features") }}</a
          >
          <a
            href="#"
            class="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >{{ $t("nav.pricing") }}</a
          >
        </nav>

        <!-- Premium Language Switcher (Dark Mode) -->
        <button
          @click="toggleLanguage"
          class="cursor-pointer group flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <Icon
            name="heroicons:language"
            class="w-4 h-4 text-white/40 group-hover:text-white transition-colors"
          />
          <span
            class="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white"
          >
            {{ locale === "de" ? "EN" : "DE" }}
          </span>
          <div
            class="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"
          />
        </button>
      </div>
    </div>
  </footer>
</template>
