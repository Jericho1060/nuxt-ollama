export default defineEventHandler(async () => {
  const ollama = useOllama()
  return await ollama.chat({
    model: 'gpt-oss:120b',
    messages: [
      {
        role: 'user',
        content: 'Hello',
      },
    ],
    think: false,
  })
})
