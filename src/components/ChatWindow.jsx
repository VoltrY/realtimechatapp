import React, { forwardRef } from 'react';

const ChatWindow = forwardRef(({ messages }, ref) => {
  return (
    <div className="chat-window" ref={ref}>
      {messages.map(message => (
        <div key={message.id} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
});

export default ChatWindow;