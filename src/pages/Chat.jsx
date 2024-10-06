import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Chat Page</h1>
      <p className="mt-2 text-gray-600">Communicate with other users.</p>

      <div className="border rounded-lg p-4 mt-4 h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Start chatting!</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <p className={`text-${message.sender === 'You' ? 'blue-500' : 'gray-500'}`}>{message.text}</p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 mt-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default Chat;
