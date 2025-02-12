module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  safelist: ["dark"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
