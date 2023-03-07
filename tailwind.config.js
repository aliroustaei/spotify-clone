/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins','sans-sarif']
    },
    extend: {
      colors:{
        primary:{
          main:'#9C33F1',
          light:'#93839F',
          dark:'#151134',
        }
      },
    },
  },
  plugins: [],
}
