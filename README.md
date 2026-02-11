# 💬 Custom Chatbot Widget



Un widget de chat ultraligero diseñado para ser embebido en cualquier sitio web. Implementado con un aislamiento total mediante **Shadow DOM**, garantizando que los estilos de la web del cliente no interfieran con la interfaz del chatbot.

---

### 🛠️ Tecnologías Usadas

![Preact](https://img.shields.io/badge/Preact-673AB8?style=for-the-badge&logo=preact&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-58C7EB?style=for-the-badge&logo=daisyui&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-f9f1e1?style=for-the-badge&logo=bun&logoColor=black)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

---

### ✨ Características Destacadas

* **🚀 Peso Pluma:** Solo **57KB** totales, minimizando el impacto en el *Core Web Vitals* del cliente.
* **🛡️ Shadow DOM:** Encapsulamiento total. Los estilos globales del cliente no afectan al widget.
* **🎨 Branding Personalizado:** Soporte nativo para inyectar colores de marca (`primaryColor`) dinámicamente mediante CSS dinámico.
* **🌓 Smart Dark Mode:** Cambio automático de tema basado en preferencias del sistema (Winter ❄️ vs Luxury 💎).
* **🌐 CORS Friendly:** Configuración nativa para Cloudflare Pages permitiendo despliegues seguros en cualquier dominio.

---

### 🚀 Guía de Integración

El widget se carga de forma asíncrona para no bloquear el renderizado del sitio anfitrión.

```html
<script src="[https://widget-chatbot-example.pages.dev/widget.bundle.js)" async></script>

<script>
  window.addEventListener('load', () => {
    if (window.initChatWidget) {
      window.initChatWidget({
        publicKey: 'TU_API_KEY_AQUÍ',
        theme:'light' // 'light' | 'dark'
      });
    }
  });
</script>
