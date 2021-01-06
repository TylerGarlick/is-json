import { tryParse, stringify } from '../../src/utils/json'

const EMPTY_OBJECT = stringify({})
const EMPTY_ARRAY = stringify([])

const INVALID_JSON = `{ "blah:"blah"}`

describe(`tryParse()`, () => {

  it(`works with valid JSON object`, () => expect(tryParse(EMPTY_OBJECT)).toBeTruthy())

  it(`works with valid JSON array`, () => expect(tryParse(EMPTY_ARRAY)).toBeTruthy())

  it(`doesn't work with invalid json`, () => expect(tryParse(INVALID_JSON)).toBeFalsy())

})