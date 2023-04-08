/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081a51",
        "light-white": "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [require("daisyui")],
};
