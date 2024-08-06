export default defineEventHandler(() => {
  const ollama = useOllama()
  return ollama.chat({
    model: 'llama3.1',
    messages: [
      {
        role: 'user',
        content: 'Hello',
      },
    ],
  })
})
