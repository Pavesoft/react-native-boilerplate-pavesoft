module.exports = {
  extends: "airbnb",
  plugins: ["react", "react-native", "react-hooks", "jsx-a11y", "import"],
  parser: "@babel/eslint-parser",
  env: {
    jest: true,
    "react-native/react-native": true,
  },
  rules: {
    // Custom Rules
    quotes: [2, "double"],
    "linebreak-style": [2, "unix"],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "max-len": ["warn", { code: 100 }],
    "global-require": 1,
    "object-curly-newline": 0,
    "no-restricted-exports": 0,
    "react-native/no-raw-text": 0,
    "react/react-in-jsx-scope": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "comma-dangle": 0,
    "padded-blocks": 0,
    "arrow-body-style": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  globals: {
    fetch: false,
  },
};
