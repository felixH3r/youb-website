<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div
    class="min-h-[80vh] flex items-center justify-center px-4 mt-20 relative overflow-hidden bg-black"
  >
    <!-- Background Decor -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2"
    />

    <div
      class="relative z-10 max-w-lg w-full text-center px-8 py-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000"
    >
      <div
        class="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 text-white shadow-[0_0_40px_rgba(255,255,255,0.1)]"
      >
        <Icon name="ph:check-circle-bold" class="w-12 h-12" />
      </div>

      <h1
        class="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight"
      >
        E-Mail bestätigt!
      </h1>

      <p class="text-lg text-white/60 leading-relaxed font-light mb-10">
        Vielen Dank! Deine E-Mail Adresse wurde erfolgreich bestätigt. Wir
        freuen uns darauf, dich bald bei YOUB zu begrüßen.
      </p>

      <NuxtLink
        to="/"
        class="inline-block w-full px-8 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:bg-white/90 active:scale-[0.98] transition-all duration-300 shadow-xl"
      >
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
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

.slide-in-from-bottom-8 {
  animation-name: fade-in, slide-in-from-bottom;
}
</style>
