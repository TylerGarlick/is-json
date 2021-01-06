# is-json

> Determines if the string is json

## Getting Started

Use your favorite tool to install the npm package.

### Install the NPM Package

Use your favorite tool with NPM and install the package `@tylergarlick/is-json`

```bash
npm install @tylergarlick/is-json 
yarn add @tylergarlick/is-json
```

Inside your codebase, Import the package `@tylergarlick/is-json` and call the default exported function, which takes in
a value, and returns a truthy value.

```typescript 
import isJSON from '@tylergarlick/is-json'

console.log(isJSON("")) // false
console.log(isJSON("{}")) // true
```

----

## API

### extract(value: string): string[]

> Extracts the first and last character in an array, and returns the result in a tuple.

Helps retrieve he first and last element from a flatten'd stringify function. The extract method removes the inner
object/array that is nested.

```typescript
import { extract } from '@tylergarlick/is-json'

const [first, last] = extract("{}")

console.log(first) // '{'
console.log(last) // '}'
```

### startsWith(value: string, character: string): string[]

> Extracts the first and last character in an array, and returns the result in a tuple.

Helps retrieve he first and last element from a flatten'd stringify function. The extract method removes the inner
object/array that is nested.

```typescript
import { extract } from '@tylergarlick/is-json'

const [first, last] = extract("{}")

console.log(first) // '{'
console.log(last) // '}'
```
