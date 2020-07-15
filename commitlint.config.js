module.exports = {
  extends: [require.resolve('crazy-commits/commitlint')],
  rules: {
    'scope-enum': [2, 'always', [
      'commitlint',
      'package',
      'docs',
      'deps'
    ]]
  }
}
