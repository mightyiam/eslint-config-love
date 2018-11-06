[![Build Status](https://travis-ci.org/mightyiam/eslint-config-standard-with-typescript.svg?branch=master)](https://travis-ci.org/mightyiam/eslint-config-standard-with-typescript)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/mightyiam/eslint-config-standard-with-typescript.svg)](https://greenkeeper.io/)
[![Releases](https://coderelease.io/badge/mightyiam/eslint-config-standard-with-typescript)](https://coderelease.io/github/repository/mightyiam/eslint-config-standard-with-typescript)

# eslint-config-standard-with-typescript

An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for TypeScript that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has TypeScript specific rules from [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript).

## Usage

```
npm install --save-dev eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node typescript-eslint-parser eslint-plugin-typescript eslint-config-standard-with-typescript 
```

Yes, I know it is a large number of packages. This is due to [a known design flaw in ESLint](https://github.com/eslint/eslint/issues/10125).

This long list of dependencies includes:

1. Peer dependencies of [eslint-config-standard](https://github.com/standard/eslint-config-standard)
1. the necessary [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser/); lets ESLint parse TypeScript.
1. [eslint-plugin-typescript](https://github.com/nzakas/eslint-plugin-typescript); ESLint rules for TypeScript.

Here is an example `.eslintrc.json`:

```json
{
  "extends": "standard-with-typescript",
  "parser": "typescript-eslint-parser"
}
```

Make sure you read about [the `--ext` command line option](https://eslint.org/docs/user-guide/command-line-interface#--ext). And here is [a feature request for specifying extensions in the config](https://github.com/eslint/eslint/issues/10828).

Example command line usage:

```
npx eslint --ext .js,.ts .
```
