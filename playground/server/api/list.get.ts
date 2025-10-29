export default defineEventHandler(async () => {
  const ollama = useOllama()
  return (await ollama.list()).models
})
