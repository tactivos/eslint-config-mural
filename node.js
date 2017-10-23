module.exports = {
  env: {
    node: true
  },

  extends: [
    'plugin:node/recommended'
  ],

  plugins: [
    'node'
  ],

  rules: {
    'node/exports-style': 0,
    'node/shebang': 0
  }
}
