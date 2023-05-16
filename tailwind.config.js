/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        fastFood: "url('./assets/fastfood.jpeg')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  

};
