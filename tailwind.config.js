/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        contain: '0 0 auto',
      },
      justifyContent: {
        center: 'center',
      },
      alignItems: {
        center: 'center',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'flex'],
    },
  },
  plugins: [],
}

