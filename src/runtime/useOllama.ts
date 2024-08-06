import { Ollama } from 'ollama'
import type { ModuleOptions } from '../module'
import { useRuntimeConfig } from '#imports'

export function useOllama() {
  const options: ModuleOptions = useRuntimeConfig().public.ollama as ModuleOptions
  return new Ollama({
    host: `${options.protocol}://${options.host}:${options.port}`,
    proxy: options.proxy,
  })
}
