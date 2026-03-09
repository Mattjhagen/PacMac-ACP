/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'bg-darker': 'var(--bg-darker)',
        'text-muted': 'var(--text-muted)',
        'glass-border': 'var(--glass-border)',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
    }
  },
  plugins: [],
}

