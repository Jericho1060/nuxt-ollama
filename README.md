# Nuxt Ollama

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Simple integration of the official Ollama JavaScript Library for your Nuxt application.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

<!-- - [🏀 Online playground](https://stackblitz.com/github/jericho/nuxt-ollama?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Vue 3 composable
- Server utils

usage on pages or server side:
```ts
const ollama = useOllama()

const response = await ollama.chat({
  model: 'llama3.1',
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
})
console.log(response.message.content)
```

See official [Ollama JavaScript Library documentation](https://github.com/ollama/ollama-js) for more information or examples.

## Settings

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ollama: {
    protocol: 'http', // or 'https'
    host: 'localhost', //domain or ip address
    port: 11434, // port
    proxy: false, // use proxy
  }
})
```

## Quick Setup

Install the module to your Nuxt application with one command: *(Pending module approval on Nuxt Module)*
```bash
npx nuxi module add nuxt-ollama
```

<details>
<summary>Or install it with your favorite package manager:</summary>

```bash
# NPM:
npm install nuxt-ollama

# PNPM:
pnpm add nuxt-ollama

# Yarn:
yarn add nuxt-ollama

# Bun
bun add nuxt-ollama
```

Add `nuxt-ollama` to the `modules` section of `nuxt.config.js`:

```ts
// nuxt.config.ts
export default {
  modules: [
    'nuxt-ollama',
  ],
}
```
</details>

That's it! You can now use Nuxt Ollama in your Nuxt app ✨

## Contribution

Contributions are welcome, feel free to open an issue or submit a pull request!

*guidelines coming soon*

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-ollama/latest.svg?style=flat&colorA=020420&colorB=00DC82

[npm-version-href]: https://npmjs.com/package/nuxt-ollama

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-ollama.svg?style=flat&colorA=020420&colorB=00DC82

[npm-downloads-href]: https://npmjs.com/package/nuxt-ollama

[license-src]: https://img.shields.io/npm/l/nuxt-ollama.svg?style=flat&colorA=020420&colorB=00DC82

[license-href]: https://npmjs.com/package/nuxt-ollama

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js

[nuxt-href]: https://nuxt.com
