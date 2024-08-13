/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#DFD3C3',
        'secondary' : '#a38672',
        'tertiary' : '#b8604d',
        'textColor' : '#F8EDE3',
        'highlight' : '#cf9588',
      }
    },
  },
  plugins: [],
}

