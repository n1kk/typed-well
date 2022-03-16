> Work in progress! Minor versions of v0 can have breaking api changes, lock this package to exact version or to the latest patch.

# Typed-Well [![github repo](https://img.shields.io/github/package-json/v/n1kk/typed-well?color=informational&label=github&logo=github)](https://github.com/n1kk/typed-well) [![npm package](https://img.shields.io/npm/v/typed-well?color=informational&logo=npm)](https://www.npmjs.com/package/typed-well)

Realtime, zero dependency, human-readable library to write unit tests for your TypeScript definitions. Think of it as Jest for types with no extra tooling required.

<p align="center">
    <img src="https://github.com/n1kk/typed-well/raw/master/assets/demo1.gif" alt="demo">
</p>

## Installation

Install it via your favorite package manager:

- `npm i -D typed-well`
- `yarn add -D typed-well`
- `pnpm add -D typed-well`

### Requirements

- Typescript 4.4 or above.

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
// MyType.ts
export type EventHandler = (type: string, data?: any) => boolean;

// MyType.specd.ts
import { _ } from "typed-well";

type test_suit =
  | _<expect<EventHandler, to.beInvocable>>
  | _<expect<EventHandler, to.acceptArguments<[string, object]>>>
  | _<expect<EventHandler, to.returnType<void>>>; // <-- error, this will be highlighted
