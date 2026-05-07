/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0a0a0a',
        textLight: '#ffffff',
        accent: '#ff4d6d', // soft red/pink accent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
