export default defineNuxtConfig({

  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-10-29',

  // ollama: {
  //   protocol: 'http',
  //   host: 'localhost',
  //   port: 11434,
  // },

  ollama: {
    protocol: 'https',
    host: 'ollama.com',
    api_key: process.env.OLLAMA_API_KEY,
  },
})
