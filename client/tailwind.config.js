/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        page: "#F3F4F6",
        line: "#EAEDF0",
      },
      borderRadius: {
        xl2: "12px",
      }
    },
  },
  plugins: [],
}
