<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Make your health data finally worth tracking.
      </h1>
      <p class="text-lg font-light text-gray-600 mt-4  max-w-xl">
        Understand your body like never before — through AI-powered interpretation of your wearable data.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/launching-soon"
          rel="noopener"
          >Get Started</LandingLink
        >
      </div>
    </div>
  </main>
</template>
