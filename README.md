# dz-wilayas-core 🇩🇿
![npm](https://img.shields.io/npm/v/dz-wilayas-core?color=white&style=for-the-badge&logo=npm&logoColor=white)
![npm downloads](https://img.shields.io/npm/dm/dz-wilayas-core?color=black&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjIyIDExLjc2Ij48cG9seWdvbiBwb2ludHM9IjQuNTkgNC45NCA0LjU5IDAgMi42MiAwIDIuNjIgNC45NCAwIDQuOTQgMy4yOCA5LjUzIDcuMjIgNC45NCA0LjU5IDQuOTQiLz48cmVjdCB4PSIwLjExIiB5PSIxMC43NiIgd2lkdGg9IjciIGhlaWdodD0iMSIvPjwvc3ZnPg==&logoColor=white)
![license](https://img.shields.io/npm/l/dz-wilayas-core?&logoColor=orange&color=orange&style=for-the-badge&logo=open-source-initiative)
![npm bundle size](https://img.shields.io/bundlephobia/min/dz-wilayas-core?color=lightblue&style=for-the-badge&logo=webpack&logoColor=lightblue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript&style=for-the-badge&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/ThaBugMaker/dz-wilayas-core?color=yellow&style=for-the-badge&logo=github&logoColor=yellow)
![GitHub last commit](https://img.shields.io/github/last-commit/ThaBugMaker/dz-wilayas-core?&style=for-the-badge&logo=git&logoColor=F05032&color=F05032)
![GitHub issues](https://img.shields.io/github/issues/ThaBugMaker/dz-wilayas-core?color=red&style=for-the-badge&logo=github&logoColor=red)



**A TypeScript library providing Algeria's wilayat and baladiyat data with utility classes for easy lookup, search, and integration in any JavaScript or TypeScript project.**

---

## 📑 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Data](#data)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [Author](#author)
- [Credits](#credits)
- [License](#license)

---

## ⚡ Installation

```bash
npm install dz-wilayas-core
# or
yarn add dz-wilayas-core
```

---

## 🚀 Usage

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

## 🔌 API

### `class WilayasStore`

| Method                                               | Description                                |
| ---------------------------------------------------- | ------------------------------------------ |
| `getAllWilayas(): Wilaya[]`                          | Returns all wilayas.                       |
| `getWilayaByCode(code: string): Wilaya \| undefined` | Find a wilaya by its code.                 |
| `searchWilayaByName(name: string): Wilaya[]`         | Search wilayas by name (case-insensitive). |
| `getBaladiyatByWilayaCode(code: string): Baladiya[]` | Get all baladiyat for a given wilaya code. |

---

## 📊 Data

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

## 🟦 TypeScript Support

- Fully **typed** out-of-the-box.
- Provides `Wilaya` and `Baladiya` types.
- Includes `.d.ts` files for complete IDE autocompletion.

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request
6. After your PR is merged, **uncomment the Contributors block below** and add yourself by replacing `<YourUsername>` with your GitHub username.

<!-- --- -->

<!-- 
 ## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/<YourUsername>">
        <img src="https://avatars.githubusercontent.com/<YourUsername>" width="80px;" alt="<YourUsername>"/><br />
        <sub><b><YourUsername></b></sub>
      </a>
    </td>
  </tr>
</table> -->


---

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ThaBugMaker">
      <img src="https://avatars.githubusercontent.com/u/118787817?v=4" width="80px" style="border-radius:50%;" alt="ThaBugMaker"/><br>
        <sub><b>ThaBugMaker</b></sub>
      </a>
    </td>
  </tr>
</table>

---
## 🙏 Credits

- **Data source:** [Wilaya-Of-Algeria](https://github.com/AbderrahmeneDZ/Wilaya-Of-Algeria) by [AbderrahmeneDZ](https://github.com/AbderrahmeneDZ) and [yamanidev](https://github.com/yamanidev)

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<p align="center">© 2025 ThaBugMaker All rights reserved.</p>
