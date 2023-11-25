/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "556px",
      lg: "976px",
    },
    extend: {},
  },
  plugins: [],
};
