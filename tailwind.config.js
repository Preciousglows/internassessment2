/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './public/dashboard.html', './public/userdetails.html'],
  theme: {
    extend: {
      fontFamily:{
        avenir:'Avenir Next',
        work: 'Work Sans'
      },
      colors:{
        primary:'#213F7D',
        assmgrey:'#545F7D 15%',
        assmblue:'#39CDCC',
        bordgray:'#545F7D'

      }
    },
  },
  plugins: [],
}

