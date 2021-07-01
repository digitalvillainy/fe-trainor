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
    backgroundSize:{
      'auto':'auto',
      'cover':'cover',
      'contain':'contain',
      '50%':'50%',
      '18':'18.75rem'

    },
    extend: {
      backgroundImage: theme=>({
        "hero-img":"url('./assets/background.png')",
        "body-img":"url('./assets/trees.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
