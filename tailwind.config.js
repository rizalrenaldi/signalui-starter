module.exports = {
  content: [
    "./src/*.html",
    "./src/components/**/*.html",
    "./src/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
