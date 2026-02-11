import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

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
      output: {
        // Forzamos que todo quede en un archivo si es posible
        entryFileNames: "widget.bundle.js",
        // manualChunks: undefined, // A veces ayuda a evitar code-splitting
      },
    },
  },
});
