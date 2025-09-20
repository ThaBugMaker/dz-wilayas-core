import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DzWilayasCore",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    outDir: "lib", // output folder
    emptyOutDir: true,
    rollupOptions: {
      external: [], // list dependencies to exclude
    },
  },
});
