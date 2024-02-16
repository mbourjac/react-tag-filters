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
        primary: '#0641c0',
        secondary: '#ffc9a7',
        tertiary: '#86adf3',
      },
    },
  },
  plugins: [],
};
