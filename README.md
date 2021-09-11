# WIP

This is a work-in-progress project. Not yet finalized.

# Typed-Well

A zero dependency, human-readable unit testing library for your TypeScript definitions that runs fully in TS Compiler / TS Language Server. Think of it as Jest for types with no extra tooling required.

<p align="center">
    <img src="docs/demo1.apng">
</p>

### About

The goal of this library is to create an easy and clean way to make sure that your custom types actually do what you intended them to do. The idea was to create something that would resemble unit tests, to be more familiar and human-readable.

TypeScript type system got very powerful and flexible in the recent years to the point that it is no longer just a metadata for the compiler, but it's a full meta-programming language. It has conditions, loops, recursion, pretty much all you need to write logic. As you utilise all those tools to create complex types you can end up making some unintended mistakes since typescript does not abide by the imperative paradigm but is more on the side of declarative style, and it is more important that you operate with sets, not objects, so with types if `A` is assignable to `B` it doesn't necessarily mean that `B` is assignable to `A`, since sets can include, extend and overlap each other.

This library tries to provide a set of easily readable utilities that clearly define the intent behind your custom type without dipping into a complicated and confusing terminology of a set theory. Most developers just want to know that type `A` should be compatible with type `B` but not with type `C`, they don't want to figure out what homogenous symmetric binary relation between sets is.

### Usage

Install it via your favorite package manager:

```bash
npm i -D typed-well
```

```bash
yarn add -D typed-well
```

```bash
pnpm i -D typed-well
```

This library exposes a set of utilities packed into a namespace `_` to prevent global scope pollution. To use them you just import the name space in your test file.

```ts
import { _ } from "typed-well";
```

### How does it work

Utilities mimic Jest's `expect` matchers, they are just a set of custom type definitions. It doesn't require you to install any additional tools or define your result expectations in comments. You just write a test and if check fails TS compiler will throw an error on that line, and your IDE will even highlight it.

```ts
type;
```
