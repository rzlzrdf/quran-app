/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'arab': ['Noto Naskh AraSbic', 'Noto Naskh Arabic', 'serif']
      },
      textColor: {
        'gold': ['#FFD700']
      },
      maxWidth: {
        '100vw': ['100vw']
      },
      minWidth : {
        '300px' : ['300px']
      },
    },
  },
  plugins: [],
}

