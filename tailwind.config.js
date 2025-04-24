/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-pastel': '#FFD1DC',
        'cream-pastel': '#FFF5E1',
        'brown-light': '#C4A484',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'cursive': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}