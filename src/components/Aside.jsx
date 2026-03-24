
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"


const Aside = () => {
  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId, selectedUser } = useContext(ChatContext)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const { logout } = useContext(ChatContext)
  const navigate = useNavigate()

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <aside>
      <header>
        <h1>Chats Empresarial</h1>
        <button className='exit-button'
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Salir
        </button>
      </header>
      <input
        className="search"
        type="search"
        placeholder="Buscar contactos..."
        onChange={handleChange}
      />

      {
        filteredUsers.length === 0 &&
        <p className="not-found-text">No se encontraron contactos</p>
      }

      <ul>
        {
          filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleSelectedUserId(user.id)} 
              className={selectedUser?.id === user.id ? "active" : ""}
            >
              <img src={user.image} alt="" />
              <div>
                {user.firstName} {user.lastName}
                <br />
                <small className="address-aside">
                  {user.address.country}
                </small>
              </div>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export { Aside }