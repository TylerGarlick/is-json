import * as R from 'ramda'

const splitCharacters = R.split('')
const charactersFromString = (value: string) => splitCharacters(value)

export const stringify = (value: unknown) => JSON.stringify(value)

export const parse = (value: string) => JSON.parse(value)

export const startsWith = (value: string, character: string): boolean => {
  const [first] = extract(value)
  return first === character
}

export const endsWith = (value: string, character: string): boolean => {
  const [, last] = extract(value)
  return last === character
}

export const extract = (value: string) => {
  const { 0: first, length: _, [_ - 1]: last } = charactersFromString(value)
  return [first, last]
}

export const tryParse = (value: string): boolean => {
  try {
    return parse(value) && !!value
  } catch {
    return false
  }
}