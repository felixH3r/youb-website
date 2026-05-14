<script setup lang="ts">
const { t } = useI18n();

interface ChainLengthResults {
  links: number;
  lengthInches: number;
  lengthCm: number;
}

const chainstay = ref(405);
const frontTeeth = ref(52);
const rearTeeth = ref(28);
const pulleyTeeth = ref(11);
const unit = ref('mm');
const results = ref<ChainLengthResults | null>(null);
const loading = ref(false);

const calculate = async () => {
  loading.value = true;
  try {
    const data = await $fetch<ChainLengthResults>('/api/tools/chain-length', {
      method: 'POST',
      body: {
        chainstay: chainstay.value,
        frontTeeth: frontTeeth.value,
        rearTeeth: rearTeeth.value,
        pulleyTeeth: pulleyTeeth.value,
        unit: unit.value,
      }
    });
    results.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => calculate());
watch([chainstay, frontTeeth, rearTeeth, pulleyTeeth, unit], () => calculate());
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.chainLength.chainstay') }}</label>
          <input 
            v-model.number="chainstay"
            type="number" 
            step="0.1"
            class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
          >
        </div>
        <div class="space-y-2">
          <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.chainLength.unit') }}</label>
          <select 
            v-model="unit"
            class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors appearance-none"
          >
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="inch">inch</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.chainLength.front') }}</label>
          <input 
            v-model.number="frontTeeth"
            type="number" 
            class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
          >
        </div>
        <div class="space-y-2">
          <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.chainLength.rear') }}</label>
          <input 
            v-model.number="rearTeeth"
            type="number" 
            class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
          >
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="space-y-2">
          <label class="text-[10px] font-bold uppercase tracking-widest text-white/30">{{ t('tools.chainLength.pulleyTeeth') }}</label>
          <input
            v-model.number="pulleyTeeth"
            type="number"
            min="0"
            class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-white/30 transition-colors"
          >
          <p class="text-xs leading-relaxed text-white/28">
            {{ t('tools.chainLength.pulleyHint') }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="results" class="grid grid-cols-1 gap-3 pt-4 border-t border-white/5">
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20">{{ t('tools.chainLength.resultLinks') }}</p>
        <p class="text-2xl font-bold text-white">{{ results.links }}</p>
      </div>
      <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
        <p class="text-[10px] font-bold uppercase tracking-wider text-white/20">{{ t('tools.chainLength.resultLength') }}</p>
        <p class="text-xl font-medium text-white">{{ results.lengthInches }} in / {{ results.lengthCm }} cm</p>
      </div>
    </div>
  </div>
</template>
