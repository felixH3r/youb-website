<script setup lang="ts">
const { t } = useI18n();
const props = defineProps<{
  summary: {
    sport: string;
    startTime?: string;
    duration?: number;
    distance?: number;
    avgSpeed?: number;
    maxSpeed?: number;
    totalAscent?: number;
    totalDescent?: number;
  };
}>();

const formatDuration = (seconds?: number) => {
  if (!seconds) return "--:--";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h > 0 ? h + ":" : ""}${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
};

const formatDistance = (m?: number) => {
  if (!m) return "0.0 km";
  return (m / 1000).toFixed(2) + " km";
};

const formatSpeed = (ms?: number) => {
  if (!ms) return "0.0 km/h";
  // If unit is already km/h (depending on parser config)
  return ms.toFixed(1) + " km/h";
};
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div
      class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
    >
      <p
        class="text-xs font-medium text-white/50 uppercase tracking-wider mb-1"
      >
        {{ t("analysis.summary.sport") }}
      </p>
      <p class="text-xl font-bold text-white capitalize">{{ summary.sport }}</p>
    </div>

    <div
      class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
    >
      <p
        class="text-xs font-medium text-white/50 uppercase tracking-wider mb-1"
      >
        {{ t("analysis.summary.duration") }}
      </p>
      <p class="text-xl font-bold text-white">
        {{ formatDuration(summary.duration) }}
      </p>
    </div>

    <div
      class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
    >
      <p
        class="text-xs font-medium text-white/50 uppercase tracking-wider mb-1"
      >
        {{ t("analysis.summary.distance") }}
      </p>
      <p class="text-xl font-bold text-white">
        {{ formatDistance(summary.distance) }}
      </p>
    </div>

    <div
      class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm"
    >
      <p
        class="text-xs font-medium text-white/50 uppercase tracking-wider mb-1"
      >
        {{ t("analysis.summary.elevation") }}
      </p>
      <p class="text-xl font-bold text-white">
        +{{ summary.totalAscent || 0 }}m
      </p>
    </div>
  </div>
</template>
