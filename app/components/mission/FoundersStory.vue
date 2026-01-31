<script setup>
const { t } = useI18n();
</script>

<template>
  <section class="py-24 px-4 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Column -->
        <div>
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-12"
          >
            {{ t("mission.story.headline") }}
          </h2>

          <div
            class="relative space-y-6 text-lg md:text-xl text-zinc-300 font-serif leading-relaxed"
          >
            <!-- Decorative Quote Mark -->
            <div
              class="absolute -left-4 -top-10 text-8xl text-white/40 font-serif select-none"
            >
              “
            </div>

            <p class="font-serif">{{ t("mission.story.p1") }}</p>
            <p class="font-serif">{{ t("mission.story.p2") }}</p>
            <p class="font-serif">{{ t("mission.story.p3") }}</p>
            <p class="font-serif">{{ t("mission.story.p4") }}</p>
            <p class="font-serif">{{ t("mission.story.p5") }}</p>
            <div class="space-y-4 pt-4">
              <p class="font-bold text-white font-serif">
                {{ t("mission.story.p6") }}
              </p>
              <p
                class="text-sm md:text-base text-zinc-500 font-sans tracking-widest uppercase"
              >
                Felix Hermanutz — Founder
              </p>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="hidden lg:block sticky top-32 self-start">
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-1 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
            <img
              src="/KotlFinish.jpeg"
              alt="Founder Story"
              class="relative z-10 w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
