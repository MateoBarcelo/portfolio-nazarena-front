/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: "#D0A9E4",
          400: '#4D8360',
          700: '#311A64',
          900: '#1A1A2E'
        },
        'secondary': {
          300: '#A0E7E5',
          100: '#D0A9E4',
          90: '#D0A9E4'
        }
      },
      fontFamily: {
        'sans': ['Gilroy', 'sans-serif']
      },
      backgroundImage: {
        'profile-pattern': "url('../src/assets/patronnaz2.svg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animate")
  ]
}

