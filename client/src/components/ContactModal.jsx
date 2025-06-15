// src/components/ContactModal.jsx
import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal Panel */}
      <Dialog.Panel className="relative z-10 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        <Dialog.Title className="text-xl font-bold text-white">📞 Contact Information</Dialog.Title>
        <div className="mt-4 space-y-2 text-gray-300">
          <p><strong>Email:</strong> swayamgosavi1410@gmail.com</p>
          <p><strong>Phone:</strong> +91 9822687804</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/swayam-gosavi-8020a4212/"
              className="text-blue-400 hover:text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              swayam-gosavi
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/theinfinity1410"
              className="text-blue-400 hover:text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              theinfinity1410
            </a>
          </p>
          <p>
            <strong>LeetCode:</strong>{" "}
            <a
              href="https://leetcode.com/u/infinity1410/"
              className="text-blue-400 hover:text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              infinity1410
            </a>
          </p>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
