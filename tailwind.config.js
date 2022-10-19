/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayweb: "#5f5f5f",
        buttonblue: "#2E90EA",
      },
    },
  },
  plugins: [],
};
