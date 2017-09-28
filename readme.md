[![Build Status](https://travis-ci.org/mightyiam/eslint-config-standard-with-typescript.svg?branch=master)](https://travis-ci.org/mightyiam/eslint-config-standard-with-typescript)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# eslint-config-standard-with-typescript

An [extension](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) of [eslint-config-standard](https://github.com/standard/eslint-config-standard), made for TypeScript.

## Usage

```
npm i --save-dev eslint-config-standard-with-typescript
```

Install the peer dependencies of [eslint-config-standard](https://github.com/standard/eslint-config-standard).

Configure your ESLint configuration to [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) from this one.

Also, you probably should use [typescript-eslint-parser] as ESLint’s parser.

### Warning about filename extensions

[By default, ESLint v4 reads `.js` files](https://eslint.org/docs/user-guide/command-line-interface#--ext). [The only way to specify other extensions](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint) is by using the [`--ext` command line option](https://eslint.org/docs/user-guide/command-line-interface#--ext). So make sure you do that so that your TypeScript files will be linted.
