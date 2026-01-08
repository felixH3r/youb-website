<template>
  <section class="relative py-24 px-4 bg-black overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h2
          class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000"
        >
          Dein Körper ist keine Excel-Tabelle.
        </h2>
        <p
          class="text-xl md:text-2xl font-light text-white/60 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-150"
        >
          Herkömmliche Trainingspläne gehen davon aus, dass jeder Tag perfekt
          ist. Dass du immer 8 Stunden schläfst, keinen Stress im Job hast und
          nie krank wirst. Aber das ist nicht die Realität. Das ist
          Labor-Theorie.
        </p>
      </div>

      <!-- Principles Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <CommonCard
          title="Das Leben ist dynamisch."
          text="Ein starrer Plan, der Stress ignoriert, führt nicht zu Bestzeiten. Er führt zu Verletzungen."
          :delay="300"
        />
        <CommonCard
          title="Kontext ist alles."
          text="300 Watt fühlen sich nach einem Meeting-Marathon anders an als im Urlaub. Dein Training muss das wissen."
          :delay="450"
        />
        <CommonCard
          title="Konsistenz schlägt Heldentum."
          text="Es geht nicht darum, einmal alles zu geben. Es geht darum, morgen wieder trainieren zu können."
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

.delay-150 {
  animation-delay: 150ms;
}
</style>
