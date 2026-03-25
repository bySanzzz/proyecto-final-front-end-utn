import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { login } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Debes completar todos los campos",
    });
    return;
  }

  const response = login({ email, password });

  if (!response) {
    Swal.fire({
      icon: "error",
      title: "Error al iniciar sesión",
      text: "No se encuentra registrado en el Sistema",
    });
    return;
  }

  navigate("/");
};

  return (
    <div className="main-container">
      <section className="section-login">
        <h2>Clon de WhatsApp</h2>
        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-login"
            type="email"
            placeholder="Ingresa tu email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="input-login"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button>Ingresar</button>

          <Link className="button-reg" to="/register">
            Registrarse
          </Link>
          <Link className="button-reg" to="/documentacion">
             Ver documentación del proyecto
          </Link>


          
        </form>
      </section>
    </div>
  );
};

export { Login };
