/**
 * https://github.com/mightyiam/eslint-config-love/issues/10
 */
export type Bar = null
export type Foo<Bar> = (a: Bar) => Bar

/**
 * https://github.com/mightyiam/eslint-config-love/issues/2
 */
export default class Zoo {
  public constructor(private readonly name: string) {}

  public get greeting(): string {
    return `Hello ${this.name}`
  }
}

/**
 * https://github.com/mightyiam/eslint-config-love/issues/3
 */
export interface Boo {
  b_oo: null
}

/**
 * ESLint should ignore this `no-undef` violation because that rule is turned off for TypeScript.
 */
// console.log(undef)

/**
 * https://github.com/mightyiam/eslint-config-love/issues/110
 */
// Inline callbacks don't need return types:
const ONE_MILLISECOND = 1
setTimeout(() => {
  console.log()
}, ONE_MILLISECOND)

// eslint-disable-next-line @typescript-eslint/no-magic-numbers -- function name
export const double: (n: number) => number = (n) => n * 2
