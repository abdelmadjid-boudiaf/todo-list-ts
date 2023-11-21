/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatUpDown: {
          "0%, 100%": {
            transform: "scale(1)",
            background: "#60a5fa",
          },
          "50%": { transform: "scale(1.1)", background: "#1d4ed8" },
        },
      },
      animation: {
        floatUpDown: "floatUpDown 10s infinite",
      },
    },
  },
  plugins: [],
};
