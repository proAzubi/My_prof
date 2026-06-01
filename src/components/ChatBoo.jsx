// // components/ChatWidget.js
// import { useState } from 'react';

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     const newMessages = [...messages, { role: 'user', content: input }];
//     setMessages(newMessages);
//     setInput('');

//     const res = await fetch('/api/chat', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ messages: newMessages }),
//     });
//     const data = await res.json();
//     setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!open ? (
//         <button onClick={() => setOpen(true)} className="bg-blue-600 text-white p-3 rounded-full shadow-lg">💬</button>
//       ) : (
//         <div className="bg-white w-80 h-96 p-4 rounded-lg shadow-lg flex flex-col">
//           <div className="flex-1 overflow-y-auto">
//             {messages.map((msg, i) => (
//               <p key={i}><strong>{msg.role}:</strong> {msg.content}</p>
//             ))}
//           </div>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//             className="border p-2 mt-2"
//             placeholder="Type your message..."
//           />
//           <button onClick={sendMessage} className="bg-blue-500 text-white p-2 mt-2 rounded">Send</button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Oops! Something went wrong." }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat
        </button>
      ) : (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col border border-gray-300">
          <div className="flex justify-between items-center p-2 bg-blue-600 text-white rounded-t-lg">
            <h4 className="font-semibold">Support Chat</h4>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 text-sm">
            {messages.map((msg, i) => (
              <p key={i} className={`mb-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
              </p>
            ))}
          </div>
          <div className="p-2 border-t flex gap-1">
            <input
              className="flex-1 border rounded px-2 py-1"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
