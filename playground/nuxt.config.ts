export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  compatibilityDate: '2025-04-15',

  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },
})
