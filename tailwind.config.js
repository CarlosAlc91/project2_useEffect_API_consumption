/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/images/b1.jpg')",
      },
    },
    fontFamily: {
      "lato": ["Lato", "sans-serif"]
    }
  },
  plugins: [],
}

