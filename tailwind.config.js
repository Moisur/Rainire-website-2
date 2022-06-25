/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffffff",

          "secondary": "#FF7594",

          "accent": "#1FB2A6",

          "neutral": "#2E1619",

          "base-100": "#2A303C",

          "info": "#ff7595",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}