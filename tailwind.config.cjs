/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}", 
  ],
  theme: { 
      fontFamily: {
        Roboto: ["serif"],
        RobotoSans: ["sans-serif"],
        Nunito: ["sans-serif"], 
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
    extend: {},
    colors:{
      primaryBlue:'#47ABE3', 
      gold:'#D7BE69',  
      white:colors.white,
      gray: colors.neutral,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      orange:colors.orange,
      green:colors.green,
      amber:colors.amber,
      purple:colors.purple
      }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),],
};