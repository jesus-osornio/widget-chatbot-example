import { render } from "preact";
import { Widget } from "./widget";
import styles from "./index.css?inline";

// 1. Definimos la función global (como ya tenías)
window.initChatWidget = (config) => {
  const containerId = "chat-widget-container";
  if (document.getElementById(containerId)) return;

  const host = document.createElement("div");
  host.id = containerId;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  // Inyectamos estilos DENTRO del Shadow DOM
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  shadow.appendChild(styleTag);

  render(<Widget config={config} />, shadow);
};

// ---------------------------------------------------------
// AGREGA ESTO AL FINAL:
// 2. Auto-inicializar si estamos en modo desarrollo (npm run dev)
if (import.meta.env.DEV) {
  window.initChatWidget({ publicKey: "test-key-dev" });
}
// ---------------------------------------------------------
