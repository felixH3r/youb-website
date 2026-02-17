// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://youb.app",
    name: "YOUB",
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@storyblok/nuxt",
    "@nuxt/eslint",
    "nuxt-gtag",
  ],
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || "G-XXXXXXXXXX",
    initMode: "manual",
  },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
    ],
    defaultLocale: "de",
    langDir: "locales",
    strategy: "no_prefix",
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    bridge: true,
    devtools: true,
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
