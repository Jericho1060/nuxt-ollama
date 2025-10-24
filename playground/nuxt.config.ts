export default defineNuxtConfig({

  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-10-24',

  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },
})
