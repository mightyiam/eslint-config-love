declare module 'eslint-plugin-n' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint-plugin-n_bottom' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint-plugin-import' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint-plugin-import_bottom' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint-plugin-promise' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint-plugin-promise_bottom' {
  import type { TSESLint } from '@typescript-eslint/utils'
  const plugin: TSESLint.Linter.Plugin
  export default plugin
}
declare module 'eslint_bottom' {
  import { TSESLint } from '@typescript-eslint/utils'
  export class ESLint extends TSESLint.FlatESLint {}
}
