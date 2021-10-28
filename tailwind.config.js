const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      current: theme('#374699'),
    }),
    colors: {
      transparent: 'transparent',
      current: '#374699',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    borderColor: theme => ({
      DEFAULT: theme('current'),
      primary: '#374699',
      black: '#000000'
    }),
    backgroundColor: theme => ({
      transparent: 'transparent',
      primary: '#374699',
      white: '#ffffff',
      black: '#000000',
      grey: '#E9ECEF',
      dark: '#3a3b3c',
      sapphire: {
        50: '#f5f6fa',
        100: '#ebedf5',
        200: '#cdd1e6',
        300: '#afb5d6',
        400: '#737eb8',
        500: '#374699',
        600: '#323f8a',
        700: '#293573',
        800: '#212a5c',
        900: '#1b224b',
      },
      red: {
        50: '#fff2f2',
        100: '#ffe6e6',
        200: '#ffbfbf',
        300: '#ff9999',
        400: '#ff4d4d',
        500: '#ff0000',
        600: '#e60000',
        700: '#bf0000',
        800: '#990000',
        900: '#7d0000',
      },
    }),
    fontFamily: {
      gilroy: ['"Gilroy-SemiBold"'],
      body: ['"Open Sans"'],
    },
    // extend: {

    // },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: [
  //   require('./app/assets/fonts')
  // ],
};
