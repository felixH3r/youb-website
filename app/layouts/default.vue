<template>
  <div class="min-h-screen flex flex-col">
    <CommonNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>
