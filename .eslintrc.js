module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-mixed-spaces-and-tabs": "off",
    "no-unused-vars": "off",
    "prettier/prettier": "error",
    strict: "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "require-yield": "off",
    "no-debugger": "error",
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
