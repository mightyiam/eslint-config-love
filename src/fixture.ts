/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/10
 */
export type Bar = null
export type Foo<Bar> = (a: Bar) => Bar

/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/2
 */
export default class Zoo {
  public constructor (private readonly name: string) {}

  public get greeting (): string {
    return `Hello ${this.name}`
  }
}

/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/3
 */
export interface Boo { b_oo: null }

/**
 * ESLint should ignore this `no-undef` violation because that rule is turned off for TypeScript.
 */
// console.log(undef)

/**
 * https://github.com/standard/eslint-config-standard-with-typescript/issues/110
 */
// Inline callbacks don't need return types:
setTimeout(() => {}, 1)

// The return type is clear from the left side of the assignment:
const double: ((n: number) => number) = n => n * 2
;[1, 2].map(double)
