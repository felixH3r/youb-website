<script setup lang="ts">
const props = defineProps<{
  message: {
    role: "user" | "model" | "assistant";
    content: string;
  };
}>();

const isModel = computed(() =>
  ["model", "assistant"].includes(props.message.role)
);
</script>

<template>
  <div
    class="flex flex-col mb-4"
    :class="isModel ? 'items-start' : 'items-end'"
  >
    <div
      class="max-w-[85%] px-5 py-3 rounded-3xl text-sm"
      :class="[
        isModel
          ? 'bg-white text-black rounded-tl-none font-medium'
          : 'bg-black text-white border border-white/20 rounded-tr-none',
      ]"
    >
      <div
        class="prose prose-sm"
        :class="isModel ? 'prose-black' : 'prose-invert'"
      >
        <p class="whitespace-pre-wrap">{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>
