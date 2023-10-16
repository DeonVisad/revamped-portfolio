/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fog': "url('/src/Assets/fog-on-dark-waters-edge.jpg')",
      },
      fontFamily: {
        'darker': ['Darker Grotesque', 'sans-serif'],
        'roboto': ['Roboto Mono', 'monospace'],
        'playfair': ['Playfair Display', 'serif'],
        'open' : ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

