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
        red: "#FF1A40",
      },
      maxWidth: {
        pc: "1440px",
      },
      boxShadow: {
        form: "0px 16px 40px 0px #0000001A",
      },
      aspectRatio: {
        vertical: "16 / 9",
      },
    },
  },
  plugins: [],
}
