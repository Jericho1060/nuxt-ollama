export default defineEventHandler(() => {
  const ollama = useOllama()
  return ollama.chat({
    model: 'llama3.2',
    messages: [
      {
        role: 'user',
        content: 'Hello',
      },
    ],
  })
})
