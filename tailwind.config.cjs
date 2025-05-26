/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      borderColor: ["peer-checked"],
      backgroundColor: ["peer-checked"],
      scale: ["peer-checked"],
      visibility: ["peer-checked"],
    },
  },
  plugins: [],
};
