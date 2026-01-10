<template>
  <div class="faq-accordion space-y-4">
    <div
      v-for="(category, catId) in categories"
      :key="catId"
      class="faq-category mb-12"
    >
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tighter"
      >
        {{ $rt(category.title) }}
      </h2>

      <div class="space-y-4">
        <div
          v-for="(item, itemId) in category.items"
          :key="itemId"
          class="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 overflow-hidden"
          :class="{
            'bg-white/[0.08]': activeItems.includes(`${catId}-${itemId}`),
          }"
        >
          <button
            class="w-full flex items-center justify-between p-6 text-left"
            @click="toggleItem(`${catId}-${itemId}`)"
          >
            <span class="text-xl font-medium text-white/90">
              {{ $rt(item.question) }}
            </span>
            <Icon
              name="ph:caret-down"
              class="w-6 h-6 text-white/40 transition-transform duration-300"
              :class="{
                'rotate-180': activeItems.includes(`${catId}-${itemId}`),
              }"
            />
          </button>

          <Transition
            enter-active-class="transition-[max-height,opacity] duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[500px] opacity-100"
            leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
            leave-from-class="max-h-[500px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-if="activeItems.includes(`${catId}-${itemId}`)"
              class="overflow-hidden"
            >
              <div
                class="px-6 pb-6 text-white/60 leading-relaxed font-light text-lg"
              >
                <p v-if="itemId === 'isOnlyApp'">
                  {{ $rt(item.answer).split("(")[0] }}
                  <NuxtLink
                    to="/mission"
                    class="text-white hover:text-white/80 underline underline-offset-4 transition-colors"
                  >
                    {{
                      $rt(item.answer).match(/\((.*?)\)/)?.[1] ||
                      "(unser „Markus-Prinzip“)"
                    }}
                  </NuxtLink>
                  {{ $rt(item.answer).split(")")[1] || "" }}
                </p>
                <p v-else>{{ $rt(item.answer) }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const activeItems = ref([]);

const toggleItem = (id) => {
  const index = activeItems.value.indexOf(id);
  if (index > -1) {
    activeItems.value.splice(index, 1);
  } else {
    activeItems.value.push(id);
  }
};
</script>

<style scoped>
.faq-accordion {
  animation: fade-in 1s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
