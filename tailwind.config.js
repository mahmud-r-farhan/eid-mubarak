/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'scroll': 'scroll-text 20s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'festive': 'festive-float 3s ease-in-out infinite',
        'shine': 'shine 2s infinite',
        'celebration': 'celebration 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}