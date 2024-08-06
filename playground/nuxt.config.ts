export default defineNuxtConfig({
  modules: ['../src/module'],
  ollama: {
    protocol: 'http',
    host: 'localhost',
    port: 11434,
  },
  devtools: { enabled: true },
})
