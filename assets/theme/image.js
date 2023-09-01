const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    ".icon": {
      "@apply bg-no-repeat bg-cover": {},
    },

    ".arrow_up": {
      backgroundImage: theme("backgroundImage.arrow_up"),
    },
    ".code": {
      backgroundImage: theme("backgroundImage.code"),
    },
    ".doc": {
      backgroundImage: theme("backgroundImage.doc"),
    },
  });
});
