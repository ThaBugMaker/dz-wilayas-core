# dz-wilayas-core 🇩🇿

[![npm version](https://img.shields.io/npm/v/dz-wilayas-core)](https://www.npmjs.com/package/dz-wilayas-core)
[![npm downloads](https://img.shields.io/npm/dm/dz-wilayas-core)](https://www.npmjs.com/package/dz-wilayas-core)
[![License](https://img.shields.io/npm/l/dz-wilayas-core)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

A lightweight TypeScript library providing Algeria's wilaya and baladiya data, with utilities for lookup and search in JavaScript and TypeScript projects.

**Current release:** `v1.1.0`

📚 **[Official Documentation](https://dz-wilayas-core.netlify.app/#introduction)** · [npm Package](https://www.npmjs.com/package/dz-wilayas-core) · [GitHub Repository](https://github.com/ThaBugMaker/dz-wilayas-core)

---

## Installation

```bash
npm install dz-wilayas-core
```

Or with pnpm:

```bash
pnpm add dz-wilayas-core
```

## Quick Start

```ts
import { WilayasStore } from "dz-wilayas-core";

const store = new WilayasStore();

// Get all wilayas
const wilayas = store.getAllWilayas();

// Find a wilaya by code
const alger = store.getWilayaByCode("16");

// Search wilayas by name
const results = store.searchWilayaByName("Oran");

// Get baladiyat for a wilaya
const baladiyat = store.getBaladiyatByWilayaCode("16");
```

## Features

- Algerian wilaya and baladiya datasets.
- Lookup wilayas by code.
- Search wilayas by name.
- Retrieve baladiyat by wilaya code.
- TypeScript declarations included.
- Works with JavaScript and TypeScript projects.

For the complete API reference, data structure details, and usage examples, see the **[official documentation](https://dz-wilayas-core.netlify.app/#wilayas-store)**.

## Credits

- **Original data source:** [Wilaya-Of-Algeria](https://github.com/AbderrahmeneDZ/Wilaya-Of-Algeria) by [AbderrahmeneDZ](https://github.com/AbderrahmeneDZ) and [yamanidev](https://github.com/yamanidev).
- **2025–2026 administrative update (69 wilayas):** [DZBuild – Algeria's 69 Wilayas List](https://dzbuild.com/blog/algeria-69-wilayas-list-2025-2026), used as a reference for the CSV datasets.

## License

MIT © 2025–2026 [ThaBugMaker](https://github.com/ThaBugMaker)

See [LICENSE](./LICENSE) for details.
