export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },
})
