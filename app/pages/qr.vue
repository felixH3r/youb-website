<script setup lang="ts">
const route = useRoute();
const type = (route.query.type as string) || "unknown";

// Use Nuxt-Gtag for tracking
const { gtag } = useGtag();

onMounted(() => {
  // Track the event
  gtag("event", "qr_scan", {
    scan_type: type,
    page_path: "/qr",
  });

  // Small delay to ensure event is tracked and user sees the nice transition
  setTimeout(() => {
    navigateTo("/", { replace: true });
  }, 500);
});

// Meta for the redirect page
useHead({
  title: "YOUB | QR Redirect",
  meta: [
    { name: "robots", content: "noindex, nofollow" }
  ]
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-sans">
    <div class="relative w-24 h-24 mb-8 flex items-center justify-center">
      <div class="absolute inset-0 border-4 border-white/10 rounded-full" />
      <div class="absolute inset-0 border-4 border-white rounded-full border-t-transparent animate-spin" />
      <div class="text-3xl font-black tracking-tighter italic">YB</div>
    </div>
    
    <h1 class="text-2xl font-bold mb-2 tracking-wide uppercase">
      YOUB
    </h1>
    
    <p class="text-white/60 text-lg">
      <span class="font-medium text-white">{{ type.charAt(0).toUpperCase() + type.slice(1) }}</span> scan detected...
    </p>
    
    <div class="mt-16 flex items-center gap-2 text-white/40 text-sm italic">
      <span class="inline-block w-4 h-[1px] bg-white/20" />
      Redirecting
      <span class="inline-block w-4 h-[1px] bg-white/20" />
    </div>
  </div>
</template>

<style scoped>
.font-sans {
  font-family: 'Montserrat', sans-serif;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
