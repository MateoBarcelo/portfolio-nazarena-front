/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: "#D3FADE",
          400: '#4D8360',
          700: '#2F5946',
          900: '#213F31'
        },
        'secondary': {
          300: '#F2B749',
          100: '#FFC861',
          90: '#FBE281'
        }
         

      },
      fontFamily: {
        'sans': ['Gilroy', 'sans-serif']
      },
      backgroundImage: {
        'profile-pattern': "url('../src/assets/patronnaz.svg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animate")
  ]
}

