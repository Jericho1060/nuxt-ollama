export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['../src/module'],

  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },

  compatibilityDate: '2025-04-15',
})
