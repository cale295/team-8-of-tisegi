/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'FTIK.html', 'FTV.html', 'TI.html', 'SI.html'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '112': '28rem',
        '144': '36rem',
        '155': '50rem',
      }
    },
  },
  plugins: [],
}

