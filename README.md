
# Clon Empresarial de WhatsApp

## Descripción del proyecto

Clon de WhatsApp orientado a un entorno empresarial. Permite a los usuarios registrarse, iniciar sesión y mantener conversaciones simuladas dentro de un entorno corporativo.  
La aplicación cuenta con animaciones suaves, interfaz responsiva y una experiencia de chat similar a las aplicaciones de mensajería reales.

---

## Tecnologías utilizadas

- **React** – Biblioteca principal para construir la interfaz de usuario.  
- **CSS3** – Estilos personalizados, con flexbox y grid para diseño responsivo.  
- **LocalStorage** – Persistencia de datos de usuario y sesiones.  
- **Swal.fire** – Alertas y notificaciones interactivas.  
- **DeepWiki** – Documentación adicional del proyecto.  
- **Vercel** – Plataforma de despliegue online.  
- **README.md** – Documentación y guía del proyecto.  

---
# Estructura del proyecto

## Dependencias instaladas por npm
node_modules/        
## Archivos estáticos accesibles públicamente 
public/              
## Código fuente principal
src/           
## Componentes reutilizables (Aside.jsx, Chat.jsx, RouteProtected.jsx)
components/      
## Manejo de estado global (ChatContext.jsx)
context/         
## Páginas de la aplicación (documentacion.jsx, Registro.jsx)
pages/            
## Configuración de rutas (RouterApp.jsx)
 router/           
## Simulación de API o manejo de datos (mockApi.js)
services/         
## Archivos CSS globales (main.css)
styles/           
## Vistas principales (Home.jsx, Login.jsx, NotFound.jsx, main.jsx)
views/            
.

##  Instrucciones para ejecutar el proyecto localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/bySanzzz/proyecto-final-front-end-utn

```

2. Entrar a la carpeta del proyecto:

```bash

cd proyecto-final-front-end-utn

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
# Pasos para hacer deploy al proyecto

**Paso 1** Entrá a https://vercel.com/

**Paso 2** Hacé clic en Sign Up y conectate con tu GitHub (recomendado) o GitLab/Bitbucket.

**Paso 3** Permití el acceso a tus repositorios cuando te lo pida.

**Paso 4** Importa el proyecto que te interese

**Paso 5** Te creara ya tu link para que puedas visualizar tu Vercel (En mi caso, https://proyecto-final-front-end-utn.vercel.app/)