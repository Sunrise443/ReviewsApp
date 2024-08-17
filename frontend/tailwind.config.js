/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lighter: '#f2f9f1',
      light: '#ddeedf',
      dark: '#b6cdbd',
      darker: '#5c715e',
    },
    fontFamily: {
      'code': ['Consolas','Monaco','Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New']
    },
    extend: {},
  },
  plugins: [],
}

