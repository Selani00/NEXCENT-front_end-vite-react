/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'NeutralSilver': '#F5F7FA',
        'NeutralDGrey': '#4D4D4D',
        'BrandPrimary': '#4CAF4F',
        'NeutralGrey': '#717171',
        'gray900': '#18191F',
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

