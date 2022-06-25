module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        'loading': 'loading 1.3s linear infinite',
        'show': 'show 3s ease-in-out',
      },

      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}