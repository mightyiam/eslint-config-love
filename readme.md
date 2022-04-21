[![Build Status](https://travis-ci.com/standard/eslint-config-standard-with-typescript.svg?branch=master)](https://travis-ci.com/standard/eslint-config-standard-with-typescript)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Releases](https://coderelease.io/badge/standard/eslint-config-standard-with-typescript)](https://coderelease.io/github/repository/standard/eslint-config-standard-with-typescript)

# eslint-config-standard-with-typescript

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for TypeScript that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has TypeScript specific rules from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

## Usage

`npm@<7` does not automatically install `peerDependencies`,
so if that's what you're using, install them manually.
Here is an example, but use it only for reference,
because your decisions regarding version ranges and range specifiers may vary.

```
npm install --save-dev \
  typescript@\* \
  eslint@^8.0.1 \
  eslint-plugin-promise@^6.0.0 \
  eslint-plugin-import@^2.25.2 \
  eslint-plugin-n@^15.0.0 \
  @typescript-eslint/eslint-plugin@^5.0.0 \
  eslint-config-standard-with-typescript@latest
```

Yes, this is a large number of packages. This is due to [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458).

This list of dependencies is:

- TypeScript, which you may already have installed
- [ESLint](https://github.com/eslint/eslint)
- 3 Peer dependencies of [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin); ESLint rules for TypeScript.
- This package

Here is an example `.eslintrc.js`:

```js
module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

Note: Please read some important instructions regarding the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you may care about.

Example command line usage:

```
$ npx eslint .
```
