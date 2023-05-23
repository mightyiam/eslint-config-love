[![Build Status](https://github.com/standard/eslint-config-standard-with-typescript/actions/workflows/ci.yaml/badge.svg)](https://github.com/standard/eslint-config-standard-with-typescript/actions/workflows/ci.yaml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/eslint-config-standard-with-typescript)](https://www.npmjs.com/package/eslint-config-standard-with-typescript)

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for TypeScript that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has TypeScript specific rules from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

# Peer dependencies 

This package specifies the following `peerDependencies`:

- TypeScript, which you may already have installed
- [ESLint](https://github.com/eslint/eslint)
- 3 Peer dependencies of [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin); ESLint rules for TypeScript.

Yes, this is a large number of `peerDependencies`.
This is due to [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458).

# @typescript-eslint dependencies

This package has `@typescript-eslint/parser` in `dependencies`.  
And it has `@typescript-eslint/eslint-plugin` in `peerDependencies`.  
Both are specified as ranges.
It's probably safest for the installed versions of these packages to be the same.
This can be achieved by:

1. Pin (exact version) the `@typescript-eslint/eslint-plugin` in `package.json`.
1. Have a `package-lock.json` which locks the version of the `@typescript-eslint/parser` sub-dependency.

And both pin/lock to the same version.

# npm@<7

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
  eslint-plugin-n@^16.0.0 \
  @typescript-eslint/eslint-plugin@^5.43.0 \
  eslint-config-standard-with-typescript@latest
```

# Example config

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

# Example command line usage:

```
$ npx eslint .
```
