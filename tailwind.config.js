/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#405189",
          secondary: "#C22031",
          accent: "#1d1d1db5",
          neutral: "#3D4451",
          "base-100": "#fff",
          "base-200": "#f3f3f9",
          info: "#495b85f7",
          success: "#36D399",
          warning: "#fff",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
