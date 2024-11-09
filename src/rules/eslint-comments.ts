import plugin from 'eslint-plugin-eslint-comments'
import type { PluginUsage } from '../rules.js'

const rules: PluginUsage = {
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

export default rules
