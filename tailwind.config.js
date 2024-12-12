/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'neo': ' 0 0 10px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

