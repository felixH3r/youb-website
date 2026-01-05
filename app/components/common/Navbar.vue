<script setup lang="ts">
const menuitems = [
  {
    title: "How it works",
    path: "/how-it-works",
  },
  {
    title: "Blog",
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
          ? 'max-w-3xl px-6 py-2 bg-black/5'
          : 'max-w-6xl px-8 py-4 bg-black/0',
        'rounded-b-3xl md:rounded-full border-b md:border',
      ]"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <span class="text-xl font-bold tracking-tighter text-white"
          >YOU<span class="font-normal opacity-50">B</span></span
        >
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in menuitems" :key="item.title">
          <NuxtLink
            :to="item.path"
            class="text-sm font-medium text-white hover:text-black transition-colors"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/contact"
          class="hidden md:block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
        >
          Contact
        </NuxtLink>

        <button
          @click="open = !open"
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
        >
          <div
            class="w-5 h-0.5 bg-black transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': open }"
          ></div>
          <div
            class="w-5 h-0.5 bg-black transition-all duration-300"
            :class="{ 'opacity-0': open }"
          ></div>
          <div
            class="w-5 h-0.5 bg-black transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': open }"
          ></div>
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
              :to="item.path"
              class="text-lg font-semibold text-black/80 hover:text-black block py-2 border-b border-black/5"
              @click="open = false"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="mt-4 w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center text-lg font-bold shadow-xl shadow-black/20"
              @click="open = false"
            >
              Contact Us
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Custom backdrop blur if needed, though Tailwind handled most */
</style>
