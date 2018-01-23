module.exports = {
  extends: [
    'eslint-config-airbnb-base'
  ],

  rules: {
    'consistent-return': 0,
    'no-shadow': ['error', { 'allow': ['done', 'err', 'cb'] }],
  }
}
