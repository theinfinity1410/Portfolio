// src/App.jsx
import React from "react";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
      <ChatBot />
    </div>
  );
}
