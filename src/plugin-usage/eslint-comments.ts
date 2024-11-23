import plugin from 'eslint-plugin-eslint-comments'
import type { PluginUsage } from '../plugin-usage.js'

const usage: PluginUsage = {
  pluginName: 'eslint-comments',
  plugin,
  rules: {
    'require-description': [
      'error',
      {
        ignore: ['eslint-enable', 'eslint-env'],
      },
    ],
  },
}

export default usage