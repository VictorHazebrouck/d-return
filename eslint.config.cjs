/** @type {import("eslint").Linter.Config} */
module.exports = [
  {
    ignores: ["package.json", ".eslintrc.cjs", "dist"],
    rules: {
      "no-console": "error",
    },
  },
];
