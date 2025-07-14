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
        light: '#F7F7F7',
        dark: '#1D1F22',
        teal: '#006F62',
        red: '#B3261E',
        chocolate: '#5A3A27',
        'neutral-dark': '#565759',
        muted: '#667085',
        darkBlue: '#101828',
      },
      width: {
        layout: '630px',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-light': theme('colors.light'),
          '--color-dark': theme('colors.dark'),
          '--color-teal': theme('colors.teal'),
          '--color-red': theme('colors.red'),
          '--color-chocolate': theme('colors.chocolate'),
          '--color-neutral-dark': theme('colors.neutral-dark'),
        },
      });
    },
  ],
};
