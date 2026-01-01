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
    class="w-full py-12 px-6 border-t border-black/5 bg-white relative z-20"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-black rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-xl">Y</span>
          </div>
          <span class="font-bold text-xl tracking-tight">Youb</span>
        </div>
        <p class="text-sm text-black/40">
          {{ $t("footer.rights") }}
        </p>
      </div>

      <div class="flex items-center gap-8">
        <nav class="flex gap-6">
          <a
            href="#"
            class="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >{{ $t("nav.features") }}</a
          >
          <a
            href="#"
            class="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >{{ $t("nav.pricing") }}</a
          >
        </nav>

        <!-- Premium Language Switcher -->
        <button
          @click="toggleLanguage"
          class="cursor-pointer group flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-black/[0.02] hover:bg-black/5 transition-all duration-300"
        >
          <Icon
            name="heroicons:language"
            class="w-4 h-4 text-black/40 group-hover:text-black transition-colors"
          />
          <span
            class="text-xs font-semibold uppercase tracking-wider text-black/60 group-hover:text-black"
          >
            {{ locale === "de" ? "EN" : "DE" }}
          </span>
          <div
            class="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-black transition-colors"
          />
        </button>
      </div>
    </div>
  </footer>
</template>
