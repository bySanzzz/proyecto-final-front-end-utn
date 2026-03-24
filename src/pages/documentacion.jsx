import { Link } from "react-router-dom";

export const Documentacion = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>📘 Documentación del Proyecto</h1>

        <h2>Explicación del proyecto</h2>
        <p>
          Mi aplicación consiste en un clon de WhatsApp orientado a un entorno
          empresarial. En esta plataforma los usuarios pueden iniciar sesión
          utilizando su correo electrónico (Gmail) y su contraseña. En caso de
          no tener una cuenta, el sistema permite registrarse ingresando sus
          datos personales. Una vez dentro de la aplicación, los usuarios pueden
          acceder al sistema de chat para comunicarse con otros contactos.
        </p>

        <h2>Partes principales de la aplicación</h2>
        <ul>
          <li>Login</li>
          <li>Registro</li>
          <li>Chat</li>
          <li>Aside (lista de contactos)</li>
          <li>Documentación del proyecto</li>
        </ul>

        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li>React</li>
          <li>CSS</li>
          <li>LocalStorage</li>
          <li>DeepWiki</li>
          <li>README</li>
          <li>Vercel</li>
        </ul>

        <h2>Decisiones de desarrollo tomadas</h2>
        <p>
          Una de las principales decisiones de desarrollo fue utilizar
          LocalStorage para guardar la información de los usuarios registrados.
          Esto permite que, cuando la página se recargue, los datos no se
          pierdan y los usuarios puedan volver a iniciar sesión fácilmente sin
          tener que registrarse nuevamente.
        </p>

        <h2>Observaciones personales del estudiante</h2>
        <p>
          Este proyecto me resultó muy interesante, ya que me permitió poner en
          práctica distintos conceptos de desarrollo web utilizando React.
          Además, considero que es una aplicación que en el futuro podría
          mejorar incorporando nuevas herramientas y más funcionalidades.
        </p>

        <h2>Dificultades encontradas</h2>
        <p>
          Una de las mayores dificultades durante el desarrollo del proyecto fue
          la implementación del sistema de registro de usuarios. Al no contar
          con una base de datos propia, fue necesario investigar diferentes
          alternativas para poder almacenar la información de los usuarios.
          Durante este proceso también consulté con compañeros para encontrar la
          mejor forma de resolverlo.
        </p>

        <Link className="volver-btn" to="/">
          Volver al Login
        </Link>
      </div>
    </div>
  );
};