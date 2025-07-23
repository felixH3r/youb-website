<template>
  <div class="min-h-screen bg-white text-black flex flex-col justify-between">
    <!-- Header -->
    <header class="flex flex-col lg:flex-row justify-center items-center my-5 ">
      <div class="flex w-full justify-between items-center max-w-screen-xl">
        <NuxtLink to="/" class="text-xl font-semibold tracking-tight">youb</NuxtLink>
        <span class="text-sm text-gray-600">coming soon</span>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
        Understand your health.
      </h2>
      <p class="text-lg text-gray-600 max-w-md mb-8">
        Raw data confuses. We turn wearable signals into clarity – so you get to know your body better.
      </p>

      <!-- Back to site button -->
      <NuxtLink to="/" class="bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-full text-sm font-medium transition">
        Zurück zur Website
      </NuxtLink>
    </main>

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-500 py-6">
      &copy; 2025 YOUB – Your Data! Your Upgrade!
    </footer>
  </div>
</template>

<script setup>
  // keine Logik notwendig
</script>
