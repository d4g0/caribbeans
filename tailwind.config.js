const colors = require('tailwindcss/colors')
module.exports = {

  purge: {
    options: {

    }
  },

  darkMode: false, // or 'media' or 'class'

  theme: {

    extend: {

      minHeight: {
        0: '0px',
        full: '100%',
        screen: '100vh',
        '64': '16rem',
      },
      spacing: {
        '1/2': '50%',
        '2/3': '66.666667%',
        '0.5': '0.125rem',
        '0': '0',
        '1': '0.25rem',
        '1.5': '0.35rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '144': '36rem',
        '216': '54rem'
      },
      // -------
      // COLORS
      // -------
      colors: {
        light: {
          onSurface: '#304a5f',
          primary: '#0B2A4A'
        },
        gray: colors.blueGray,
        ...colors
      },

      // ---------------
      // BORDER - RADIUS
      // ---------------
      borderRadius: {
        kush: '1.2rem',
        og: '8px'
      },

      zIndex: {
        70: '70'
      }
    },
  },
  variants: {
    ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'hover','focus-visible'],
    ringWidth: ['responsive', 'focus-within', 'focus', 'hover','focus-visible'],
    borderWidth: ['responsive', 'hover'],
    backgroundImage: ['responsive', 'hover'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus','focus-visible'],

  },
  plugins: [],
}
