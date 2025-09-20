# dz-wilayas-core

![npm](https://img.shields.io/npm/v/dz-wilayas-core?color=blue) ![license](https://img.shields.io/npm/l/dz-wilayas-core?color=green)

**A TypeScript library providing Algeria's wilayas and baladiyat data with utility classes for easy lookup, search, and integration in any JavaScript or TypeScript project.**

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Data](#data)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

```bash
npm install dz-wilayas-core
# or
yarn add dz-wilayas-core
```

---

## Usage

```ts
import { WilayasStore, Wilaya, Baladiya } from "dz-wilayas-core";

const store = new WilayasStore();

// Get all wilayas
const allWilayas: Wilaya[] = store.getAllWilayas();

// Get a wilaya by code
const algerWilaya = store.getWilayaByCode("16");

// Search wilayas by name
const searchResults = store.searchWilayaByName("Oran");

// Get all baladiyat for a wilaya
const algerBaladiyat: Baladiya[] = store.getBaladiyatByWilayaCode("16");

console.log(algerWilaya, algerBaladiyat);
```

---

## API

### `class WilayasStore`

| Method                                               | Description                                |
| ---------------------------------------------------- | ------------------------------------------ |
| `getAllWilayas(): Wilaya[]`                          | Returns all wilayas.                       |
| `getWilayaByCode(code: string): Wilaya \| undefined` | Find a wilaya by its code.                 |
| `searchWilayaByName(name: string): Wilaya[]`         | Search wilayas by name (case-insensitive). |
| `getBaladiyatByWilayaCode(code: string): Baladiya[]` | Get all baladiyat for a given wilaya code. |

---

## Data

- **Wilaya** object example:

```ts
interface Wilaya {
  id: string;
  code: string;
  name: string;
  ar_name: string;
}
```

- **Baladiya** object example:

```ts
interface Baladiya {
  id: string;
  wilaya_id: string;
  name: string;
  ar_name: string;
}
```

All data is **preloaded from JSON** and typed for TypeScript.

---

## TypeScript Support

- Fully **typed** out-of-the-box.
- Provides `Wilaya` and `Baladiya` types.
- Includes `.d.ts` files for complete IDE autocompletion.

---

## Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
