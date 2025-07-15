// src/components/ChatBot.jsx
import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatMessage from "./ChatMessage";
import ContactModal from "./ContactModal";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const chatRef = useRef(null);

  const sendMessage = async (userMessage) => {
    const userMsgObj = { content: userMessage, isUser: true };
    setMessages((prev) => [...prev, userMsgObj]);
    setLoading(true);

    try {
      const response = await fetch("https://portfolio-78ir.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const botMsgObj = { content: data.response, isUser: false };
      setMessages((prev) => [...prev, botMsgObj]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { content: "⚠️ Failed to get AI response. Please try again later.", isUser: false },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-full mx-auto bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg border border-gray-700">
      <ChatHeader onContact={() => setContactOpen(true)} />
      
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-4 py-6 bg-gradient-to-b from-gray-900 to-black scroll-smooth"
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {loading && (
          <div className="text-gray-500 text-sm italic mt-2">Typing...</div>
        )}
      </div>

      <div className="p-4 bg-gray-900">
        <MessageInput onSend={sendMessage} />
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
