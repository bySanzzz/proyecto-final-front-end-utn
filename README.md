# Chat de Fútbol  (Copia de WhatsApp)

##  Descripción del proyecto

Es una aplicación de chat inspirada en WhatsApp con una temática de fútbol. Permite a los usuarios iniciar sesión, registrarse, ver una lista de contactos (jugadores de fútbol famosos) y simular envío de mensajes en tiempo real. La aplicación cuenta con animaciones fluidas y es totalmente responsiva para dispositivos móviles.

---

##  Tecnologías utilizadas

* **React 19**: Biblioteca principal para la interfaz de usuario.
* **Vite**: Herramienta de construcción y servidor de desarrollo.
* **React Router 7**: Manejo de rutas (`BrowserRouter`).
* **Context API**: Manejo de estado global.
* **CSS3**: Estilos con flexbox, grid y media queries.
* **LocalStorage**: Persistencia de datos.

---

##  Instrucciones para ejecutar el proyecto localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/matiasfurque/Trabajo-final-copia-wpp-furque.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd Trabajo-final-copia-wpp-furque
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Abrir en el navegador:

```
http://localhost:5173/
```

---

##  Instrucciones para el deploy

El proyecto fue deployado utilizando **Vercel**.

Pasos realizados:

1. Subir el repositorio a GitHub.
2. Conectar el repositorio con Vercel.
3. Configurar el proyecto como aplicación Vite.
4. Realizar el deploy automático.

 Deploy online:
https://trabajo-final-copia-wpp-furque.vercel.app/
---

##  Estructura del proyecto

* **src/components**: Componentes reutilizables (`Chat`, `Aside`, `RouteProtected`)
* **src/context**: Manejo de estado global (`ChatContext`)
* **src/pages**: Páginas como `Acerca` y `Registro`
* **src/router**: Configuración de rutas
* **src/services**: Simulación de API (`mockApi.js`)
* **src/styles**: Estilos globales y responsive
* **src/views**: Vistas principales (`Home`, `Login`, `NotFound`)
* **index.html**: Entrada principal
* **vercel.json**: Configuración para deploy

---

##  DeepWiki

Documentación completa del proyecto:
https://deepwiki.com/matiasfurque/trabajo-final-copia-wpp-furque

