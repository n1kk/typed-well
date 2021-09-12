> Work in progress! Minor versions of v0 can have breaking api changes, lock this package to exact version or to the latest patch.

# Typed-Well

Realtime, zero dependency, human-readable library to write unit tests for your TypeScript definitions. Think of it as Jest for types with no extra tooling required.

<!--suppress HtmlDeprecatedAttribute -->
<p align="center">
    <img src="assets/demo1.apng" alt="demo">
</p>

## Installation

Install it via your favorite package manager:

- `npm i -D typed-well`
- `yarn add -D typed-well`
- `pnpm i -D typed-well`

## Usage

This library exposes a set of utilities neatly packed into a namespace `_` to prevent global scope pollution. To use them just import the namespace in your test file.

```ts
import { _ } from "typed-well";
```

The namespace doubles as a type that is a shortcut to the positive assertion.

```ts
type test_suit =
  | _<true> // positive assertion, same as below
  | _.pass<true> // positive assertion, same as above
  | _.false<false>; // negative assertion
```

Utilities mimic Jest's `expect` matchers, they are just a set of custom type definitions. It doesn't require you to install any additional tools or define your result expectations in comments for some parser to find. You just write a test and if check fails TS compiler will throw an error on that line, and your IDE will even highlight it.

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

- Assertions
  - [`_< expectation >`](#_)
  - [`_.pass< expectation >`](#pass)
  - [`_.fail< expectation >`](#fail)
  - [`_.not`](#not)
- Expectations
  - [`_.expect< given, check >`](#expect)
  - [`_.expectReturnOf< given, check >`](#expectReturnOf)
  - [`_.expectParametersOf< given, check >`](#expectParametersOf)
  - [`_.expectKeysOf< given, check >`](#expectKeysOf)
  - [`_.expectValuesOf< given, check >`](#expectValuesOf)
- Checks
  <!-- comparison -->
  - [`_.toEqualTo< expected >`](#toEqualTo)
  - [`_.toBe< expected >`](#toBe)
  - [`_.toAccept< expected >`](#toAccept)
  - [`_.toBeAssignableTo< expected >`](#toBeAssignableTo)
  - [`_.toExtend< expected >`](#toExtend)
  - [`_.toBeExtendedBy< expected >`](#toBeExtendedBy)
  <!-- primitives -->
  - [`_.toBeDefined`](#toBeDefined)
  - [`_.toBeNullish`](#toBeNullish)
  - [`_.toBePrimitive`](#toBePrimitive)
  - [`_.toBeLiteral`](#toBeLiteral)
  <!-- general -->
  - [`_.toBeTruthy`](#toBeTruthy)
  - [`_.toBeFalsy`](#toBeFalsy)
  - [`_.toBeInvocable`](#toBeInvocable)
  - [`_.toBeNewable`](#toBeNewable)
  <!-- strings -->
  - [`_.toStartWith< expected >`](#toStartWith)
  - [`_.toEndWith< expected >`](#toEndWith)
  - [`_.toContain< expected >`](#toContain)
  <!-- objects -->
  - [`_.toHaveKeys< expected >`](#toHaveKeys)
  - [`_.toHaveOnlyKeys< expected >`](#toHaveOnlyKeys)
  - [`_.toHaveFieldsThatAccept< expected >`](#toHaveFieldsThatAccept)
  - [`_.toHaveFieldsThatAcceptOnly< expected >`](#toHaveFieldsThatAcceptOnly)
  <!-- arrays -->
  - [`_.toInclude< expected >`](#toInclude)
  <!-- functions -->
  - [`_.toReturn< expected >`](#toReturn)
  - [`_.toReturnOnly< expected >`](#toReturnOnly)
  - [`_.toResolveTo< expected >`](#toResolveTo)
  - [`_.toResolveToOnly< expected >`](#toResolveToOnly)
  - [`_.toAcceptParameters< expected >`](#toAcceptParameters)
  - [`_.toAcceptOnlyParameters< expected >`](#toAcceptOnlyParameters)

## <a name="_">#</a> `_< check >`

Shortcut to a positive assertion [`_.pass< expectation >`](#pass). Expects check type to resolve to `true`.

```ts
type test = _<_.expect<"a", _.toBeAssignableTo<string>>>;
```

## <a name="pass">#</a> `_.pass< check >`

Positive assertion. Expects check type to resolve to `true`.

```ts
type test = _.pass<_.expect<"a", _.toBeAssignableTo<string>>>;
```

## <a name="fail">#</a> `_.fail< check >`

Negative assertion. Expects check type to resolve to `false`.

```ts
type test = _.fail<_.expect<"a", _.toBeAssignableTo<number>>>;
```

## <a name="not">#</a> `_.not`

Negates the checks. It's a namespace that contains aliases to all the check types and negates the result. Can be used to write negative checks in a positive assertion.

```ts
type suit =
  | _<_.expect<number, _.not.toAccept<"foo">>>
  | _<_.expect<void, _.not.toBeDefined>>
  // same as above
  | _.fail<_.expect<void, _.toBeDefined>>
  | _.fail<_.expect<number, _.toAccept<"foo">>>;
```

## <a name="expect">#</a> `_.expect< given, expectation >`

Runs a check against a given type and resolves in the checks boolean result: `true` if check passes and `false` if it fails.

```ts
type suit =
  | _<_.expect<1, _.toBeTruthy>> // passes
  | _<_.expect<0, _.toBeTruthy>>; // fails
```

## <a name="expectReturnOf">#</a> `_.expectReturnOf< given, check >`

Expects given to be a function and runs the check on its return value. Shortcut for `_.expect<ReturnType<given>, check>`

```ts
type suit =
  | _<_.expectReturnOf<() => string, _.toAccept<"foo">>>
  // same as above
  | _<_.expect<ReturnType<() => string>, _.toAccept<"foo">>>;
```

## <a name="expectParametersOf">#</a> `_.expectParametersOf< given, check >`

Expects given to be a function and runs the check on its parameters type. Shortcut for `_.expect<Parameters<given>, check>`

```ts
type suit =
  | _<_.expectParametersOf<(a: string, b?: number) => string, _.toAccept<[string]>>>
  | _<_.expectParametersOf<(a: string, b?: number) => string, _.toAccept<[string, number]>>>
  | _<_.expectParametersOf<(a: string, b?: number) => string, _.toAccept<[string, undefined]>>>
  // same as above
  | _<_.expect<Parameters<(a: string, b?: number) => string>, _.toAccept<[string]>>>
  | _<_.expect<Parameters<(a: string, b?: number) => string>, _.toAccept<[string, number]>>>
  | _<_.expect<Parameters<(a: string, b?: number) => string>, _.toAccept<[string, undefined]>>>;
```

## <a name="expectKeysOf">#</a> `_.expectKeysOf< given, check >`

Expects given to be an object and runs the check on its keys. Shortcut for `_.expect<keyof given, check>`

```ts
type suit =
  | _<_.expectKeysOf<{ a: string; b?: number }, _.toBe<"a" | "b">>>
  // same as above
  | _<_.expect<keyof { a: string; b?: number }, _.toBe<"a" | "b">>>;
```

## <a name="expectValuesOf">#</a> `_.expectValuesOf< given, check >`

Expects given to be an object or an array or a tuple and runs the check on its value types. Shortcut for `_.expect<given[keyof given], check>`

```ts
type MyObject = { a: string; b?: number };
type MyArray = Array<boolean>;
type MyTuple = [index: number, value: string];

type suit =
  | _<_.expectValuesOf<MyObject, _.toBe<string | number | undefined>>>
  | _<_.expectValuesOf<MyArray, _.toAccept<true>>>
  | _<_.expectValuesOf<MyTuple, _.toAccept<number | string>>>
  // same as above
  | _<_.expect<MyObject[keyof MyObject], _.toBe<string | number | undefined>>>
  | _<_.expect<MyArray[number], _.toAccept<true>>>
  | _<_.expect<MyTuple[number], _.toAccept<number | string>>>;
```

## <a name="toEqualTo">#</a> `_.toEqualTo< expected >`

Given type should strictly equal to expected one. Both types should be assignable to each other.

```ts
type MyType = number;

type suit =
  | _<_.expect<MyType, _.toEqualTo<number>>>
  | _<_.expect<MyType, _.not.toEqualTo<1>>>
  | _<_.expect<MyType, _.not.toEqualTo<"1">>>;
```

## <a name="toBe">#</a> `_.toBe< expected >`

Alias for [`_.toEqualTo< expected >`](#toEqualTo)

## <a name="toAccept">#</a> `_.toAccept< expected >`

Expected type should be assignable to a given one, bot not necessarily the other way around. Reverse of [`_.toBeAssignableTo< expected >`](#toBeAssignableTo).

```ts
type suit =
  | _<_.expect<number, _.toAccept<1>>>
  | _<_.expect<1, _.not.toAccept<number>>>
  | _<_.expect<number | string, _.toAccept<number>>>
  | _<_.expect<number, _.not.toAccept<number | string>>>;
```

## <a name="toBeAssignableTo">#</a> `_.toBeAssignableTo< expected >`

Given type should be assignable to the expected one, bot not necessarily the other way around. Reverse of [`_.toAccept< expected >`](#toAccept).

```ts
type suit =
  | _<_.expect<number, _.toAccept<1>>>
  | _<_.expect<1, _.not.toAccept<number>>>
  | _<_.expect<number | string, _.toAccept<number>>>
  | _<_.expect<number, _.not.toAccept<number | string>>>;
```

## <a name="toExtend">#</a> `_.toExtend< expected >`

Expected type is assignable to given but not the other way around. Means that given type is a superset of the expected one. Reverse of [`_.toBeExtendedBy< expected >`](#toBeExtendedBy).

```ts
type suit =
  | _<_.expect<1, _.toExtend<number>>>
  | _<_.expect<"a", _.toExtend<string>>>
  | _<_.expect<() => number, _.toExtend<Function>>>
  | _<_.expect<{ a: string; b: number }, _.toExtend<{ a: string }>>>;
```

## <a name="toBeExtendedBy">#</a> `_.toBeExtendedBy< expected >`

Given type is assignable to expected but not the other way around. Means that expected type is a superset of the given one. Reverse of [`_.toExtend< expected >`](#toExtend).

```ts
type suit =
  | _<_.expect<number, _.toBeExtendedBy<1>>>
  | _<_.expect<string>, _.toBeExtendedBy<"a">>
  | _<_.expect<Function, _.toBeExtendedBy<() => number>>>
  | _<_.expect<{ a: string }, _.toBeExtendedBy<{ a: string; b: number }>>>;
```

## <a name="toBeDefined">#</a> `_.toBeDefined`

Given type does not accept `undefined | void`

```ts
type suit =
  | _<_.expect<number, _.toBeDefined>>
  | _<_.expect<string, _.toBeDefined>>
  | _<_.expect<Function, _.toBeDefined>>
  | _<_.expect<null, _.toBeDefined>>
  | _<_.expect<undefined, _.not.toBeDefined>>
  | _<_.expect<void, _.not.toBeDefined>>
  | _<_.expect<never, _.not.toBeDefined>>;
```

## <a name="toBeNullish">#</a> `_.toBeNullish`

Given type does not accept `null | undefined | void`

```ts
type suit =
  | _<_.expect<null, _.toBeNullish>>
  | _<_.expect<undefined, _.toBeNullish>>
  | _<_.expect<void, _.toBeNullish>>
  | _<_.expect<number, _.not.toBeNullish>>
  | _<_.expect<() => void, _.not.toBeNullish>>;
```

## <a name="toBePrimitive">#</a> `_.toBePrimitive`

Given type can be assigned to one of the primitive types `string | number | bigint | boolean | symbol | null | undefined`

```ts
type suit =
  | _<_.expect<null, _.toBeNullish>>
  | _<_.expect<undefined, _.toBeNullish>>
  | _<_.expect<void, _.toBeNullish>>
  | _<_.expect<number, _.not.toBeNullish>>
  | _<_.expect<() => void, _.not.toBeNullish>>;
```

## <a name="toBeLiteral">#</a> `_.toBeLiteral`

Given type is a literal which means it extends one of these primitives: `number | string | boolean`

```ts
type suit =
  | _<_.expect<1, _.toBeLiteral>>
  | _<_.expect<"foo", _.toBeLiteral>>
  | _<_.expect<true, _.toBeLiteral>>
  | _<_.expect<false, _.toBeLiteral>>
  | _<_.expect<string, _.not.toBeLiteral>>;
```

## <a name="toBeTruthy">#</a> `_.toBeTruthy`

Given type can contain only truthy values, this means it's not compatible with falsy values and their supersets. Since `0` is falsy `number` can't be considered a truthy type since it can accept `0`.

```ts
type suit =
  | _<_.expect<1, _.toBeTruthy>>
  | _<_.expect<"foo", _.toBeTruthy>>
  | _<_.expect<true, _.toBeTruthy>>
  | _<_.expect<{ a: any }, _.toBeTruthy>>
  | _<_.expect<() => void, _.toBeTruthy>>
  | _<_.expect<false, _.not.toBeTruthy>>
  | _<_.expect<number, _.not.toBeTruthy>>
  | _<_.expect<boolean, _.not.toBeTruthy>>;
```

## <a name="toBeFalsy">#</a> `_.toBeFalsy`

Given type can contain only a falsy value: `false | "" | 0 | 0n | null | undefined | void`. Type that can hold falsy and truthy value at the same time, like an optional field, can not be considered falsy.

```ts
type suit =
  | _<_.expect<false, _.toBeFalsy>>
  | _<_.expect<0, _.toBeFalsy>>
  | _<_.expect<null, _.toBeFalsy>>
  | _<_.expect<"", _.toBeFalsy>>
  | _<_.expect<boolean, _.not.toBeFalsy>>
  | _<_.expect<number | undefined, _.not.toBeFalsy>>;
```

## <a name="toBeInvocable">#</a> `_.toBeInvocable`

Given type can be invoked like a function.

```ts
type suit =
  | _<_.expect<() => any, _.toBeInvocable>>
  | _<_.expect<Function, _.toBeInvocable>>
  | _<_.expect<{ (...args: any[]): void }, _.toBeInvocable>>
  | _<_.expect<number, _.not.toBeInvocable>>
  | _<_.expect<unknown, _.not.toBeInvocable>>;
```

## <a name="toBeNewable">#</a> `_.toBeNewable`

Given type is a constructor and can be instantiated with the `new` keyword.

```ts
class EmptyClass {}
type suit =
  | _<_.expect<typeof EmptyClass, _.toBeNewable>>
  | _<_.expect<typeof RegExp, _.toBeNewable>>
  | _<_.expect<RegExp, _.not.toBeNewable>>
  | _<_.expect<{ new (arg: number): boolean }, _.toBeNewable>>
  | _<_.expect<() => object, _.not.toBeNewable>>
  | _<_.expect<{ (arg: number): boolean }, _.not.toBeNewable>>
  | _<_.expect<object, _.not.toBeNewable>>
  | _<_.expect<unknown, _.not.toBeNewable>>;
```

## <a name="toStartWith">#</a> `_.toStartWith< expected >`

Given and expected types are strings and given is prefixed with expected.

```ts
type suit =
  | _<_.expect<"foobar", _.toStartWith<"foo">>>
  | _<_.expect<"baz", _.toStartWith<"">>>
  | _<_.expect<"foo", _.not.toStartWith<"bar">>>;
```

## <a name="toEndWith">#</a> `_.toEndWith< expected >`

Given and expected types are strings and given is suffixed with expected.

```ts
type suit =
  | _<_.expect<"foobar", _.toEndWith<"bar">>>
  | _<_.expect<"baz", _.toEndWith<"">>>
  | _<_.expect<"foo", _.not.toEndWith<"bar">>>;
```

## <a name="toContain">#</a> `_.toContain< expected >`

Given and expected types are strings and expected is a substring of the given.

```ts
type suit =
  | _<_.expect<"foobar", _.toEndWith<"bar">>>
  | _<_.expect<"baz", _.toEndWith<"">>>
  | _<_.expect<"foo", _.not.toEndWith<"bar">>>;
```

## <a name="toHaveKeys">#</a> `_.toHaveKeys< expected >`

Given is an object that should contain expected keys.

```ts
type suit =
  | _<_.expect<{ a: number }, _.toHaveKeys<"a">>>
  | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"a">>>
  | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"b">>>
  | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"a" | "b">>>
  | _<_.expect<object, _.not.toHaveKeys<"a">>>;
```

## <a name="toHaveOnlyKeys">#</a> `_.toHaveOnlyKeys< expected >`

Given is an object that should only contain expected keys.

```ts
type suit =
  | _<_.expect<{ a: number }, _.toHaveOnlyKeys<"a">>>
  | _<_.expect<{ a: number; b: string }, _.not.toHaveOnlyKeys<"a">>>
  | _<_.expect<{ a: number; b: string }, _.not.toHaveOnlyKeys<"b">>>
  | _<_.expect<{ a: number; b: string }, _.toHaveOnlyKeys<"a" | "b">>>;
```

## <a name="toHaveFieldsThatAccept">#</a> `_.toHaveFieldsThatAccept< expected >`

Given is an object with fields that accept expected value types.

```ts
type suit =
  | _<_.expect<{ a: number; b: string }, _.toHaveFieldsThatAccept<number | string>>>
  | _<_.expect<{ a: number; b: string }, _.toHaveFieldsThatAccept<"foo">>>
  | _<_.expect<{ a: number; b: string }, _.toHaveFieldsThatAccept<1>>>
  | _<_.expect<{ a: number; b: string }, _.toHaveFieldsThatAccept<1 | "foo">>>
  | _<_.expect<{ a: number; b?: string }, _.toHaveFieldsThatAccept<undefined>>>
  | _<_.expect<{ a: number; b?: string }, _.not.toHaveFieldsThatAccept<boolean>>>
  | _<_.expect<{ a: number; b?: string }, _.not.toHaveFieldsThatAccept<number | string | boolean>>>;
```

## <a name="toHaveFieldsThatAcceptOnly">#</a> `_.toHaveFieldsThatAcceptOnly< expected >`

Given is an object with fields that accept only expected value types.

```ts
type suit =
  | _<_.expect<{ a: number; b: string }, _.toHaveFieldsThatAcceptOnly<number | string>>>
  | _<_.expect<{ a: number; b: string }, _.not.toHaveFieldsThatAcceptOnly<"foo">>>
  | _<_.expect<{ a: number; b: string }, _.not.toHaveFieldsThatAcceptOnly<1>>>
  | _<_.expect<{ a: number; b: string }, _.not.toHaveFieldsThatAcceptOnly<1 | "foo">>>
  | _<_.expect<{ a: number; b?: string }, _.not.toHaveFieldsThatAcceptOnly<undefined>>>
  | _<_.expect<{ a: number; b?: string }, _.not.toHaveFieldsThatAcceptOnly<boolean>>>
  | _<_.expect<{ a: number; b?: string }, _.not.toHaveFieldsThatAccept<number | string | boolean>>>;
```

## <a name="toInclude">#</a> `_.toInclude< expected >`

Given is an array that can contain the expected type.

```ts
type suit =
  | _<_.expect<Array<number>, _.toInclude<number>>>
  | _<_.expect<Array<number | string>, _.toInclude<number>>>
  | _<_.expect<number[], _.toInclude<number>>>
  | _<_.expect<[number], _.toInclude<number>>>
  | _<_.expect<[number, string], _.toInclude<number>>>
  | _<_.expect<[number, string], _.not.toInclude<number | string | boolean>>>;
```

## <a name="toReturn">#</a> `_.toReturn< expected >`

Given is a function whose return type should be assignable to the expected type.

```ts
type suit =
  | _<_.expect<() => number | string, _.toReturn<number>>>
  | _<_.expect<() => void, _.toReturn<void>>>
  | _<_.expect<() => void, _.toReturn<undefined>>>
  | _<_.expect<() => Promise<"a">, _.toReturn<Promise<any>>>>
  | _<_.expect<() => number[], _.toReturn<Array<number>>>>
  | _<_.expect<() => number, _.not.toReturn<string>>>
  | _<_.expect<() => 1, _.not.toReturn<number>>>;
```

## <a name="toReturnOnly">#</a> `_.toReturnOnly< expected >`

Given is a function whose return type should strictly equal to the expected type, meaning they both should be assignable to each other.

```ts
type suit =
  | _<_.expect<() => number | string, _.toReturnOnly<number | string>>>
  | _<_.expect<() => number | string, _.not.toReturnOnly<number>>>
  | _<_.expect<() => void, _.toReturnOnly<void>>>
  | _<_.expect<() => number[], _.toReturnOnly<Array<number>>>>
  | _<_.expect<() => number, _.not.toReturnOnly<string>>>
  | _<_.expect<() => 1, _.not.toReturnOnly<number>>>;
```

## <a name="toResolveTo">#</a> `_.toResolveTo< expected >`

Given is a function whose return type is a promise that resolves to the expected type.

```ts
type suit =
  | _<_.expect<() => Promise<void>, _.toResolveTo<undefined>>>
  | _<_.expect<() => Promise<number>, _.toResolveTo<number>>>
  | _<_.expect<() => Promise<number | string | boolean>, _.toResolveTo<number | string>>>
  | _<_.expect<() => Promise<1>, _.not.toResolveTo<number>>>
  | _<_.expect<() => Promise<number>, _.not.toResolveTo<number | string>>>
  | _<_.expect<() => Promise<Promise<string>>, _.not.toResolveTo<string>>>;
```

## <a name="toResolveToOnly">#</a> `_.toResolveToOnly< expected >`

Given is a function whose return type is a promise that resolves exactly to the expected type, meaning they both should be assignable to each other.

```ts
type suit =
  | _<_.expect<() => Promise<void>, _.toResolveToOnly<void>>>
  | _<_.expect<() => Promise<number>, _.toResolveToOnly<number>>>
  | _<_.expect<() => Promise<void>, _.not.toResolveToOnly<undefined>>>
  | _<_.expect<() => Promise<number | string>, _.not.toResolveToOnly<number>>>
  | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<number | string>>>
  | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<1>>>;
```

## <a name="toAcceptParameters">#</a> `_.toAcceptParameters< expected >`

Given is a function whose parameters can accept expected type.

```ts
type suit =
  | _<_.expect<() => void, _.toAcceptParameters<[]>>>
  | _<_.expect<(a: string) => void, _.toAcceptParameters<[string]>>>
  | _<_.expect<(a: string | number) => void, _.toAcceptParameters<[string]>>>
  | _<_.expect<(a: string | number) => void, _.toAcceptParameters<[string | number]>>>
  | _<_.expect<(a: string, b: number) => void, _.toAcceptParameters<[string, number]>>>
  | _<_.expect<(a: "a") => void, _.not.toAcceptParameters<[string]>>>;
```

## <a name="toAcceptOnlyParameters">#</a> `_.toAcceptOnlyParameters< expected >`

Given is a function whose parameters can accept only expected type. Pay attention to optional parameters! Function with optional parameters resolves its parameters to a tuple with optional elements, and they are not strictly compatible with similar const arrays.

```ts
type suit =
  | _<_.expect<() => void, _.toAcceptOnlyParameters<[]>>>
  | _<_.expect<(a: string) => void, _.toAcceptOnlyParameters<[string]>>>
  | _<_.expect<(a: string | number) => void, _.not.toAcceptOnlyParameters<[string]>>>;

type Fn = (a: string, b?: number) => void; // parameters resolve to `[a: string, b?: number | undefined]`
type suit2 =
  // Pay attention! This test fails:
  | _.fail<_.expect<Fn, _.toAcceptOnlyParameters<[string, number | undefined]>>>
  // This one passes:
  | _.pass<_.expect<Fn, _.toAcceptOnlyParameters<[a: string, b?: number | undefined]>>>;
```
