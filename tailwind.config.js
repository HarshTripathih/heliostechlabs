/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#12295E', // Adding custom color with the key 'primary'
      },
    },
  },
  plugins: [],
}

