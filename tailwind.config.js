const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'main': '#F53838',
    },
    fontFamily: {
      'rubik' : ['Rubik', 'Arial'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
