import plugin from 'eslint-plugin-import'
import type { PluginUsage } from '../plugin-usage.js'

const usage: PluginUsage = {
  pluginName: 'import',
  plugin,
  rules: {
    'enforce-node-protocol-usage': ['error', 'always'],
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

export default usage
