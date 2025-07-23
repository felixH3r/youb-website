<script setup>
const features = [
  {
    title: "Bring Your Own Wearable",
    description:
      "Connect Garmin, Suunto, Whoop and more. Your data, your choice.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Clear, Interpretable Insights",
    description:
      "We turn raw data into meaningful stories — no guessing, just clarity.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Understand what your body is telling you. Instantly. Day by day.",
    icon: "bx:bxs-data",
  },
  {
    title: "Built for Understanding",
    description:
      "Get easy-to-grasp trends without medical jargon or data overload.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Private by Design",
    description:
      "All data is encrypted and stored in the EU. GDPR compliant by default.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community-Led Development",
    description:
      "Built together with real users. Transparent, open-minded and evolving.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold ">
        Everything you need to understand your health.
      </h2>
      <p class="mt-4 text-lg font-light text-gray-600">
        We simplify your wearable data and give it meaning — safely and clearly.
      </p>
    </div>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-800 mt-2 font-thin leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
