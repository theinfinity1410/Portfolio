/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if using different structure
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A", // deep navy
        userMessage: "#1E293B", // slate for user msg
        botMessage: "#1E293B",  // same as user for consistency
        primary: "#3B82F6",     // blue
        secondary: "#94A3B8",   // slate
        accent: "#F472B6"       // pink for bot avatar bg
      },
      borderRadius: {
        chat: "1.25rem"
      }
    },
  },
  plugins: [],
};
