<template>
  <section class="relative py-24 px-4 bg-black overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000"
        >
          {{ $t("mission.values.title") }}
        </h2>
      </div>

      <!-- Values Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <CommonCard
          :title="$t('mission.values.item1.title')"
          :text="$t('mission.values.item1.text')"
          icon="ph:brain-light"
          :delay="300"
        />
        <CommonCard
          :title="$t('mission.values.item2.title')"
          :text="$t('mission.values.item2.text')"
          icon="ph:eye-light"
          :delay="450"
        />
        <CommonCard
          :title="$t('mission.values.item3.title')"
          :text="$t('mission.values.item3.text')"
          icon="ph:timer-light"
          :delay="600"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed
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
</style>
