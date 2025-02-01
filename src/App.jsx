import React, { useState, useEffect, useRef } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatWindowRef]); //Fixed unnecessary dependency

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user'
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate a response from another user
    setTimeout(() => {
      const responseMessage = {
        id: Date.now(),
        text: `Received: "${message}"`,
        sender: 'other'
      };
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Utku Enes Company</h1>
      </header>
      <ChatWindow messages={messages} ref={chatWindowRef} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;