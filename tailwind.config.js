/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.orange[400],
        default: colors.gray[400],
        danger: colors.red[400],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        vshowup: "show 1s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
