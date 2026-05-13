<script setup lang="ts">
const { locale, setLocale } = useI18n();

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
  wide?: boolean;
};

const footerSectionsByLocale: Record<string, FooterSection[]> = {
  de: [
    {
      title: "Produkt",
      links: [
        { label: "KI-Ausdauercoach", href: "/" },
        { label: "Coaching per Chat", href: "/how-it-works" },
        { label: "Adaptive Trainingsplanung", href: "/google-calendar-training" },
        { label: "Häufige Fragen", href: "/faq" },
      ],
    },
    {
      title: "Integrationen",
      links: [
        { label: "Garmin-KI-Coach", href: "/garmin-ai-coach" },
        { label: "Strava-KI-Coach", href: "/strava-ai-coach" },
        { label: "WHOOP-Trainingscoach", href: "/whoop-training-coach" },
        { label: "Training mit Google Kalender", href: "/google-calendar-training" },
      ],
    },
    {
      title: "Sportarten",
      links: [
        { label: "Triathlon-Coach", href: "/triathlon-coach" },
        { label: "Laufcoach", href: "/running-coach" },
        { label: "Radsport-Coach", href: "/cycling-coach" },
        { label: "Ironman-Trainingsapp", href: "/ironman-training-app" },
      ],
    },
    {
      title: "Vergleiche",
      wide: true,
      links: [
        { label: "Alternative zu Join Cycling", href: "/join-cycling-alternative" },
        { label: "Alternative zu Humango", href: "/humango-alternative" },
        { label: "Alternative zu TriDot", href: "/tridot-alternative" },
        { label: "Alternative zu enduco", href: "/enduco-alternative" },
        { label: "Alternative zu Runna", href: "/runna-alternative" },
        { label: "Alternative zu WHOOP Coach", href: "/whoop-coach-alternative" },
        { label: "Alternative zu Garmin Coaching", href: "/garmin-coaching-alternative" },
        { label: "Alternative zu menschlichem Trainer", href: "/menschlicher-trainer-alternative" },
        { label: "Alternative zu Xert", href: "/xert-alternative" },
      ],
    },
    {
      title: "Ressourcen",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Mission", href: "/mission" },
        { label: "Hilfe-Center", href: "/support" },
        { label: "Aktivität analysieren", href: "/analysis" },
      ],
    },
    {
      title: "Vertrauen",
      links: [
        { label: "DSGVO-konform", href: "/privacy-policy" },
        { label: "EU AI Act vorbereitet", href: "/privacy-policy" },
        { label: "HYCYS Sportwissenschaft", href: "/how-it-works" },
        { label: "Datenschutz", href: "/privacy-policy" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Datenschutzerklärung", href: "/privacy-policy" },
        { label: "Impressum", href: "/legal-notice" },
        { label: "Datenlöschung", href: "/privacy-policy#account-deletion" },
        { label: "Kontakt", href: "/contact" },
      ],
    },
  ],
  en: [
    {
      title: "Product",
      links: [
        { label: "AI Endurance Coach", href: "/" },
        { label: "Chat-first Coaching", href: "/how-it-works" },
        { label: "Adaptive Training Planning", href: "/google-calendar-training" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { label: "Garmin AI Coach", href: "/garmin-ai-coach" },
        { label: "Strava AI Coach", href: "/strava-ai-coach" },
        { label: "WHOOP Training Coach", href: "/whoop-training-coach" },
        { label: "Google Calendar Training", href: "/google-calendar-training" },
      ],
    },
    {
      title: "Sports",
      links: [
        { label: "Triathlon Coach", href: "/triathlon-coach" },
        { label: "Running Coach", href: "/running-coach" },
        { label: "Cycling Coach", href: "/cycling-coach" },
        { label: "Ironman Training App", href: "/ironman-training-app" },
      ],
    },
    {
      title: "Comparisons",
      wide: true,
      links: [
        { label: "Join Cycling Alternative", href: "/join-cycling-alternative" },
        { label: "Humango Alternative", href: "/humango-alternative" },
        { label: "TriDot Alternative", href: "/tridot-alternative" },
        { label: "enduco Alternative", href: "/enduco-alternative" },
        { label: "Runna Alternative", href: "/runna-alternative" },
        { label: "WHOOP Coach Alternative", href: "/whoop-coach-alternative" },
        { label: "Garmin Coaching Alternative", href: "/garmin-coaching-alternative" },
        { label: "Human Coach Alternative", href: "/menschlicher-trainer-alternative" },
        { label: "Xert Alternative", href: "/xert-alternative" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Mission", href: "/mission" },
        { label: "Support", href: "/support" },
        { label: "Analyze Activity", href: "/analysis" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "GDPR compliant", href: "/privacy-policy" },
        { label: "AI Act ready", href: "/privacy-policy" },
        { label: "HYCYS sports science", href: "/how-it-works" },
        { label: "Privacy", href: "/privacy-policy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Legal Notice", href: "/legal-notice" },
        { label: "Data Deletion", href: "/privacy-policy#account-deletion" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};

const footerSections = computed(
  () => footerSectionsByLocale[locale.value] ?? footerSectionsByLocale.de,
);

const footerDescription = computed(() =>
  locale.value === "de"
    ? "YOUB ist der KI-Ausdauercoach per Chat für Läufer:innen, Radfahrer:innen und Triathlet:innen. Coaching als Dialog, nicht als statischer Plan."
    : "YOUB is the chat-first AI endurance coach for runners, cyclists, and triathletes. Coaching as a dialogue, not as a static plan.",
);

const integrationStatus = computed(() =>
  locale.value === "de"
    ? ["Garmin", "Strava", "WHOOP", "Oura", "Polar", "Suunto", "Wahoo live", "COROS kommt bald"]
    : ["Garmin", "Strava", "WHOOP", "Oura", "Polar", "Suunto", "Wahoo live", "COROS coming soon"],
);

const toggleLanguage = () => {
  const nextLocale = locale.value === "de" ? "en" : "de";
  setLocale(nextLocale);
};
</script>

<template>
  <footer
    class="w-full border-t border-white/10 bg-black px-6 py-16 relative z-20"
  >
    <div
      class="max-w-7xl mx-auto"
    >
      <div class="grid gap-12 lg:grid-cols-[0.9fr_2.25fr]">
        <div class="max-w-sm">
          <NuxtLink :to="$localePath('/')" class="inline-flex items-center gap-2 group">
            <img
              src="/youb-logo-white-on-transparent-512x512.png"
              alt="YOUB Logo"
              class="h-14 w-auto"
            >
          </NuxtLink>
          <p class="mt-6 text-sm leading-relaxed text-white/45">
            {{ footerDescription }}
          </p>
          <p class="mt-6 text-sm text-white/35">
            {{ $t("footer.rights") }}
          </p>
        </div>

        <nav class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="section in footerSections"
            :key="section.title"
            class="min-w-0"
            :class="section.wide ? 'lg:col-span-2' : ''"
          >
            <h2 class="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
              {{ section.title }}
            </h2>
            <ul
              class="mt-4"
              :class="section.wide ? 'grid gap-x-8 gap-y-3 sm:grid-cols-2' : 'space-y-3'"
            >
              <li v-for="link in section.links" :key="`${section.title}-${link.href}`">
                <NuxtLink
                  :to="$localePath(link.href)"
                  class="text-sm leading-relaxed text-white/55 transition-colors hover:text-white"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-wrap gap-3 text-xs text-white/35">
          <span v-for="status in integrationStatus" :key="status">
            {{ status }}
          </span>
        </div>

        <button
          class="cursor-pointer group flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          @click="toggleLanguage"
        >
          <Icon
            name="heroicons:language"
            class="w-4 h-4 text-white/40 transition-colors group-hover:text-white"
          />
          <span
            class="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white"
          >
            {{ locale === "de" ? "EN" : "DE" }}
          </span>
          <div
            class="w-1.5 h-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-white"
          />
        </button>
      </div>
    </div>
  </footer>
</template>
