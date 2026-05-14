<script setup lang="ts">
import { formatPaceTime, isPaceUnit, parsePaceTime } from "~/utils/paceTime";

const { t } = useI18n();

interface PaceResults {
  paceKm: number;
  paceMi: number;
  speedKmh: number;
  speedMph: number;
}

const value = ref("5:00");
const unit = ref('min/km');
const results = ref<PaceResults | null>(null);
const loading = ref(false);
const error = ref("");

const units = [
  { value: 'min/km', label: 'min/km' },
  { value: 'min/mi', label: 'min/mi' },
  { value: 'km/h', label: 'km/h' },
  { value: 'mph', label: 'mph' },
];

const calculate = async () => {
  const numericValue = isPaceUnit(unit.value)
    ? parsePaceTime(value.value)
    : Number(value.value.replace(",", "."));

  if (!numericValue || numericValue <= 0) {
    results.value = null;
    error.value = isPaceUnit(unit.value)
      ? t("tools.pace.timeError")
      : t("tools.pace.numberError");
    return;
  }

  error.value = "";
  loading.value = true;
  try {
    const data = await $fetch<PaceResults>('/api/tools/pace', {
      method: 'POST',
      body: { value: numericValue, unit: unit.value }
    });
    results.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

// Immediate calculation
onMounted(() => calculate());
watch(unit, (nextUnit) => {
  const currentValue = Number(value.value.replace(",", "."));
  if (isPaceUnit(nextUnit)) {
    value.value = Number.isFinite(currentValue) && currentValue > 0
      ? formatPaceTime(currentValue)
      : "5:00";
  } else {
    const currentPace = parsePaceTime(value.value);
    value.value = currentPace ? String(Number((60 / currentPace).toFixed(2))) : "12";
  }
  calculate();
});
watch(value, () => calculate());
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.pace.valueLabel') }}</label>
        <input 
          v-model="value"
          type="text"
          inputmode="numeric"
          :placeholder="isPaceUnit(unit) ? '5:00' : '12'"
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
        >
      </div>
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.pace.unitLabel') }}</label>
        <select 
          v-model="unit"
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors appearance-none"
        >
          <option v-for="u in units" :key="u.value" :value="u.value" class="bg-neutral-900">{{ u.label }}</option>
        </select>
      </div>
    </div>

    <p
      v-if="error"
      class="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/50"
    >
      {{ error }}
    </p>

    <div v-if="results" class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.pace.resultPaceKm') }}</p>
        <p class="text-xl font-bold text-white">{{ formatPaceTime(results.paceKm) }}</p>
      </div>
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.pace.resultPaceMi') }}</p>
        <p class="text-xl font-bold text-white">{{ formatPaceTime(results.paceMi) }}</p>
      </div>
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.pace.resultSpeedKmh') }}</p>
        <p class="text-xl font-bold text-white">{{ results.speedKmh }}</p>
      </div>
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.pace.resultSpeedMph') }}</p>
        <p class="text-xl font-bold text-white">{{ results.speedMph }}</p>
      </div>
    </div>
    
    <div v-else-if="loading" class="h-40 flex items-center justify-center">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-white/20" />
    </div>
  </div>
</template>
