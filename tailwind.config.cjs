/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '1200px'
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['o.9375rem']
      },
      colors: {
        'primary-1': 'hsl(35, 77%, 62%)',
        'primary-2': 'hsl(5, 85%, 63%)',
        'secondary-1': 'hsl(36, 100%, 99%)',
        'secondary-2': 'hsl(233, 8%, 79%)',
        'secondary-3': 'hsl(236, 13%, 42%)',
        'secondary-4': 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}