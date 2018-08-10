module.exports = {
  "plugins": [
      "react"
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
  },
  "env": {
      "es6":     true,
      "browser": true,
      "node":    true
  },   
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],    
  "rules": {
    "indent": ["error", 2],
    "no-var": 2
  }
}