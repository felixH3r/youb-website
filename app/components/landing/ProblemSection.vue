<template>
  <section
    class="relative min-h-screen w-full flex items-center justify-center py-24 px-4 overflow-hidden bg-black"
  >
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <!-- Placeholder Video: Dark dramatic nature/training footage -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover opacity-40 grayscale"
      >
        <source src="/problem-video.mp4" type="video/mp4" />
      </video>
      <!-- Dark Overlay Gradients -->
      <div
        class="absolute inset-0 bg-linear-to-b from-black from-0% via-transparent via-10% to-transparent to-90% to-black to-100%"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black to-transparent"
      />
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          {{ $t("problem.title") }}
        </h2>
        <p
          class="text-xl md:text-2xl font-light text-white/60 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          {{ $t("problem.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <CommonCard
          :title="$t('problem.pillar1.title')"
          :text="$t('problem.pillar1.text')"
          icon="ph:clock-light"
          :delay="300"
        />
        <CommonCard
          :title="$t('problem.pillar2.title')"
          :text="$t('problem.pillar2.text')"
          icon="ph:brain-light"
          :delay="450"
        />
        <CommonCard
          :title="$t('problem.pillar3.title')"
          :text="$t('problem.pillar3.text')"
          icon="ph:calendar-x-light"
          :delay="600"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed for now
</script>

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
    transform: translateY(var(--tw-enter-translate-y, 2rem));
  }
  to {
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-bottom-10 {
  --tw-enter-translate-y: 2.5rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-450 {
  animation-delay: 450ms;
}
.delay-600 {
  animation-delay: 600ms;
}
</style>
