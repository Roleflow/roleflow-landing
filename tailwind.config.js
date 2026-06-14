/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: '#0B0F19',
        brandMuted: '#9CA3AF',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #FF7A00 0%, #A324FF 100%)',
      }
    },
  },
  plugins: [],
}
