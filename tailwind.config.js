/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If using a plain HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}", // For React, Vue, or similar frameworks
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}