```

### Running tests

Since it only requires `tsc` to run there are many ways to execute your tests. They probably are already running via your IDE, but if you want them to run from command like you can put them in their own files (e.g. `MyType.specd.ts`) and just run `tsc` on them. Dont forget to exclude them from regular typescript compilation target.

```bash
tsc --strict --noEmit **/*.specd.ts
```

## API

- Assertions
  - [`_< test >`](#-_-test-)
  - [`_.pass< test >`](#-_pass-test-)
  - [`_.fail< test >`](#-_fail-test-)
  - [`_.not`](#-_not)
- Expectations
  - [`expect< given, check >`](#-expect-given-check-)
  - [`expectReturnOf< given, check >`](#-expectreturnof-given-check-)
  - [`expectParametersOf< given, check >`](#-expectparametersof-given-check-)
  - [`expectKeysOf< given, check >`](#-expectkeysof-given-check-)
  - [`expectValuesOf< given, check >`](#-expectvaluesof-given-check-)
- Utils
  - [`_.falsy`](#-_falsy)
  - [`_.primitive`](#-_primitive)
  - [`_.nullish`](#-_nullish)
- Checks
  - Comparison
    - [`to.equalTo< expected >`](#-toequalto-expected-)
    - [`to.be< expected >`](#-tobe-expected-)
    - [`to.accept< expected >`](#-toaccept-expected-)
    - [`to.beAssignableTo< expected >`](#-tobeassignableto-expected-)
    - [`to.extend< expected >`](#-toextend-expected-)
    - [`to.beExtendedBy< expected >`](#-tobeextendedby-expected-)
  - Primitives
    - [`to.beDefined`](#-tobedefined)
    - [`to.beOptional`](#-tobeoptional)
    - [`to.beNullish`](#-tobenullish)
    - [`to.bePrimitive`](#-tobeprimitive)
    - [`to.beLiteral`](#-tobeliteral)
    - [`to.beNever`](#-tobenever)
  - General
    - [`to.beTruthy`](#-tobetruthy)
    - [`to.beFalsy`](#-tobefalsy)
    - [`to.beInvocable`](#-tobeinvocable)
    - [`to.beNewable`](#-tobenewable)
  - Strings
    - [`to.startWith< expected >`](#-tostartwith-expected-)
    - [`to.endWith< expected >`](#-toendwith-expected-)
    - [`to.contain< expected >`](#-tocontain-expected-)
  - Objects
    - [`to.haveKeys< expected >`](#-tohavekeys-expected-)
    - [`to.haveOnlyKeys< expected >`](#-tohaveonlykeys-expected-)
    - [`to.haveFieldsThatAccept< expected >`](#-tohavefieldsthataccept-expected-)
    - [`to.haveFieldsThatAcceptOnly< expected >`](#-tohavefieldsthatacceptonly-expected-)
  - Arrays
    - [`to.include< expected >`](#-toinclude-expected-)
  - Functions
    - [`to.returnType< expected >`](#-toreturn-expected-)
    - [`to.returnTypeOnly< expected >`](#-toreturnonly-expected-)
    - [`to.resolveTo< expected >`](#-toresolveto-expected-)
    - [`to.resolveToOnly< expected >`](#-toresolvetoonly-expected-)
    - [`to.acceptParameters< expected >`](#-toacceptparameters-expected-)
    - [`to.acceptOnlyParameters< expected >`](#-toacceptonlyparameters-expected-)

## # `_< test >`

Shortcut to a positive assertion [`_.pass< expectation >`](#-_pass-test-). Expects check type to resolve to `true`.

```ts
type test = _<expect<"a", to.beAssignableTo<string>>>;
```

[↥ To the listing](#api)

## # `_.pass< test >`

Positive assertion. Expects check type to resolve to `true`.

```ts
type test = _.pass<expect<"a", to.beAssignableTo<string>>>;
```

[↥ To the listing](#api)

## # `_.fail< test >`

Negative assertion. Expects check type to resolve to `false`.

```ts
type test = _.fail<expect<"a", to.beAssignableTo<number>>>;
```

[↥ To the listing](#api)

## # `_.not`

Negates the checks. It's a namespace that contains aliases to all the check types and negates the result. Can be used to write negative checks in a positive assertion.

```ts
type suit =
  | _<expect<number, to.not.accept<"foo">>>
  | _<expect<void, to.not.beDefined>>
  // same as above
  | _.fail<expect<void, to.beDefined>>
  | _.fail<expect<number, to.accept<"foo">>>;
```

[↥ To the listing](#api)

## # `expect< given, check >`

Runs a check against a given type and resolves in the checks boolean result: `true` if check passes and `false` if it fails.

```ts
type result2 = expect<1, to.beTruthy>; // result1 is of type `true`
type result1 = expect<0, to.beTruthy>; // result1 is of type `false`

type suit =
  | _<result2> // passes
  | _<result1> // fails
  // same as above
  | _<expect<1, to.beTruthy>> // passes
  | _<expect<0, to.beTruthy>>; // fails
```

[↥ To the listing](#api)

## # `expectReturnOf< given, check >`

Expects given to be a function and runs the check on its return value. Shortcut for `expect<ReturnType<given>, check>`

```ts
type suit =
  | _<expectReturnOf<() => string, to.accept<"foo">>>
  // same as above
  | _<expect<ReturnType<() => string>, to.accept<"foo">>>;
```

[↥ To the listing](#api)

## # `expectParametersOf< given, check >`

Expects given to be a function and runs the check on its parameters type. Shortcut for `expect<Parameters<given>, check>`

```ts
type suit =
  | _<expectParametersOf<(a: string, b?: number) => string, to.accept<[string]>>>
  | _<expectParametersOf<(a: string, b?: number) => string, to.accept<[string, number]>>>
  | _<expectParametersOf<(a: string, b?: number) => string, to.accept<[string, undefined]>>>
  // same as above
  | _<expect<Parameters<(a: string, b?: number) => string>, to.accept<[string]>>>
  | _<expect<Parameters<(a: string, b?: number) => string>, to.accept<[string, number]>>>
  | _<expect<Parameters<(a: string, b?: number) => string>, to.accept<[string, undefined]>>>;
```

[↥ To the listing](#api)

## # `expectKeysOf< given, check >`

Expects given to be an object and runs the check on its keys. Shortcut for `expect<keyof given, check>`

```ts
type suit =
  | _<expectKeysOf<{ a: string; b?: number }, to.be<"a" | "b">>>
  // same as above
  | _<expect<keyof { a: string; b?: number }, to.be<"a" | "b">>>;
```

[↥ To the listing](#api)

## # `expectValuesOf< given, check >`

Expects given to be an object or an array or a tuple and runs the check on its value types. Shortcut for `expect<given[keyof given], check>`

```ts
type MyObject = { a: string; b?: number };
type MyArray = Array<boolean>;
type MyTuple = [index: number, value: string];

type suit =
  | _<expectValuesOf<MyObject, to.be<string | number | undefined>>>
  | _<expectValuesOf<MyArray, to.accept<true>>>
  | _<expectValuesOf<MyTuple, to.accept<number | string>>>
  // same as above
  | _<expect<MyObject[keyof MyObject], to.be<string | number | undefined>>>
  | _<expect<MyArray[number], to.accept<true>>>
  | _<expect<MyTuple[number], to.accept<number | string>>>;
```

[↥ To the listing](#api)

## # `_.falsy`

A union of base and literal types that evaluates as false in JS. This does not include `NaN` since it's type is `number`.

```ts
export type falsy = false | "" | 0 | 0n | null | undefined | void;
```

[↥ To the listing](#api)

## # `_.primitive`

A union of all the base types that are considered primitive types in JavaScript. Primitive means has no internal structure, thus can't be accessed inside. Even though `null` is technically of an `object` type it does not allow you to use a property accessor `.` to get it's, or it's prototypes content thus counting as a primitive value.

```ts
export type primitive = string | number | bigint | boolean | symbol | null | undefined;
```

[↥ To the listing](#api)

## # `_.nullish`

A union of all the base types that are considered nullish, meaning can accept null or undefined.

```ts
export type nullish = null | undefined | void;
```

[↥ To the listing](#api)

## # `to.equalTo< expected >`

Given type should strictly equal to expected one. Both types should be assignable to each other.

```ts
type MyType = number;

type suit =
  | _<expect<MyType, to.equalTo<number>>>
  | _<expect<MyType, to.not.equalTo<1>>>
  | _<expect<MyType, to.not.equalTo<string>>>
  | _<expect<MyType, to.not.equalTo<"1">>>;
```

[↥ To the listing](#api)

## # `to.be< expected >`

Given type should strictly equal to expected one. Both types should be assignable to each other. Alias for [`to.equalTo< expected >`](#-toequalto-expected-)

```ts
type MyType = number;

type suit =
  | _<expect<MyType, to.be<number>>>
  | _<expect<MyType, to.not.be<1>>>
  | _<expect<MyType, to.not.be<string>>>
  | _<expect<MyType, to.not.be<"1">>>;
```

[↥ To the listing](#api)

## # `to.accept< expected >`

Expected type should be assignable to a given one, bot not necessarily the other way around. Reverse of [`to.beAssignableTo< expected >`](#-tobeassignableto-expected-).

```ts
type suit =
  | _<expect<number, to.accept<1>>>
  | _<expect<1, to.not.accept<number>>>
  | _<expect<number | string, to.accept<number>>>
  | _<expect<number, to.not.accept<number | string>>>;
```

[↥ To the listing](#api)

## # `to.beAssignableTo< expected >`

Given type should be assignable to the expected one, bot not necessarily the other way around. Reverse of [`to.accept< expected >`](#-toaccept-expected-).

```ts
type suit =
  | _<expect<number, to.accept<1>>>
  | _<expect<1, to.not.accept<number>>>
  | _<expect<number | string, to.accept<number>>>
  | _<expect<number, to.not.accept<number | string>>>;
```

[↥ To the listing](#api)

## # `to.extend< expected >`

Expected type is assignable to given but not the other way around. Means that given type is a superset of the expected one. Reverse of [`to.beExtendedBy< expected >`](#-tobeextendedby-expected-).

```ts
type suit =
  | _<expect<1, to.extend<number>>>
  | _<expect<"a", to.extend<string>>>
  | _<expect<() => number, to.extend<Function>>>
  | _<expect<{ a: string; b: number }, to.extend<{ a: string }>>>;
```

[↥ To the listing](#api)

## # `to.beExtendedBy< expected >`

Given type is assignable to expected but not the other way around. Means that expected type is a superset of the given one. Reverse of [`to.extend< expected >`](#-toextend-expected-).

```ts
type suit =
  | _<expect<number, to.beExtendedBy<1>>>
  | _<expect<string>, to.beExtendedBy<"a">>
  | _<expect<Function, to.beExtendedBy<() => number>>>
  | _<expect<{ a: string }, to.beExtendedBy<{ a: string; b: number }>>>;
```

[↥ To the listing](#api)

## # `to.beDefined`

Given type does not accept `undefined | void`

```ts
type suit =
  | _<expect<number, to.beDefined>>
  | _<expect<string, to.beDefined>>
  | _<expect<Function, to.beDefined>>
  | _<expect<null, to.beDefined>>
  | _<expect<undefined, to.not.beDefined>>
  | _<expect<void, to.not.beDefined>>
  | _<expect<never, to.not.beDefined>>;
```

[↥ To the listing](#api)

## # `to.beOptional`

Given type does can accept `undefined`. Reverse of [`to.beDefined`](#-tobedefined)

```ts
type suit =
  | _<expect<undefined | number, to.beOptional>>
  | _<expect<undefined, to.beOptional>>
  | _<expect<void, to.beOptional>>
  | _<expect<number, to.not.beOptional>>
  | _<expect<"", to.not.beOptional>>
  | _<expect<false, to.not.beOptional>>;
```

[↥ To the listing](#api)

## # `to.beNullish`

Given type can accept `null | undefined`

```ts
type suit =
  | _<expect<null, to.beNullish>>
  | _<expect<undefined, to.beNullish>>
  | _<expect<void, to.beNullish>>
  | _<expect<number, to.not.beNullish>>
  | _<expect<() => void, to.not.beNullish>>;
```

[↥ To the listing](#api)

## # `to.bePrimitive`

Given type can be assigned to one of the primitive types `string | number | bigint | boolean | symbol | null | undefined`

```ts
type suit =
  | _<expect<null, to.beNullish>>
  | _<expect<undefined, to.beNullish>>
  | _<expect<void, to.beNullish>>
  | _<expect<number, to.not.beNullish>>
  | _<expect<() => void, to.not.beNullish>>;
```

[↥ To the listing](#api)

## # `to.beLiteral`

Given type is a literal which means it extends one of these primitives: `number | string | boolean`

```ts
type suit =
  | _<expect<1, to.beLiteral>>
  | _<expect<"foo", to.beLiteral>>
  | _<expect<true, to.beLiteral>>
  | _<expect<false, to.beLiteral>>
  | _<expect<string, to.not.beLiteral>>;
```

[↥ To the listing](#api)

## # `to.beNever`

Given type should resolve to `never`

```ts
type suit =
  | _<expect<never, to.beNever>>
  | _<expect<"a", to.not.beNever>>
  | _<expect<void, to.not.beNever>>
  | _<expect<_.primitive, to.not.beNever>>
  | _.fail<expect<never, to.not.beNever>>; // types are weird, you never know :)
```

[↥ To the listing](#api)

## # `to.beTruthy`

Given type can contain only truthy values, this means it's not compatible with falsy values and their supersets. Since `0` is falsy `number` can't be considered a truthy type since it can accept `0`.

```ts
type suit =
  | _<expect<1, to.beTruthy>>
  | _<expect<"foo", to.beTruthy>>
  | _<expect<true, to.beTruthy>>
  | _<expect<{ a: any }, to.beTruthy>>
  | _<expect<() => void, to.beTruthy>>
  | _<expect<false, to.not.beTruthy>>
  | _<expect<number, to.not.beTruthy>>
  | _<expect<boolean, to.not.beTruthy>>;
```

[↥ To the listing](#api)

## # `to.beFalsy`

Given type can contain only a falsy value: `false | "" | 0 | 0n | null | undefined | void`. Type that can hold falsy and truthy value at the same time, like an optional field, can not be considered falsy.

```ts
type suit =
  | _<expect<false, to.beFalsy>>
  | _<expect<0, to.beFalsy>>
  | _<expect<null, to.beFalsy>>
  | _<expect<"", to.beFalsy>>
  | _<expect<boolean, to.not.beFalsy>>
  | _<expect<number | undefined, to.not.beFalsy>>;
```

[↥ To the listing](#api)

## # `to.beInvocable`

Given type can be invoked like a function.

```ts
type suit =
  | _<expect<() => any, to.beInvocable>>
  | _<expect<Function, to.beInvocable>>
  | _<expect<{ (...args: any[]): void }, to.beInvocable>>
  | _<expect<number, to.not.beInvocable>>
  | _<expect<unknown, to.not.beInvocable>>;
```

[↥ To the listing](#api)

## # `to.beNewable`

Given type is a constructor and can be instantiated with the `new` keyword.

```ts
class EmptyClass {}
type suit =
  | _<expect<typeof EmptyClass, to.beNewable>>
  | _<expect<typeof RegExp, to.beNewable>>
  | _<expect<RegExp, to.not.beNewable>>
  | _<expect<{ new (arg: number): boolean }, to.beNewable>>
  | _<expect<() => object, to.not.beNewable>>
  | _<expect<{ (arg: number): boolean }, to.not.beNewable>>
  | _<expect<object, to.not.beNewable>>
  | _<expect<unknown, to.not.beNewable>>;
```

[↥ To the listing](#api)

## # `to.startWith< expected >`

Given and expected types are strings and given is prefixed with expected.

```ts
type suit =
  | _<expect<"foobar", to.startWith<"foo">>>
  | _<expect<"baz", to.startWith<"">>>
  | _<expect<"foo", to.not.startWith<"bar">>>;
```

[↥ To the listing](#api)

## # `to.endWith< expected >`

Given and expected types are strings and given is suffixed with expected.

```ts
type suit =
  | _<expect<"foobar", to.endWith<"bar">>>
  | _<expect<"baz", to.endWith<"">>>
  | _<expect<"foo", to.not.endWith<"bar">>>;
```

[↥ To the listing](#api)

## # `to.contain< expected >`

Given and expected types are strings and expected is a substring of the given.

```ts
type suit =
  | _<expect<"foobar", to.endWith<"bar">>>
  | _<expect<"baz", to.endWith<"">>>
  | _<expect<"foo", to.not.endWith<"bar">>>;
```

[↥ To the listing](#api)

## # `to.haveKeys< expected >`

Given is an object that should contain expected keys.

```ts
type suit =
  | _<expect<{ a: number }, to.haveKeys<"a">>>
  | _<expect<{ a: number; b: string }, to.haveKeys<"a">>>
  | _<expect<{ a: number; b: string }, to.haveKeys<"b">>>
  | _<expect<{ a: number; b: string }, to.haveKeys<"a" | "b">>>
  | _<expect<object, to.not.haveKeys<"a">>>;
```

[↥ To the listing](#api)

## # `to.haveOnlyKeys< expected >`

Given is an object that should only contain expected keys.

```ts
type suit =
  | _<expect<{ a: number }, to.haveOnlyKeys<"a">>>
  | _<expect<{ a: number; b: string }, to.not.haveOnlyKeys<"a">>>
  | _<expect<{ a: number; b: string }, to.not.haveOnlyKeys<"b">>>
  | _<expect<{ a: number; b: string }, to.haveOnlyKeys<"a" | "b">>>;
```

[↥ To the listing](#api)

## # `to.haveFieldsThatAccept< expected >`

Given is an object with fields that accept expected value types.

```ts
type suit =
  | _<expect<{ a: number; b: string }, to.haveFieldsThatAccept<number | string>>>
  | _<expect<{ a: number; b: string }, to.haveFieldsThatAccept<"foo">>>
  | _<expect<{ a: number; b: string }, to.haveFieldsThatAccept<1>>>
  | _<expect<{ a: number; b: string }, to.haveFieldsThatAccept<1 | "foo">>>
  | _<expect<{ a: number; b?: string }, to.haveFieldsThatAccept<undefined>>>
  | _<expect<{ a: number; b?: string }, to.not.haveFieldsThatAccept<boolean>>>
  | _<expect<{ a: number; b?: string }, to.not.haveFieldsThatAccept<number | string | boolean>>>;
```

[↥ To the listing](#api)

## # `to.haveFieldsThatAcceptOnly< expected >`

Given is an object with fields that accept only expected value types.

```ts
type suit =
  | _<expect<{ a: number; b: string }, to.haveFieldsThatAcceptOnly<number | string>>>
  | _<expect<{ a: number; b: string }, to.not.haveFieldsThatAcceptOnly<"foo">>>
  | _<expect<{ a: number; b: string }, to.not.haveFieldsThatAcceptOnly<1>>>
  | _<expect<{ a: number; b: string }, to.not.haveFieldsThatAcceptOnly<1 | "foo">>>
  | _<expect<{ a: number; b?: string }, to.not.haveFieldsThatAcceptOnly<undefined>>>
  | _<expect<{ a: number; b?: string }, to.not.haveFieldsThatAcceptOnly<boolean>>>
  | _<expect<{ a: number; b?: string }, to.not.haveFieldsThatAccept<number | string | boolean>>>;
```

[↥ To the listing](#api)

## # `to.include< expected >`

Given is an array that can contain the expected type.

```ts
type suit =
  | _<expect<Array<number>, to.include<number>>>
  | _<expect<Array<number | string>, to.include<number>>>
  | _<expect<number[], to.include<number>>>
  | _<expect<[number], to.include<number>>>
  | _<expect<[number, string], to.include<number>>>
  | _<expect<[number, string], to.not.include<number | string | boolean>>>;
```

[↥ To the listing](#api)

## # `to.returnType< expected >`

Given is a function whose return type should be assignable to the expected type.

```ts
type suit =
  | _<expect<() => number | string, to.returnType<number>>>
  | _<expect<() => void, to.returnType<void>>>
  | _<expect<() => void, to.returnType<undefined>>>
  | _<expect<() => Promise<"a">, to.returnType<Promise<any>>>>
  | _<expect<() => number[], to.returnType<Array<number>>>>
  | _<expect<() => number, to.not.return<string>>>
  | _<expect<() => 1, to.not.return<number>>>;
```

[↥ To the listing](#api)

## # `to.returnTypeOnly< expected >`

Given is a function whose return type should strictly equal to the expected type, meaning they both should be assignable to each other.

```ts
type suit =
  | _<expect<() => number | string, to.returnTypeOnly<number | string>>>
  | _<expect<() => number | string, to.not.returnOnly<number>>>
  | _<expect<() => void, to.returnTypeOnly<void>>>
  | _<expect<() => number[], to.returnTypeOnly<Array<number>>>>
  | _<expect<() => number, to.not.returnOnly<string>>>
  | _<expect<() => 1, to.not.returnOnly<number>>>;
```

[↥ To the listing](#api)

## # `to.resolveTo< expected >`

Given is a function whose return type is a promise that resolves to the expected type.

```ts
type suit =
  | _<expect<() => Promise<void>, to.resolveTo<undefined>>>
  | _<expect<() => Promise<number>, to.resolveTo<number>>>
  | _<expect<() => Promise<number | string | boolean>, to.resolveTo<number | string>>>
  | _<expect<() => Promise<1>, to.not.resolveTo<number>>>
  | _<expect<() => Promise<number>, to.not.resolveTo<number | string>>>
  | _<expect<() => Promise<Promise<string>>, to.not.resolveTo<string>>>;
```

[↥ To the listing](#api)

## # `to.resolveToOnly< expected >`

Given is a function whose return type is a promise that resolves exactly to the expected type, meaning they both should be assignable to each other.

```ts
type suit =
  | _<expect<() => Promise<void>, to.resolveToOnly<void>>>
  | _<expect<() => Promise<number>, to.resolveToOnly<number>>>
  | _<expect<() => Promise<void>, to.not.resolveToOnly<undefined>>>
  | _<expect<() => Promise<number | string>, to.not.resolveToOnly<number>>>
  | _<expect<() => Promise<number>, to.not.resolveToOnly<number | string>>>
  | _<expect<() => Promise<number>, to.not.resolveToOnly<1>>>;
```

[↥ To the listing](#api)

## # `to.acceptParameters< expected >`

Given is a function whose parameters can accept expected type.

```ts
type suit =
  | _<expect<() => void, to.acceptParameters<[]>>>
  | _<expect<(a: string) => void, to.acceptParameters<[string]>>>
  | _<expect<(a: string | number) => void, to.acceptParameters<[string]>>>
  | _<expect<(a: string | number) => void, to.acceptParameters<[string | number]>>>
  | _<expect<(a: string, b: number) => void, to.acceptParameters<[string, number]>>>
  | _<expect<(a: "a") => void, to.not.acceptParameters<[string]>>>;
```

[↥ To the listing](#api)

## # `to.acceptOnlyParameters< expected >`

Given is a function whose parameters can accept only expected type. Pay attention to optional parameters! Function with optional parameters resolves its parameters to a tuple with optional elements, and they are not strictly compatible with similar const arrays.

```ts
type suit =
  | _<expect<() => void, to.acceptOnlyParameters<[]>>>
  | _<expect<(a: string) => void, to.acceptOnlyParameters<[string]>>>
  | _<expect<(a: string | number) => void, to.not.acceptOnlyParameters<[string]>>>;

type Fn = (a: string, b?: number) => void; // parameters resolve to `[a: string, b?: number | undefined]`
type suit2 =
  // Pay attention! This test fails:
  | _.fail<expect<Fn, to.acceptOnlyParameters<[string, number | undefined]>>>
  // This one passes:
  | _.pass<expect<Fn, to.acceptOnlyParameters<[a: string, b?: number | undefined]>>>;
```

[↥ To the listing](#api)
