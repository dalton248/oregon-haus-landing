/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          600: '#d9534f',
          700: '#c9302c',
          900: '#2c221e',
        }
      }
    },
  },
  plugins: [],
}
