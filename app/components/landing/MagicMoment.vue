<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const containerRef = ref<HTMLElement | null>(null);
const progress = ref(0);

// Get lines from translations
const lines = computed(() => [
  t("magicMoment.line1"),
  t("magicMoment.line2"),
  t("magicMoment.line3"),
]);

// Split lines into characters for granular control
// We map each line to an array of characters
const splitLines = computed(() => {
  return lines.value.map((line) => line.split(""));
});

// Calculate total characters to normalize progress
const totalChars = computed(() => {
  return splitLines.value.reduce((acc, line) => acc + line.length, 0);
});

// Calculate opacity for a specific character based on its global index
const getCharOpacity = (lineIndex: number, charIndex: number) => {
  // Calculate global index of this character
  let globalIndex = 0;
  for (let i = 0; i < lineIndex; i++) {
    const line = splitLines.value[i];
    if (line) {
      globalIndex += line.length;
    }
  }
  globalIndex += charIndex;

  // Calculate the "start" and "end" progress points for this character
  // We want characters to fill up one by one
  const charStep = 0.9 / totalChars.value; // Leave 10% buffering at end
  const threshold = globalIndex * charStep;

  // Create a small smooth transition range
  const fadeRange = 0.05;

  if (progress.value < threshold) return 0.1;
  if (progress.value > threshold + fadeRange) return 1;

  return 0.1 + ((progress.value - threshold) / fadeRange) * 0.9;
};

const getCharColor = (lineIndex: number, charIndex: number) => {
  const opacity = getCharOpacity(lineIndex, charIndex);

  // First two lines are light gray
  if (lineIndex < 2) {
    return `rgba(163, 163, 163, ${opacity})`;
  }

  return `rgba(255, 255, 255, ${opacity})`;
};

const handleScroll = () => {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate sticky progress
  // We want the animation to run while the container is scrolling
  // The container is tall (e.g. 300vh), and the content is sticky (100vh)
  // Distance to scroll = containerHeight - windowHeight

  const scrollDistance = rect.height - windowHeight;

  // rect.top goes from 0 (at start of stickiness) to -scrollDistance (at end)
  // We clamp rect.top between 0 and -scrollDistance

  const currentScroll = Math.max(0, Math.min(scrollDistance, -rect.top));

  // Progress from 0 to 1
  progress.value =
    rect.height > windowHeight ? currentScroll / scrollDistance : 1;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Tall container to enable scrolling time -->
  <section ref="containerRef" class="relative h-[300vh] bg-black">
    <div
      class="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hiddenpx-4"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h2
          class="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
        >
          <div
            v-for="(line, lineIndex) in splitLines"
            :key="lineIndex"
            class="block mb-2 last:mb-0"
          >
            <span
              v-for="(char, charIndex) in line"
              :key="charIndex"
              class="transition-colors duration-75"
              :style="{
                color: getCharColor(lineIndex, charIndex),
              }"
              >{{ char }}</span
            >
          </div>
        </h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure smooth font rendering */
h2 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
