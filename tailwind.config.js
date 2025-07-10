/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['"Avenir LT Std"', 'sans-serif'],
        caslon: ['"Big Caslon"', 'serif'],
      },
      colors: {
        grey: '#565759',
        dark: '#1D1F22',
        green: '#006F62',
        red: '#B3261E',
        chocolate: '#5A3A27',
      },
      maxWidth: {
        layout: '630px',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-grey': theme('colors.grey'),
          '--color-dark': theme('colors.dark'),
          '--color-green': theme('colors.green'),
          '--color-red': theme('colors.red'),
          '--color-chocolate': theme('colors.chocolate'),
        },
      });
    },
  ],
};
