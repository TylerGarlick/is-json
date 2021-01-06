import isJSON from '../src'
import { SERIALIZED_PEOPLE } from './fixtures/data'
import { stringify } from '../src/utils/json'

const SIMPLE = stringify({ 'blah': 'something' })

describe(`benchmarks`, () => {

  it(`simple`, () => expect(isJSON(SIMPLE)).toBeTruthy())

  it(`people`, () => expect(isJSON(SERIALIZED_PEOPLE)).toBeTruthy())

})