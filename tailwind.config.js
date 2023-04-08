/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#fbbf24'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

