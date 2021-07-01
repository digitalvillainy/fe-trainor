const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#006f53',
      white: colors.white,
      gray: colors.coolGray,
      black: colors.black,
      ctaYellow: '#ffd637'
    },
    extend: {
      backgroundImage: theme=>({
        "hero-img":"url('./assets/background.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
