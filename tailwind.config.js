const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik' : ['Rubik', 'Arial'],
    },
    extend: {
      colors: {
        'first': '#F53838',
      },
    },
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
}
