import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { register } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!nombre || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Todos los campos son obligatorios"
      })
      return
    }

    if (nombre.trim().length < 3) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "El nombre debe tener al menos 3 caracteres"
      })
      return
    }

    if (!email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "El email no es válido"
      })
      return
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Contraseña inválida",
        text: "La contraseña debe tener mínimo 6 caracteres"
      })
      return
    }

    const response = register({
      firstName: nombre.trim(),
      email,
      password
    })

    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Usuario existente",
        text: "El usuario ya existe"
      })
      return
    }

    Swal.fire({
      icon: "success",
      title: "Cuenta creada",
      text: "Ahora puedes iniciar sesión"
    })

    navigate("/login")
  }

  return (
    <div className="main-container">
      <section className="section-registro">
        <h2>Crear cuenta 📝</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-login"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />

          <input
            className="input-login"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="input-login"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="btn-registro">Registrarse</button>
        </form>
        <Link className="volver-btn" to="/">
          Volver al Login
        </Link>
      </section>
      
    </div>
  )
}

export { Registro }