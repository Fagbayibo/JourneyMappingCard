/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "url('https://d3qp9zvlyuxos1.cloudfront.net/Gradient+background.svg')",
      },
      fontFamily: {
        "poppins" : ['poppins', 'san-serif'], 
      },
    },
  },
  plugins: [],
}