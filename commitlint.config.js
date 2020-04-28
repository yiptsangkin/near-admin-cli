module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [2, 'always', ['新增', '更新']]
  }
}
