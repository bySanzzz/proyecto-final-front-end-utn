import { Link } from "react-router-dom";

export const Documentacion = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>📘 Documentación del Proyecto</h1>

        <h2>Explicación del proyecto</h2>
        <p>
Mi aplicación es un clon empresarial de WhatsApp donde los usuarios pueden registrarse o iniciar sesión con su correo y contraseña, y luego utilizar el chat para comunicarse con otros contactos relacionados a una empresa.
</p>

        <h2>Partes principales de la aplicación</h2>
        <p>
El proyecto cuenta con los siguientes componentes: Login, Registro, Chat, Aside (lista de contactos) y Documentación del proyecto. 
Se utilizaron las siguientes tecnologías: React, CSS, LocalStorage, DeepWiki,Swal.fire, README y Vercel.
</p>

        <h2>Decisiones de desarrollo tomadas</h2>
        <p>
          Una de las principales decisiones de desarrollo fue utilizar
          LocalStorage para guardar la información de los usuarios registrados.
          Esto permite que, cuando la página se recargue, los datos no se
          pierdan y los usuarios puedan volver a iniciar sesión fácilmente sin
          tener que registrarse nuevamente; Ademas de utilizar estilos pasados del primer trabajo de este proyecto resideñado a mi gusto personal y el que mejor me parecio, no solo eso agregue notificaciones por errores y por registrarte.
        </p>

        <h2>Observaciones personales del estudiante</h2>
        <p>
          Este proyecto me resultó muy interesante, ya que me permitió poner en
          práctica distintos conceptos de desarrollo web utilizando React.
          Además, considero que es una aplicación que en el futuro podría
          mejorar incorporando nuevas herramientas y más funcionalidades.
        </p>

        

        <Link className="volver-btn" to="/login">
          Volver al Login
        </Link>
      </div>
    </div>
  );
};