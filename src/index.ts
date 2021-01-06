import { tryParse, extract } from './utils/json'

export * from './utils/json'

const json = [`{`, '}', `[`, ']']

export default (value: string): boolean => {
  const [first, last] = extract(value)
  return json.some(char => char === first || char === last) && tryParse(value)
}