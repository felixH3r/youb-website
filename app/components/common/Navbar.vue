<script setup lang="ts">
const { t } = useI18n();
const { appDownloadUrl, webLoginUrl } = useAppLinks();

const menuitems = [
  {
    title: "nav.howItWorks",
    path: "/how-it-works",
  },
  {
    title: "nav.pricing",
    path: "/pricing",
  },
  {
    title: "nav.mission",
    path: "/mission",
  },
  {
    title: "nav.faq",
    path: "/faq",
  },
  {
    title: "nav.blog",
    path: "/blog",
  },
];

const open = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out"
    :class="[isScrolled ? 'top-0 md:top-2' : 'top-0 md:top-6', 'px-0 md:px-4']"
  >
    <nav
      class="w-full transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md border-white/20 shadow-2xl flex items-center justify-between"
      :class="[
        isScrolled
          ? 'max-w-5xl px-6 py-2 bg-black/5'
          : 'max-w-6xl px-8 py-4 bg-black/0',
        'rounded-b-3xl md:rounded-full border-b md:border',
      ]"
    >
      <!-- Logo -->
      <NuxtLink :to="$localePath('/')" class="flex items-center gap-2 group">
        <img
          src="/youb-logo-white-on-transparent-512x512.png"
          alt="YOUB Logo"
          class="h-10 md:h-12 w-auto flex-shrink-0"
        >
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-5 lg:gap-8">
        <li v-for="item in menuitems" :key="item.title" class="flex-shrink-0">
          <NuxtLink
            :to="$localePath(item.path)"
            class="text-sm font-medium text-white hover:text-black transition-colors whitespace-nowrap"
          >
            {{ t(item.title) }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <a
          :href="appDownloadUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:flex items-center gap-2 bg-white text-black px-4 lg:px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/20 whitespace-nowrap"
        >
          <Icon name="ph:download-simple-bold" class="w-4 h-4" />
          <span class="hidden lg:inline">{{ t("nav.contact") }}</span>
        </a>
        <a
          :href="webLoginUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-all bg-white/5 border border-white/10 px-3 lg:px-4 py-2 rounded-full hover:bg-white/10 whitespace-nowrap"
        >
          <Icon name="ph:user-bold" class="w-4 h-4" />
          <span class="hidden lg:inline">{{ t("nav.webLogin") }}</span>
        </a>

        <button
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          @click="open = !open"
        >
          <div
            class="w-5 h-0.5 bg-white transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': open }"
          />
          <div
            class="w-5 h-0.5 bg-white transition-all duration-300"
            :class="{ 'opacity-0': open }"
          />
          <div
            class="w-5 h-0.5 bg-white transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': open }"
          />
        </button>
      </div>
    </nav>


    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="open"
        class="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-black/5 shadow-2xl rounded-3xl p-6 md:hidden overflow-hidden"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="item in menuitems" :key="item.title">
            <NuxtLink
              :to="$localePath(item.path)"
              class="text-lg font-semibold text-black/80 hover:text-black block py-2 border-b border-black/5"
              @click="open = false"
            >
              {{ t(item.title) }}
            </NuxtLink>
          </li>
          <li>
            <a
              :href="webLoginUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 w-full bg-black/5 border border-black/10 text-black py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold"
              @click="open = false"
            >
              <Icon name="ph:user-bold" class="w-5 h-5" />
              {{ t("nav.webLogin") }}
            </a>
          </li>
          <li>
            <a
              :href="appDownloadUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-black/20"
              @click="open = false"
            >
              <Icon name="ph:download-simple-bold" class="w-5 h-5" />
              {{ t("nav.contact") }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Custom backdrop blur if needed, though Tailwind handled most */
</style>
