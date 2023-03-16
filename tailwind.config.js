/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
     Grotesk: ['Space Grotesk', 'sans-serif'],
     GroteskEB: ['Hanken Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}
