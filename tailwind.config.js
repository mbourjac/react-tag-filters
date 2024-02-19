/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        'off-black': '#1d1d1d',
        'off-white': '#fffcf7',
        body: {
          DEFAULT: '#0641c0',
          light: '#0641c033',
        },
        primary: {
          DEFAULT: '#043294',
          light: '#E6EBF4',
        },
        secondary: {
          DEFAULT: '#1254E2',
          light: '#E7EEFC',
        },
        tertiary: {
          DEFAULT: '#3A6EDE',
          light: '#EBF1FC',
        },
      },
    },
  },
  plugins: [],
};
