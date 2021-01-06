import { stringify, startsWith, endsWith } from '../../src/utils/json'

const EMPTY_OBJECT = stringify({})
const EMPTY_ARRAY = stringify([])

describe(`startsWith()`, () => {
  it(`starts with a {`, () => {
    expect(startsWith(EMPTY_OBJECT, `{`)).toBeTruthy()
    expect(startsWith(EMPTY_ARRAY, `[`)).toBeTruthy()
  })
})

describe(`endsWith()`, () => {
  it(`starts with a }`, () => {
    expect(endsWith(EMPTY_OBJECT, `}`)).toBeTruthy()
    expect(endsWith(EMPTY_ARRAY, `]`)).toBeTruthy()
  })
})