/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#009FE6',
        'secondary': '#1e4872',
        'light': '#F7F8F9',
        'medium': '#dce1e6',
      },
      gradientColor: {
        'hero-gradient': 'linear-gradient(135deg, #009FE6 0%, #1e4872 100%)',
      },
    },
  },
  plugins: [],
}

