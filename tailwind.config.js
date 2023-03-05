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
          main:'#151134'
        }
      },
    },
  },
  plugins: [],
}
