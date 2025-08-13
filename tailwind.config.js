/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        brandGreen: '#3a3',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
        keyframes: {
        inflate: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'inflate': 'inflate 3s ease-in-out',
      },
    },
  },
  plugins: [],
}
