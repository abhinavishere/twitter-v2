module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        accent: "#1D9BF0",
        darkGray: "#202327",
      },
      screens: {
        base: "500px",
        "laptop-sm": "990px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
