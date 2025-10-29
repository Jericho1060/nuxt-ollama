import { defineNuxtModule, createResolver, addImports, addServerImportsDir } from '@nuxt/kit'
import { defu } from 'defu'
import type { OllamaOptions } from './types'

// Module options TypeScript interface definition
export interface ModuleOptions extends OllamaOptions {
  protocol: string
  host: string
  port: number | null
  proxy: boolean
  api_key: string | null
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-ollama',
    configKey: 'ollama',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    protocol: 'http',
    host: 'localhost',
    port: null,
    proxy: false,
    api_key: null,
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // expose options to runtime config
    const runtimeConfig = _nuxt.options.runtimeConfig
    const currentConfig = (runtimeConfig.public.ollama ?? {}) as OllamaOptions
    runtimeConfig.public.ollama = defu(currentConfig, _options)

    addImports({
      name: 'useOllama',
      as: 'useOllama',
      from: resolver.resolve('./runtime/composables/useOllama'),
    })

    addImports({
      name: 'useOllamaUtils',
      as: 'useOllamaUtils',
      from: resolver.resolve('./runtime/composables/useOllamaUtils'),
    })

    addServerImportsDir(resolver.resolve('./runtime/server/utils'))
  },
})
