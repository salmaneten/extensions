/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables the class-based dark mode
  theme: {
    extend: {
      colors: {
        // Neutral colors
        neutral: {
          0: 'hsl(200, 60%, 99%)',
          100: 'hsl(0, 0%, 93%)',
          200: 'hsl(217, 61%, 90%)',
          300: 'hsl(0, 0%, 78%)',
          600: 'hsl(226, 11%, 37%)',
          700: 'hsl(225, 23%, 24%)',
          800: 'hsl(226, 25%, 17%)',
          900: 'hsl(227, 75%, 14%)',
        },
        // Red colors
        red: {
          400: 'hsl(3, 86%, 64%)',
          500: 'hsl(3, 71%, 56%)',
          700: 'hsl(3, 77%, 44%)',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '375px',
        xl: '1440px',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
        'dark-gradient': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
} 