/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myLightGreen: "#dae8da",
        myDarkGreen: "#034203",
      },
    },
  },
  plugins: [],
};
