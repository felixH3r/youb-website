<template>
  <div
    class="card-container group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-1000"
    :style="{ animationDelay: `${delay}ms` }"
    :class="customClass"
  >
    <div
      v-if="icon"
      class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500"
    >
      <Icon :name="icon" class="w-6 h-6" />
    </div>
    <h3 class="text-2xl font-semibold text-white mb-4">
      {{ title }}
    </h3>
    <p class="text-white/50 leading-relaxed font-light">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  delay: {
    type: Number,
    default: 0,
  },
  customClass: {
    type: String,
    default: "",
  },
});
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
    transform: translateY(3rem);
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
