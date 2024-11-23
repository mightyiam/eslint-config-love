import plugin from 'eslint-plugin-eslint-comments'
import type { PluginUsage } from '../plugin-usage.js'

const usage: PluginUsage = {
  pluginName: 'eslint-comments',
  plugin,
  rules: {
    'disable-enable-pair': ['error', { allowWholeFile: true }],
    'no-aggregating-enable': ['error'],
    'no-duplicate-disable': ['error'],
    'no-unlimited-disable': ['error'],
    'no-unused-enable': ['error'],
    'require-description': [
      'error',
      {
        ignore: ['eslint-enable', 'eslint-env'],
      },
    ],
  },
}

export default usage
