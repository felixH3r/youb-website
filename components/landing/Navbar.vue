<script setup>
const menuitems = [
  {
    title: "Features",
    path: "#",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full items-center justify-between">
        <NuxtLink to="/" class="text-xl font-semibold tracking-tight">YOU<a class="font-thin">B</a></NuxtLink>
        <div class="flex items-center gap-4">
          <a href="/launching-soon">Log in</a>
          <LandingLink href="/launching-soon" size="md">Sign up</LandingLink>
        </div>
<!--        <div class="block lg:hidden">-->
<!--          <button @click="open = !open" class="text-gray-800">-->
<!--            <svg-->
<!--              fill="currentColor"-->
<!--              class="w-4 h-4"-->
<!--              viewBox="0 0 20 20"-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--            >-->
<!--              <title>Menu</title>-->
<!--              <path-->
<!--                v-show="open"-->
<!--                fill-rule="evenodd"-->
<!--                clip-rule="evenodd"-->
<!--                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"-->
<!--              ></path>-->
<!--              <path-->
<!--                v-show="!open"-->
<!--                fill-rule="evenodd"-->
<!--                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"-->
<!--              ></path>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
      </div>
<!--      <nav-->
<!--        class=" w-auto mt-2 flex "-->
<!--        :class="{ block: open, hidden: !open }"-->
<!--      >-->
<!--        <ul class="flex flex-col lg:flex-row lg:gap-3">-->
<!--          <li v-for="item of menuitems">-->
<!--            <a-->
<!--              :href="item.path"-->
<!--              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"-->
<!--            >-->
<!--              {{ item.title }}-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <div class="lg:hidden flex items-center mt-3 gap-4">-->
<!--          <LandingLink href="/launching-soon" styleName="muted" block size="md"-->
<!--            >Log in</LandingLink-->
<!--          >-->
<!--          <LandingLink href="#" size="md" block>Sign up</LandingLink>-->
<!--        </div>-->
<!--      </nav>-->
    </header>
  </LandingContainer>
</template>
