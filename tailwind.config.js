/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*"],

  theme: {
    colors:{
      brown: 'hsl(14, 45%, 36%)',
      purple:'hsl(332, 51%, 32%)',
      rosePink:'hsl(330, 100%, 98%)',
      lightBrown:'hsl(30, 10%, 34%)',
      charCoal:'hsl(24, 5%, 18%)',
      gray:'hsl(30, 18%, 87%)',
      white:'hsl(0, 0%, 100%)',
      eggShell:'hsl(30, 54%, 90%)'
    },
    extend: {
      // color:{
      //   Primary:
      // }
    },
  },
  plugins: [],
}

