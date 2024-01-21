/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'p': {
              fontSize: theme('fontSize.lg'),
            },
          },
        },
      }),
      colors: {
        'primary': '#009FE6',
        'midtone': '#1e4872',
        'secondary': '#0C1E3D',
        'light': '#F7F8F9',
        'medium': '#dce1e6',
      },
      gradientColor: {
        'hero-gradient': 'linear-gradient(135deg, #009FE6 0%, #0C1E3D 100%)',
      },
      screens: {
        'tall': { 'raw': '(min-height: 935px)' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

