/// <reference types="vite/client" />

// Definimos la configuración del widget
export interface WidgetConfig {
  publicKey: string;
  theme?: "light" | "dark";
}

// Extendemos el tipo Window para incluir initChatWidget
declare global {
  interface Window {
    initChatWidget: (config: WidgetConfig) => void;
  }
}

// Permitimos importar archivos CSS como string con ?inline
declare module "*?inline" {
  const content: string;
  export default content;
}
