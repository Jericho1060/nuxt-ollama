export interface OllamaMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  created_at?: Date
}
