/**
 * https://github.com/mightyiam/eslint-config-standard-with-typescript/issues/10
 */
export type Bar = null
export type Foo<Bar> = (a: Bar) => Bar

/**
 * https://github.com/mightyiam/eslint-config-standard-with-typescript/issues/2
 */
export default class Zoo {
  public constructor (private name: string) {}

  public get greeting (): string {
    return `Hello ${this.name}`
  }
}

/**
 * https://github.com/mightyiam/eslint-config-standard-with-typescript/issues/3
 */
export interface Boo { b_oo: null }

/**
 * ESLint should ignore this `no-undef` violation because that rule is turned off for TypeScript.
 */
// console.log(undef)
