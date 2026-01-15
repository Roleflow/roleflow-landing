/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4338ca',
          orange: '#f97316',
        }
      }
    },
  },
  plugins: [],
}
