// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt on Containify',
      htmlAttrs: { lang: 'en' },
    },
  },
  // Values here can be overridden at runtime by NUXT_ variables, e.g. NUXT_PUBLIC_GREETING.
  runtimeConfig: {
    public: {
      greeting: 'Hello from Nuxt',
    },
  },
})
