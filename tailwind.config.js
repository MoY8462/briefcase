/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      green: {
        forest: {
          DEFAULT: "#1A5653",
        },
        teal: {
          DEFAULT: "#107869",
        },
        lime: {
          DEFAULT: "#5CD85A",
        },
        dark: {
          DEFAULT: "#08313A",
        },
      },
      gray: {
        DEFAULT: "#4E4F50",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    extend: {},
  },
  plugins: [],
};
