<script setup lang="ts">
interface Message {
  text: string;
  sender: "ai" | "user";
}

const props = defineProps<{
  messages?: Message[];
}>();

// Fallback messages (original landing page messages)
const defaultMessages: Message[] = [
  { text: "solution.mockChat.msg1", sender: "ai" },
  { text: "solution.mockChat.msg1", sender: "ai" }, // This was a mistake in my thought, let me use the i18n keys
];
</script>

<template>
  <div
    class="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col p-6 md:p-8 w-full min-h-[400px] md:min-h-0 md:aspect-[4/3]"
  >
    <!-- Mock Chat Interface -->
    <div class="flex flex-col gap-4">
      <template v-if="props.messages && props.messages.length > 0">
        <div
          v-for="(msg, index) in props.messages"
          :key="index"
          :class="[
            'flex flex-col gap-1 max-w-[85%]',
            msg.sender === 'user'
              ? 'items-end self-end text-right'
              : 'items-start',
          ]"
        >
          <div
            :class="[
              'px-4 py-3 rounded-2xl text-xs md:text-sm font-medium whitespace-pre-line',
              msg.sender === 'user'
                ? 'rounded-br-none bg-white text-black font-semibold'
                : 'rounded-bl-none bg-white/10 border border-white/10 text-white',
            ]"
          >
            {{ msg.text }}
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Original Default View -->
        <div class="flex flex-col items-start gap-1 max-w-[85%]">
          <div
            class="px-4 py-3 rounded-2xl rounded-bl-none bg-white/10 border border-white/10 text-xs md:text-sm text-white font-medium"
          >
            {{ $t("solution.mockChat.msg1") }}
          </div>
        </div>
        <div class="flex flex-col items-end gap-1 max-w-[80%] self-end">
          <div
            class="px-4 py-3 rounded-2xl rounded-br-none bg-white text-black text-xs md:text-sm font-semibold"
          >
            {{ $t("solution.mockChat.msg2") }}
          </div>
        </div>
        <div class="flex flex-col items-start gap-1 max-w-[85%]">
          <div
            class="px-4 py-3 rounded-2xl rounded-bl-none bg-white/10 border border-white/10 text-xs md:text-sm text-white font-medium whitespace-pre-line"
          >
            {{ $t("solution.mockChat.msg3") }}
          </div>
        </div>
      </template>
    </div>

    <!-- Chat Input Placeholder -->
    <div class="mt-auto pt-6 flex items-center gap-3">
      <div
        class="flex-1 h-10 rounded-full bg-white/5 border border-white/10 flex items-center px-4"
      >
        <div class="w-16 h-1.5 rounded-full bg-white/10" />
      </div>
      <div
        class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
      >
        <Icon name="ph:paper-plane-right-fill" class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>
