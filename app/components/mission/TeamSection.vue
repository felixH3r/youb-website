<script setup>
const { t } = useI18n();

const goalLines = computed(() => {
  const fullText = t("mission.team.shared_goal");
  const [part1, rest] = fullText.split(":");
  if (!rest) return [fullText];

  // Find a good split point in the second part
  const words = rest.trim().split(" ");
  const mid = Math.ceil(words.length / 2);
  const part2 = words.slice(0, mid).join(" ");
  const part3 = words.slice(mid).join(" ");

  return [part1 + ":", part2, part3];
});
</script>

<template>
  <section class="py-24 px-4 bg-black overflow-hidden pb-0">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-20 px-4">
        <span
          class="inline-block text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-700"
        >
          {{ t("mission.team.title") }}
        </span>
        <h2
          class="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-100"
        >
          {{ t("mission.team.headline") }}
        </h2>
        <div
          class="w-24 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-auto mb-12 animate-in fade-in duration-1000 delay-300"
        />
        <p
          class="text-lg md:text-xl font-light text-white/50 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200"
        >
          {{ t("mission.team.connection") }}
        </p>
      </div>

      <!-- Two Worlds Layout -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Athletes & Coaches -->
        <div
          class="group relative p-1 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-zinc-900 animate-in fade-in slide-in-from-left duration-1000 delay-400"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div class="relative p-8 md:p-12 h-full flex flex-col justify-center">
            <h3
              class="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight group-hover:scale-[1.02] transition-transform duration-500"
            >
              {{ t("mission.team.world1.label") }}
            </h3>
            <p class="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {{ t("mission.team.world1.text") }}
            </p>
          </div>
        </div>

        <!-- Visionaries & Engineers -->
        <div
          class="group relative p-1 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-zinc-900 animate-in fade-in slide-in-from-right duration-1000 delay-600"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div class="relative p-8 md:p-12 h-full flex flex-col justify-center">
            <h3
              class="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight group-hover:scale-[1.02] transition-transform duration-500"
            >
              {{ t("mission.team.world2.label") }}
            </h3>
            <p class="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {{ t("mission.team.world2.text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Shared Goal with MagicMoment effect -->
  <LandingMagicMoment :lines="goalLines" />
</template>

<style scoped>
.animate-in {
  animation-fill-mode: both;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(2rem);
  }
  to {
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom {
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-150 {
  animation-delay: 150ms;
}
</style>
