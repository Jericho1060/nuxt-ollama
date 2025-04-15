export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },

  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },

  compatibilityDate: '2025-04-15',
})