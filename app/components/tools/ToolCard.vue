<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
  detailTo?: string;
  detailLabel?: string;
}>();
</script>

<template>
  <div class="relative group">
    <!-- Glow Effect -->
    <div class="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition duration-700" />
    
    <article class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505]/60 backdrop-blur-3xl p-8 md:p-10 h-full flex flex-col">
      <!-- Top Shine -->
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div class="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white backdrop-blur-xl">
        <Icon :name="icon" class="h-6 w-6 text-white/80" />
      </div>

      <h3 class="text-2xl font-bold tracking-tight text-white mb-4">
        {{ title }}
      </h3>

      <p class="text-sm leading-relaxed text-white/40 mb-8 font-light">
        {{ description }}
      </p>

      <div class="mt-auto space-y-6">
        <slot />

        <NuxtLink
          v-if="detailTo"
          :to="detailTo"
          class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/10 hover:text-white"
        >
          {{ detailLabel }}
          <Icon name="ph:arrow-right-bold" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
