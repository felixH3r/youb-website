<script setup lang="ts">
const { t } = useI18n();

interface GearRatioResult {
  front: number;
  rear: number;
  ratio: number;
  speedKmh: number;
  speedMph: number;
  gearInches: number;
}

const frontTeeth = ref(52);
const rearTeeth = ref(11);
const cadence = ref(90);
const circumference = ref(2105);
const results = ref<GearRatioResult | null>(null);
const loading = ref(false);

const calculate = async () => {
  loading.value = true;
  try {
    const data = await $fetch<{ results: GearRatioResult[] }>('/api/tools/gear-ratio', {
      method: 'POST',
      body: { 
        frontTeeth: frontTeeth.value, 
        rearTeeth: rearTeeth.value, 
        cadence: cadence.value, 
        circumference: circumference.value 
      }
    });
    const firstResult = data.results?.[0];
    if (firstResult) {
      results.value = firstResult;
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => calculate());
watch([frontTeeth, rearTeeth, cadence, circumference], () => calculate());
</script>

<template>
  <div class="space-y-6">
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.gearRatio.front') }}</label>
        <input 
          v-model.number="frontTeeth"
          type="number" 
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
        >
      </div>
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.gearRatio.rear') }}</label>
        <input 
          v-model.number="rearTeeth"
          type="number" 
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
        >
      </div>
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.gearRatio.cadence') }}</label>
        <input 
          v-model.number="cadence"
          type="number" 
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
        >
      </div>
      <div class="space-y-2">
        <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.gearRatio.circumference') }}</label>
        <input 
          v-model.number="circumference"
          type="number" 
          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
        >
      </div>
    </div>

    <div v-if="results" class="grid grid-cols-1 gap-3 pt-4 border-t border-white/5">
      <div class="grid grid-cols-2 gap-3">
        <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
          <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.gearRatio.resultRatio') }}</p>
          <p class="text-xl font-bold text-white">{{ results.ratio }}</p>
        </div>
        <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
          <p class="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">{{ t('tools.gearRatio.resultGearInches') }}</p>
          <p class="text-xl font-bold text-white">{{ results.gearInches }}</p>
        </div>
      </div>
      <div class="p-5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{{ t('tools.gearRatio.resultSpeed') }}</p>
        <div class="text-right">
          <p class="text-3xl font-black text-white">{{ results.speedKmh }} <span class="text-xs font-normal text-white/30">km/h</span></p>
          <p class="text-sm font-medium text-white/40">{{ results.speedMph }} mph</p>
        </div>
      </div>
    </div>
  </div>
</template>
