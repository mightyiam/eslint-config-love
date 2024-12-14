import plugin from 'eslint-plugin-promise'
import type { PluginUsage } from '../plugin-usage.js'

const usage: PluginUsage = {
  pluginName: 'promise',
  plugin,
  rules: {
    'avoid-new': ['error'],
    'param-names': ['error'],
  },
}

export default usage
