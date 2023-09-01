const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    body: {
      margin: "0",
      "&::-webkit-scrollbar": {
        "@apply block w-2 h-1 bg-green-dark": {},
      },
      "&::-webkit-scrollbar-thumb": {
        "@apply bg-green-lime": {},
      },
    },
    "#__nuxt": {
      "@apply w-full min-w-[320px] min-h-screen relative": {},
    },
  });
});
