import isJSON from '../src'
import { stringify } from '../src/utils/json'

const SIMPLE = stringify({ 'blah': 'something' })
const EMPTY_OBJECT = stringify({})
const EMPTY_ARRAY = stringify([])
const INVALID_JSON = `{ "blah:"blah"}`

describe(`is-json`, () => {

  it(`simple stringified object works`, () => expect(isJSON(SIMPLE)).toBeTruthy())

  it(`simple stringified empty object`, () => expect(isJSON(EMPTY_OBJECT)).toBeTruthy())

  it(`simple stringified object works`, () => expect(isJSON(EMPTY_ARRAY)).toBeTruthy())

  it(`empty string is not json`, () => expect(isJSON(``)).toBeFalsy())

  it(`malformed json`, () => expect(isJSON(INVALID_JSON)).toBeFalsy())

})