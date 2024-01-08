
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: "class",
  theme: {
     screens: {
      'mmd': {'max': '767px'},
     
      'mlg': {'max': '1260px'},

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    }, 
    extend: {}
  },
  plugins: []
}
