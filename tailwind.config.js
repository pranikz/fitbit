const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayweb: "#5f5f5f",
        buttonblue: "#2E90EA",
      },
      backgroundImage: {
        workout:
          "url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666191371/fitbit/Rectangle_4_zbjvcg.jpg')",
        equipment:
          "url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666191371/fitbit/Rectangle_5_oiwhng.jpg')",
        yoga: "url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666191371/fitbit/Rectangle_6_plxsfl.jpg')",
        brand:
          "url('https://res.cloudinary.com/dg6y2dtpl/image/upload/v1666191371/fitbit/Rectangle_7_qlryrk.jpg')",
      },
    },
  },
  plugins: [],
};
