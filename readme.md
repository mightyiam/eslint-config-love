[![Build Status](https://github.com/mightyiam/eslint-config-love/actions/workflows/ci.yaml/badge.svg)](https://github.com/mightyiam/eslint-config-love/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/eslint-config-love)](https://www.npmjs.com/package/eslint-config-love)

A TypeScript ESLint config that loves you

# Example config

Here is an example `eslint.config.cjs`.

```js
module.exports = [
  {
    ...require('eslint-config-love'),
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.ts',
      '**/*.tsx'
    ],
  }
]
```

[Learn how to configure ESLint](https://eslint.org/docs/latest/use/configure/).

Note: the config exported by this package sets `languageOptions.parserOptions.project = true`.
Read about the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you may care about.

# Example command line usage:

```
$ npx eslint .
```
