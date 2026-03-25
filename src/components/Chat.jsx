import { useState, useRef, useEffect, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [text, setText] = useState('');
  const chatBodyRef = useRef(null);

  const { 
    selectedUser, 
    handleMessages, 
    loggedUser, 
    logout, 
    handleSelectedUserId 
  } = useContext(ChatContext);

  const navigate = useNavigate();

  const sendMessage = () => {
    if (!text.trim()) return;

    const now = new Date();
    const newMessage = {
      id: Date.now() + Math.random(),
      author: loggedUser.email,
      text,
      isMine: true,
      time: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
    };

    handleMessages(newMessage);
    setText('');
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [selectedUser?.messages?.length]);

  if (!selectedUser) {
    return <p className="not-found-chat">Selecciona un chat 💬</p>;
  }

  return (
    <section className={`chat ${selectedUser ? "active" : ""}`}>

      <header className="chat-header">

       
        <button
          className="back-btn"
          onClick={() => handleSelectedUserId(null)}
        >
          ⬅
        </button>

        <h2>
          {selectedUser.firstName} {selectedUser.lastName}
        </h2>


      </header>

      <div className="chat-body" ref={chatBodyRef}>
        {selectedUser.messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.isMine ? 'me' : 'received'}`}
          >
            <p>{msg.text}</p>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          placeholder='Escribe un mensaje'
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>

    </section>
  );
};

export { Chat };