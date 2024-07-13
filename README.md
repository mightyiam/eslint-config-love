<div align="center">
  <img src="./logo.svg" width="150"/>
  <h1>eslint-config-love</h1>

![GitHub License](https://img.shields.io/github/license/mightyiam/eslint-config-love)
[![main branch checks status](https://img.shields.io/github/check-runs/mightyiam/eslint-config-love/main)](https://github.com/mightyiam/eslint-config-love/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/eslint-config-love)](https://www.npmjs.com/package/eslint-config-love)
![Dependent repos prior to rename](https://img.shields.io/librariesio/dependent-repos/npm/eslint-config-standard-with-typescript?label="dependent%20repos%20prior%20to%20rename")
![Dependent repos](https://img.shields.io/librariesio/dependent-repos/npm/eslint-config-love)
![GitHub Repo stars](https://img.shields.io/github/stars/mightyiam/eslint-config-love)

_A TypeScript ESLint config that loves you_

</div>

## Guidelines

- Safety at the cost of verbosity
- Convention over arbitrary choice
- No formatting rules (please use a formatter)

## Versioning

Any change that might require a user to make changes beyond upgrading this package is considered major.
For example, rule addition are obviously major.
It is expected that most version bumps will be major.

## Example config

Here is an example `eslint.config.cjs`.

```js
module.exports = [
  {
    ...require('eslint-config-love'),
    files: ['**/*.js', '**/*.ts'],
  },
]
```

[Learn how to configure ESLint](https://eslint.org/docs/latest/use/configure/).

Note: the config exported by this package sets `languageOptions.parserOptions.project = true`.
Read about the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you may care about.

## Example command line usage:

```
$ npx eslint .
```

## Contributing

This project is developed primarily in remote mob programming format.
[See schedule and how to apply here](https://mobusoperandi.com/mobs/love.html).

Otherwise, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).
