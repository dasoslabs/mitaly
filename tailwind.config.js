/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC33",
        gray: "#99999",
        "light-gray": "#E6E6E6",
        "bg-gray": "#F7F7F7",
      },
      maxWidth: {
        pc: "1440px",
      },
    },
  },
  plugins: [],
}
