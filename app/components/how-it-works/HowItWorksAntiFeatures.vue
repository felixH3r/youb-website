<template>
  <section class="py-24 px-4 bg-black">
    <div
      class="max-w-4xl mx-auto p-12 rounded-[2rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl"
    >
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000"
      >
        {{ $t("howItWorks.anti.title") }}
      </h2>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
      >
        <div
          class="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150"
        >
          <Icon name="ph:x-circle-light" class="w-6 h-6 text-white/30" />
          <span class="text-lg text-white/60">{{
            $t("howItWorks.anti.item1")
          }}</span>
        </div>
        <div
          class="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300"
        >
          <Icon name="ph:x-circle-light" class="w-6 h-6 text-white/30" />
          <span class="text-lg text-white/60">{{
            $t("howItWorks.anti.item2")
          }}</span>
        </div>
        <div
          class="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-450"
        >
          <Icon name="ph:x-circle-light" class="w-6 h-6 text-white/30" />
          <span class="text-lg text-white/60">{{
            $t("howItWorks.anti.item3")
          }}</span>
        </div>
      </div>
    </div>
  </section>
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

.delay-150 {
  animation-delay: 150ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-450 {
  animation-delay: 450ms;
}
</style>
