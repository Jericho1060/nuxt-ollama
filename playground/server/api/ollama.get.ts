export default defineEventHandler(async () => {
  const ollama = useOllama()
  return await ollama.chat({
    model: 'llama3.2',
    messages: [
      {
        role: 'user',
        content: 'Hello',
      },
    ],
    think: false,
  })
})
