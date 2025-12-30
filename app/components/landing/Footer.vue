<template>
  <footer class="p-4 mt-32 mb-10">
    <div class="container mx-auto flex flex-col gap-4 items-center">
      <nav class="mt-2">
        <ul class="flex gap-10">
          <li>
            <NuxtLink href="/privacy-policy" class="hover:text-gray-500 font-sans" >Privacy Policy</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/legal-notice" class="hover:text-gray-500">Legal Notice</NuxtLink>
          </li>
          <li>
            <NuxtLink href="mailto:felix@youb.app" class="hover:text-gray-500">Contact Us</NuxtLink>
          </li>
        </ul>
      </nav>
      <p class="text-sm font-light text-center">
        &copy; 2025 YOUB. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
