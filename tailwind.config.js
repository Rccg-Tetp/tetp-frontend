/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lateef: ["Lateef", "serif"],
        satoshi: ["Satoshi-Variable", "serif"],
      },
      colors: {
        orange: {
          650: "#F14A16",
        },
      },
    },
  },
  plugins: [],
};
