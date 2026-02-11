import { useEffect, useState } from "preact/hooks";
import styles from "./index.css?inline";
import type { WidgetConfig } from "../vite-env";

interface WidgetProps {
  config: WidgetConfig;
}

export function Widget({ config }: WidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState("winter");

  // Toggle manual: Alternamos entre tus dos temas específicos
  const toggleTheme = () => {
    setTheme((prev) => (prev === "winter" ? "luxury" : "winter"));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Si el sistema es dark -> ponemos luxury. Si no -> winter
      setTheme(mediaQuery.matches ? "luxury" : "winter");
    };

    handleChange(); // Detectar al cargar

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div id="widget-root" data-theme={theme}>
      {/* Inyectamos estilos */}
      <style>{styles}</style>

      {/* Botón Flotante */}
      <div className="fixed top-4 right-4 z-9999">
        <button
          className="btn btn-circle btn-primary shadow-xl transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Icono X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Icono Chat
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Ventana del Chat */}
      {isOpen && (
        <div className="card shadow-2xl bg-base-100 card-border border-base-300 card-sm fixed top-20 right-4 z-9999 animate-fade-in-up overflow-hidden w-sm ">
          <div>
            {/* Header */}
            <div className="bg-base-300 p-4 relative">
              <h3 className="font-bold text-lg">Asistente Virtual</h3>
              <p className="text-xs opacity-80">En línea ahora</p>
              <p className="text-xs opacity-80">{config.publicKey}</p>
              <label className="flex cursor-pointer gap-2 absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="luxury"
                  className="toggle theme-controller"
                  onChange={toggleTheme}
                  checked={theme === "luxury"}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-64 overflow-y-auto bg-base-100">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border border-base-300">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Felix" />
                  </div>
                </div>
                <div className="chat-header text-xs opacity-50 mb-1">Bot</div>
                <div className="chat-bubble chat-bubble-secondary">
                  ¡Hola! Detecté que tu sistema está en modo{" "}
                  <strong>{theme}</strong>. 🌗
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-2 border-t border-base-200 bg-base-100">
              <div className="join w-full">
                <input
                  className="input input-bordered input-sm w-full join-item focus:outline-none"
                  placeholder="Escribe un mensaje..."
                />
                <button className="btn btn-sm btn-primary join-item">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
