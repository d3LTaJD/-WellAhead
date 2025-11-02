/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00FF6A',
        },
      },
      boxShadow: {
        'neon': '0 0 20px #00FF6A, 0 0 40px #00FF6A, 0 0 60px #00FF6A',
        'neon-sm': '0 0 10px #00FF6A, 0 0 20px #00FF6A',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF6A, 0 0 10px #00FF6A' },
          '100%': { boxShadow: '0 0 20px #00FF6A, 0 0 40px #00FF6A, 0 0 60px #00FF6A' },
        },
      },
    },
  },
  plugins: [],
}
