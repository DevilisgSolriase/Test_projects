/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,css,ejs}", "index.js", "./routes/*.{html,js,css}"],
  theme: {
    extend: {
      fontSize: {
        '2.5xl':  '1.625rem',
      }
    },
  },
  plugins: [],
}

