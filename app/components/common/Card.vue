<template>
  <div
    class="card-container group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-1000 flex flex-col h-full"
    :style="{ animationDelay: `${delay}ms` }"
    :class="customClass"
  >
    <!-- Image support -->
    <div
      v-if="image"
      class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>

    <!-- Icon support -->
    <div
      v-if="icon"
      class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500"
    >
      <Icon :name="icon" class="w-6 h-6" />
    </div>

    <div class="flex-1">
      <h3 class="text-2xl font-semibold text-white mb-2">
        {{ title }}
      </h3>
      <p
        v-if="subtitle"
        class="text-sm text-white/40 uppercase tracking-widest mb-4"
      >
        {{ subtitle }}
      </p>
      <p class="text-white/50 leading-relaxed font-light">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
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
