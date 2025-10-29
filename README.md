# <img src="./nuxt-ollama.png" style="width:50px;"> Nuxt Ollama

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Simple integration of the official Ollama JavaScript Library for your Nuxt application.

You have to install Ollama to use this module. See [Official Website](https://ollama.com/download) to download it for your system.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

- [🏀 Online playground](https://stackblitz.com/github/jericho1060/nuxt-ollama?file=playground%2Fapp.vue)

- [📖 &nbsp;Documentation](https://nuxt-ollama.jericho.dev/)

## Quick Setup

Install the module to your Nuxt application with one command:
- using npm
```bash
npx nuxi module add nuxt-ollama

```
- using pnpm
```bash
pnpx nuxi module add nuxt-ollama
```

That's it! You can now use Nuxt Ollama in your Nuxt app ✨

## Features

- Vue 3 composable
- Server utils

## Usage

Usage on pages or server side:

```ts
const ollama = useOllama()

const response = await ollama.chat({
  model: 'gpt-oss:120b',
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
})
console.log(response.message.content)
```

See [documentation](https://nuxt-ollama.jericho.dev/) for more information or examples.

## Settings

### Local models

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  //...
  ollama: {
    protocol: 'http', // or 'https'
    host: 'localhost', //domain or ip address
    port: 11434, // port
    proxy: false, // use proxy
  }
})
```

### - Cloud models with API key on https://ollama.com

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  //...
  ollama: {
    protocol: 'https', // or 'https'
    host: 'ollama.com', //domain or ip address
    api_key: 'your_api_key_here' // your Ollama API key
  }
})
```


## Contribution

Contributions are welcome, feel free to open an issue or submit a pull request!

Please see the [contributing guide](CONTRIBUTING.md) for details.

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm run dev:prepare
  
  # Develop with the playground
  pnpm run dev
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
