/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lateef: ["Lateef", "serif"],
        satoshi: ["Satoshi-Variable", "serif"],
      },
      textShadow: {
        outline:
          "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
      },
      colors: {
        orange: {
          650: "#F14A16",
        },
        primary: "#2D6781",
      },
    },
  },
  plugins: [],
};
