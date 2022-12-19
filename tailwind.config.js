/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1.5rem"
    },
    fontFamily: {
      "roboto": "Roboto, sans-serif"
    },
    colors: {
      "dark-3": "#23272a",
      "dark-2": "#36393e",
      "dark-1": "#424549",
      "custom-gray": "#99aab5",
      "white": "#FFFFFF",
      "custom-blue": "#7289da",
    }
  },
  plugins: ["tailwindcss, autoprefixer"],
}