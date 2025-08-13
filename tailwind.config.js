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
   
      },
     
    },
  },
  plugins: [],
}
