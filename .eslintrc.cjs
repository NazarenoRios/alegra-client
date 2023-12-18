/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
        endOfLine: "auto",
      },
    ],
  },
};
