/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto": "Roboto, sans-serif"
    },
    container: {
      center: true,
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem"
    },
    extend: {},
    colors: {
      "dark-3": "#23272a",
      "dark-2": "#36393e",
      "dark-1": "#424549",
      "custom-gray": "#99aab5",
      "white": "#FFFFFF",
      "custom-blue": "#7289da",
    }
  },
  plugins: [],
}