import type { PluginRuleEntries } from '../rules.js'

const rules: PluginRuleEntries = {
  pluginName: 'import',
  rules: {
    export: ['error'],
    first: ['error'],
    'no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'no-duplicates': ['error'],
    'no-named-default': ['error'],
    'no-webpack-loader-syntax': ['error'],
  },
}

export default rules
