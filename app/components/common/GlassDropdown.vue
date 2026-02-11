<template>
  <div ref="containerRef" class="relative w-full">
    <!-- Dropdown Trigger -->
    <button
      type="button"
      class="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-all duration-300 cursor-pointer text-left"
      :class="{ 'border-white/30 ring-1 ring-white/10': isOpen }"
      @click="isOpen = !isOpen"
    >
      <span v-if="selectedOption" class="truncate">{{
        selectedOption.label
      }}</span>
      <span v-else class="text-white/20 truncate">{{ placeholder }}</span>

      <Icon
        name="ph:caret-down-light"
        class="w-5 h-5 text-white/40 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute z-50 w-full mt-2 py-2 rounded-2xl border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-3xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
      >
        <div
          v-for="option in options"
          :key="option.value"
          class="px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group"
          :class="{ 'bg-white/10 text-white': modelValue === option.value }"
          @click="selectOption(option)"
        >
          <span class="font-light">{{ option.label }}</span>
          <Icon
            v-if="modelValue === option.value"
            name="ph:check-bold"
            class="w-4 h-4 text-white"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

interface Option {
  label: string;
  value: string;
}

const props = defineProps<{
  modelValue: string;
  options: Option[];
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const selectedOption = computed(() =>
  props.options.find((opt) => opt.value === props.modelValue),
);

const selectOption = (option: Option) => {
  emit("update:modelValue", option.value);
  isOpen.value = false;
};

// Close on click outside
const handleClickOutside = (event: MouseEvent) => {
  if (
    containerRef.value &&
    !containerRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("mousedown", handleClickOutside);
});
</script>

<style scoped>
/* Custom Scrollbar for the glass menu */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
