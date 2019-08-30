[![Build Status](https://travis-ci.org/standard/eslint-config-standard-with-typescript.svg?branch=master)](https://travis-ci.org/standard/eslint-config-standard-with-typescript)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/standard/eslint-config-standard-with-typescript.svg)](https://greenkeeper.io/)
[![Releases](https://coderelease.io/badge/standard/eslint-config-standard-with-typescript)](https://coderelease.io/github/repository/standard/eslint-config-standard-with-typescript)

# eslint-config-standard-with-typescript

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for TypeScript that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has TypeScript specific rules from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

## Usage

```
npm install --save-dev eslint@6 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@9 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript
```

Yes, I know it is a large number of packages. This is due to [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458).

This long list of dependencies includes:

1. [ESLint](https://github.com/eslint/eslint)
1. Peer dependencies of [eslint-config-standard](https://github.com/standard/eslint-config-standard)
1. [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin); ESLint rules for TypeScript.

Here is an example `.eslintrc.json`:

```json
{
  "extends": "standard-with-typescript",
  "parserOptions": {
      "project": "./tsconfig.json"
  }
}
```

Note: Please read some important instructions regarding the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you might care about.

Make sure you read about [the `--ext` command line option](https://eslint.org/docs/user-guide/command-line-interface#--ext). And here is [a feature request for specifying extensions in the config](https://github.com/eslint/eslint/issues/10828).

Example command line usage:

```
npx eslint --ext .js,.ts .
```
