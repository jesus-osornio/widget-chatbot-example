import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [preact(), tailwindcss()],
  build: {
    target: "esnext", // Apuntamos a un entorno moderno
    lib: {
      // Definimos que esto es una librería/widget
      entry: "src/main.tsx",
      name: "ChatWidget",
      fileName: "widget",
      formats: ["es"], // Formato módulo moderno
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Tu landing page
        widget: resolve(__dirname, "src/main.tsx"), // Tu script del widget
      },
      output: {
        // Configuramos los nombres de salida
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "widget"
            ? "widget.bundle.js"
            : "assets/[name]-[hash].js";
        },
        // Esto es para que el CSS y otros archivos no rompan el nombre
        assetFileNames: "assets/[name]-[hash][extname]",
        format: "es",
      },
    },
  },
});
