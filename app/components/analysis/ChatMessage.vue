<script setup lang="ts">
import MarkdownIt from "markdown-it";

const props = defineProps<{
  message: {
    role: "user" | "model" | "assistant";
    content: string;
  };
}>();

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const isModel = computed(() =>
  ["model", "assistant"].includes(props.message.role),
);

const renderedContent = computed(() => {
  if (isModel.value) {
    return md.render(props.message.content);
  }
  return props.message.content;
});
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
        <div v-if="isModel" v-html="renderedContent" class="markdown-content" />
        <p v-else class="whitespace-pre-wrap">{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>
