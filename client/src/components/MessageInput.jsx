// src/components/MessageInput.jsx
import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

export default function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed !== "") {
      onSend(trimmed);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full gap-2 bg-transparent rounded-xl"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something about Swayam..."
        className="flex-1 border-none outline-none text-sm px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-xl"
      />
      <button
        type="submit"
        className="text-white bg-blue-600 rounded-xl p-2 hover:bg-blue-700 transition flex items-center justify-center"
      >
        <SendHorizonal className="w-5 h-5" />
      </button>
    </form>
  );
}
