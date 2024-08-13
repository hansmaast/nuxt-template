// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/devtools', '@nuxtjs/tailwindcss'],
  eslint: {
    config: {
      stylistic: true, // allows formatting as well as linting
    },
  },
})
