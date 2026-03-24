import { useContext } from "react"
import { Aside } from "../components/Aside"
import { Chat } from "../components/Chat"
import { ChatContext } from "../context/ChatContext"

const Home = () => {
  const { selectedUser } = useContext(ChatContext)

  return (
    <main className={`app ${selectedUser ? "chat-selected" : ""}`}>
      <Aside />
      <Chat />
    </main>
  )
}

export { Home }