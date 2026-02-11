<script setup lang="ts">
import ChatMessage from "./ChatMessage.vue";

const { t } = useI18n();
const props = defineProps<{
  analysisId: string;
}>();

const messages = ref<Array<{ role: "user" | "model"; content: string }>>([]);
const input = ref("");
const loading = ref(false);
const scrollRef = ref<HTMLElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!input.value.trim() || loading.value) return;

  const userMsg = input.value;
  messages.value.push({ role: "user", content: userMsg });
  input.value = "";
  loading.value = true;
  await scrollToBottom();

  try {
    const { data } = await useFetch("/api/chat", {
      method: "POST",
      body: {
        analysisId: props.analysisId,
        messages: messages.value,
      },
    });

    if (data.value) {
      messages.value.push({ role: "model", content: (data.value as any).text });
    }
  } catch (e) {
    console.error("Chat error:", e);
    messages.value.push({ role: "model", content: t("analysis.chat.error") });
  } finally {
    loading.value = false;
    await scrollToBottom();
  }
};

onMounted(() => {
  messages.value.push({
    role: "model",
    content: t("analysis.chat.welcome"),
  });
});
</script>

<template>
  <div
    class="flex flex-col h-[600px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md"
  >
    <!-- Messages Area -->
    <div ref="scrollRef" class="flex-1 overflow-y-auto p-6 scroll-smooth">
      <ChatMessage v-for="(msg, i) in messages" :key="i" :message="msg" />

      <div
        v-if="loading"
        class="flex gap-2 p-4 bg-white/5 rounded-2xl w-fit animate-pulse"
      >
        <div class="w-2 h-2 bg-white/40 rounded-full animate-bounce"/>
        <div
          class="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-75"
        />
        <div
          class="w-2 h-2 bg-white/40 rounded-full animate-bounce delay-150"
        />
      </div>
    </div>

    <!-- Input Area -->
    <div class="p-6 border-t border-white/10 bg-black/20">
      <form class="flex gap-4" @submit.prevent="sendMessage">
        <input
          v-model="input"
          type="text"
          :placeholder="t('analysis.chat.placeholder')"
          class="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
          :disabled="loading"
        >
        <button
          type="submit"
          class="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
          :disabled="!input.trim() || loading"
        >
          <Icon name="ph:paper-plane-right-fill" class="text-xl" />
        </button>
      </form>
    </div>
  </div>
</template>
