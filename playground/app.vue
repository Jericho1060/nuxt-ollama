<template>
  <div>
    Nuxt module playground!
    <div
      v-for="(m, i) in messages"
      :key="'message_'+i"
    >
      <strong>{{ m.role }}</strong>
      <div v-html="m.content.replaceAll('\n', '<br>')" />
      <hr>
    </div>
    <div>
      <input
        v-model="chatMessage"
        style="width: 100%;margin-top: 5px;"
        @keyup.enter="send"
      >
      <button
        style="margin:5px;"
        @click="send"
      >
        Send
      </button>
      <button
        style="margin:5px;"
        @click="messages.length = 0"
      >
        clear
      </button>
    </div>
  </div>
  <div style="margin-top:50px;">
    <pre>{{ response }}</pre>
    <button @click="refresh()">
      Refresh
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { OllamaMessage } from '../src/types'

const ollama = useOllama()

const chatMessage = ref<string>('')

const messages = ref<OllamaMessage[]>([])

const send = async () => {
  messages.value.push({ role: 'user', content: chatMessage.value })
  chatMessage.value = ''
  const response = await ollama.chat({
    model: 'llama3.1',
    messages: messages.value,
    stream: true,
  })

  const length = messages.value.length

  for await (const part of response) {
    if (messages.value[length] === undefined) {
      messages.value.push({
        created_at: new Date(),
        role: 'assistant',
        content: '',
      })
    }
    messages.value[length].content += part.message.content
  }
}

const { data: response, refresh } = await useFetch('/api/ollama')
</script>
