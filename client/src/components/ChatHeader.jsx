// src/components/ChatHeader.jsx
import React from "react";

export default function ChatHeader({ onContact }) {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold shadow-md mr-3">
          ∞
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">PortfoliAI</h1>
          <p className="text-sm text-gray-300">Welcome to Swayam's professional career assistant.!</p>
        </div>
      </div>
      <button
        onClick={onContact}
        className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors"
      >
        Contact
      </button>
    </div>
  );
}
