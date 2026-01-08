<script setup>
const { t } = useI18n();

const teamMembers = [
  {
    name: t("mission.team.member1.name"),
    role: t("mission.team.member1.role"),
    text: t("mission.team.member1.text"),
    image: "/KotlFinish.jpeg",
    delay: 300,
  },
  {
    name: t("mission.team.member2.name"),
    role: t("mission.team.member2.role"),
    text: t("mission.team.member2.text"),
    image: "/thomas.jpeg", // Scientist placeholder
    delay: 450,
  },
  {
    name: t("mission.team.member3.name"),
    role: t("mission.team.member3.role"),
    text: t("mission.team.member3.text"),
    image: "/markus.jpeg", // Professional placeholder
    delay: 600,
  },
];
</script>

<template>
  <section class="py-24 px-4 bg-black overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-20 px-4">
        <h2
          class="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000"
        >
          {{ t("mission.team.headline") }}
        </h2>
        <p
          class="text-lg md:text-xl font-light text-white/60 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-150"
        >
          {{ t("mission.team.subline") }}
        </p>
      </div>

      <!-- Team Cards -->
      <div class="grid md:grid-cols-3 gap-8 px-4">
        <CommonCard
          v-for="(member, index) in teamMembers"
          :key="index"
          :title="member.name"
          :subtitle="member.role"
          :text="member.text"
          :image="member.image"
          :delay="member.delay"
        />
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
