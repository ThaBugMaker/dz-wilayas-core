# DZ Wilayas Explorer

An interactive explorer and developer playground for Algeria's wilayas and baladiyat, powered by [`dz-wilayas-core`](https://www.npmjs.com/package/dz-wilayas-core).

## Overview

DZ Wilayas Explorer provides a visual way to browse Algeria's administrative divisions while demonstrating the capabilities of the `dz-wilayas-core` package.

It combines a public-facing data explorer with practical API examples for developers.

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS v4
- dz-wilayas-core

## Getting Started

From this directory:

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Package

The playground consumes the published `dz-wilayas-core` npm package rather than importing the library's local source files.

## Deployment

The playground can be deployed independently using Netlify.

| Setting           | Value        |
| ----------------- | ------------ |
| Base directory    | `playground` |
| Build command     | `pnpm build` |
| Publish directory | `dist`       |

## License

MIT — see the repository's [LICENSE](../LICENSE) file.
