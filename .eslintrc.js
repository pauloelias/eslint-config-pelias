module.exports = {
  "extends": [
    "standard",
    "standard-jsx",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ]
  },
  "plugins": ["html", "prettier", "react-hooks", "jsx-a11y"]
}
