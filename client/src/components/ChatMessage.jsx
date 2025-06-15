// src/components/ChatMessage.jsx
import React from "react";

export default function ChatMessage({ message }) {
  const isUser = message.isUser;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="mr-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
          ∞
        </div>
      )}
      <div
        className={`px-4 py-2 rounded-xl max-w-xs sm:max-w-md text-sm leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-100"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
