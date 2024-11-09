import plugin from 'eslint-plugin-import'
import type { PluginUsage } from '../rules.js'

const rules: PluginUsage = {
  pluginName: 'import',
  plugin,
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
