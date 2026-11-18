import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: "lib",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "DzWilayasCore",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    outDir: "lib",
    emptyOutDir: true,
    rollupOptions: {
      external: [],
    },
  },
});
