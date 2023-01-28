/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        vdarkblue: "hsl(212, 21%, 14%)",
        vdarkcyan: "hsl(118, 54%, 22%)",
        darkgrayichblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        p:"14px",
      },
      fontFamily: {
        "montserrat": ['"Montserrat"', 'sans-serif'],
        "fraunces": ['"Fraunces"', 'serif'],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      width:{
        "card": "281px",
      }
    },
    plugins: [],
  }
}
