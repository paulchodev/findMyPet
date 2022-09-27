/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./index/**/*.ejs",
    "./profile/**/*.ejs",
    "./feed/**/*.ejs",
    "./login/**/*.ejs",
    "./signup/**/*.ejs",
    "./header/**/*.ejs",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
}