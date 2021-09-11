> work in progress !

# Typed-Well

Realtime, zero dependency, human-readable library to write unit tests for your TypeScript definitions. Think of it as Jest for types with no extra tooling required.

<!--suppress HtmlDeprecatedAttribute -->
<p align="center">
    <img src="docs/demo1.apng" alt="demo">
</p>

## Installation

Install it via your favorite package manager:

- `npm i -D typed-well`
- `yarn add -D typed-well`
- `pnpm i -D typed-well`

This library exposes a set of utilities packed into a namespace `_` to prevent global scope pollution. To use them you just import the name space in your test file.

```ts
import { _ } from "typed-well";
```

## Usage

Utilities mimic Jest's `expect` matchers, they are just a set of custom type definitions. It doesn't require you to install any additional tools or define your result expectations in comments. You just write a test and if check fails TS compiler will throw an error on that line, and your IDE will even highlight it.

```ts
// MyTypes.ts
export type EventHandler = (type: string, data?: any) => boolean;

// MyTypes.spec.ts
import { _ } from "typed-well";

type test_suit =
  | _<_.expect<EventHandler, _.toBeInvocable>>
  | _<_.expect<EventHandler, _.toAcceptArguments<[string, object]>>>
  | _<_.expect<EventHandler, _.toReturn<void>>>; // <-- error, this will be highlighted
```

## API

- **TODO**: api docs
