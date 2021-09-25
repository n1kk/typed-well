// noinspection JSUnusedGlobalSymbols

import { _ } from "../src/expect";
import {
    EmptyClass,
    ExtendedFunction,
    InvocableInterface,
    NewableInterface
} from "./expect-utils.spec";

// TODO: go over each suit and think of edge cases

type TestMap<T extends { [key in _._checkType]: any }> = T;

type test_map = TestMap<{
    falsy: toBeFalsy;
    truthy: toBeTruthy;
    defined: toBeDefined;
    optional: toBeOptional;
    nullish: toBeNullish;
    primitive: toBePrimitive;
    invokable: toBeInvocable;
    newable: toBeNewable;
    literal: toBeLiteral;

    assign: toBeAssignableTo;
    accept: toAccept;
    equal: toBeEqualTo;
    extend: toExtend;
    extendedBy: toBeExtendedBy;

    prefixed: toStartWith;
    suffixed: toEndWith;
    contains: toContain;

    includes: arrays;
    hasKeys: toHaveKeys;
    hasOnlyKeys: toHaveOnlyKeys;
    hasValues: toHaveFieldsThatAccept;
    hasOnlyValues: toHaveFieldsThatAcceptOnly;

    returns: toReturn;
    returnsOnly: toReturnOnly;
    resolvesTo: toResolveTo;
    resolvesOnlyTo: toResolveToOnly;
    parameters: toAcceptParameters;
    parametersOnly: toAcceptOnlyParameters;
}>;

type toBeDefined =
    | _<_.expect<number, _.toBeDefined>>
    | _<_.expect<string, _.toBeDefined>>
    | _<_.expect<0, _.toBeDefined>>
    | _<_.expect<"", _.toBeDefined>>
    | _<_.expect<false, _.toBeDefined>>
    | _<_.expect<undefined | number, _.not.toBeDefined>>
    | _<_.expect<undefined, _.not.toBeDefined>>
    | _<_.expect<void, _.not.toBeDefined>>;

type toBeOptional =
    | _<_.expect<undefined | number, _.toBeOptional>>
    | _<_.expect<undefined, _.toBeOptional>>
    | _<_.expect<void, _.toBeOptional>>
    | _<_.expect<number, _.not.toBeOptional>>
    | _<_.expect<string, _.not.toBeOptional>>
    | _<_.expect<0, _.not.toBeOptional>>
    | _<_.expect<"", _.not.toBeOptional>>
    | _<_.expect<false, _.not.toBeOptional>>;

type toBeFalsy =
    | _<_.expect<1, _.not.toBeFalsy>>
    | _<_.expect<"a", _.not.toBeFalsy>>
    | _<_.expect<true, _.not.toBeFalsy>>
    | _<_.expect<object, _.not.toBeFalsy>>
    | _<_.expect<[], _.not.toBeFalsy>>
    | _<_.expect<keyof { a: 1 }, _.not.toBeFalsy>>
    | _<_.expect<{}, _.not.toBeFalsy>>
    | _<_.expect<0, _.toBeFalsy>>
    | _<_.expect<"", _.toBeFalsy>>
    | _<_.expect<false, _.toBeFalsy>>
    | _<_.expect<void, _.toBeFalsy>>
    | _<_.expect<undefined, _.toBeFalsy>>
    | _<_.expect<number, _.not.toBeFalsy>>
    | _<_.expect<string, _.not.toBeFalsy>>
    | _<_.expect<boolean, _.not.toBeFalsy>>;

type toBeTruthy =
    | _<_.expect<1, _.toBeTruthy>>
    | _<_.expect<"a", _.toBeTruthy>>
    | _<_.expect<true, _.toBeTruthy>>
    | _<_.expect<object, _.toBeTruthy>>
    | _<_.expect<[], _.toBeTruthy>>
    | _<_.expect<keyof { a: 1 }, _.toBeTruthy>>
    | _<_.expect<{}, _.toBeTruthy>>
    | _<_.expect<0, _.not.toBeTruthy>>
    | _<_.expect<"", _.not.toBeTruthy>>
    | _<_.expect<false, _.not.toBeTruthy>>
    | _<_.expect<number, _.not.toBeTruthy>>
    | _<_.expect<string, _.not.toBeTruthy>>
    | _<_.expect<boolean, _.not.toBeTruthy>>
    | _<_.expect<void, _.not.toBeTruthy>>
    | _<_.expect<undefined, _.not.toBeTruthy>>;

type toBeNullish =
    | _<_.expect<null, _.toBeNullish>>
    | _<_.expect<undefined, _.toBeNullish>>
    | _<_.expect<void, _.toBeNullish>>
    | _<_.expect<0, _.not.toBeNullish>>
    | _<_.expect<"", _.not.toBeNullish>>
    | _<_.expect<number, _.not.toBeNullish>>
    | _<_.expect<string, _.not.toBeNullish>>;

type toBePrimitive =
    | _<_.expect<1, _.toBePrimitive>>
    | _<_.expect<"a", _.toBePrimitive>>
    | _<_.expect<true, _.toBePrimitive>>
    | _<_.expect<false, _.toBePrimitive>>
    | _<_.expect<number, _.toBePrimitive>>
    | _<_.expect<string, _.toBePrimitive>>
    | _<_.expect<null, _.toBePrimitive>>
    | _<_.expect<undefined, _.toBePrimitive>>
    | _<_.expect<bigint, _.toBePrimitive>>
    | _<_.expect<symbol, _.toBePrimitive>>
    | _<_.expect<void, _.not.toBePrimitive>>
    | _<_.expect<object, _.not.toBePrimitive>>
    | _<_.expect<[], _.not.toBePrimitive>>
    | _<_.expect<{ a: number }, _.not.toBePrimitive>>
    | _<_.expect<{}, _.not.toBePrimitive>>;

type toBeLiteral =
    | _<_.expect<1, _.toBeLiteral>>
    | _<_.expect<"a", _.toBeLiteral>>
    | _<_.expect<true, _.toBeLiteral>>
    | _<_.expect<false, _.toBeLiteral>>
    | _<_.expect<number, _.not.toBeLiteral>>
    | _<_.expect<string, _.not.toBeLiteral>>
    | _<_.expect<null, _.not.toBeLiteral>>
    | _<_.expect<undefined, _.not.toBeLiteral>>
    | _<_.expect<bigint, _.not.toBeLiteral>>
    | _<_.expect<symbol, _.not.toBeLiteral>>
    | _<_.expect<void, _.not.toBeLiteral>>
    | _<_.expect<object, _.not.toBeLiteral>>
    | _<_.expect<[], _.not.toBeLiteral>>
    | _<_.expect<{ a: number }, _.not.toBeLiteral>>
    | _<_.expect<{}, _.not.toBeLiteral>>;

type toBeInvocable =
    | _<_.expect<() => void, _.toBeInvocable>>
    | _<_.expect<Function, _.toBeInvocable>>
    | _<_.expect<typeof console.log, _.toBeInvocable>>
    | _<_.expect<ExtendedFunction, _.toBeInvocable>>
    | _<_.expect<typeof ExtendedFunction, _.toBeInvocable>>
    | _<_.expect<InvocableInterface, _.toBeInvocable>>
    | _<_.expect<NewableInterface, _.toBeInvocable>>
    | _<_.expect<void, _.not.toBeInvocable>>
    | _<_.expect<object, _.not.toBeInvocable>>
    | _<_.expect<number, _.not.toBeInvocable>>
    | _<_.expect<number | ExtendedFunction, _.not.toBeInvocable>>
    | _<_.expect<number | (() => void), _.not.toBeInvocable>>
    | _<_.expect<object | InvocableInterface, _.not.toBeInvocable>>
    | _<_.expect<unknown, _.not.toBeInvocable>>;

type toBeNewable =
    | "can a given type be called with new keyword"
    | _<_.expect<typeof EmptyClass, _.toBeNewable>>
    | _<_.expect<typeof ExtendedFunction, _.toBeNewable>>
    | _<_.expect<typeof Function, _.toBeNewable>>
    | _<_.expect<{ new (arg: number): boolean }, _.toBeNewable>>
    | _<_.expect<Function, _.not.toBeNewable>>
    | _<_.expect<() => object, _.not.toBeNewable>>
    | _<_.expect<{ (arg: number): boolean }, _.not.toBeNewable>>
    | _<_.expect<object, _.not.toBeNewable>>
    | _<_.expect<unknown, _.not.toBeNewable>>;

type toStartWith =
    | _<_.expect<"asd", _.toStartWith<"a">>>
    | _<_.expect<"asd", _.toStartWith<"">>>
    | _<_.expect<"", _.toStartWith<"">>>
    | _<_.expect<"asd", _.not.toStartWith<"s">>>
    | _<_.expect<"asd", _.not.toStartWith<"-">>>
    | _<_.expect<1, _.not.toStartWith<"-">>>
    | _<_.expect<undefined, _.not.toStartWith<"-">>>
    | _<_.expect<{}, _.not.toStartWith<"-">>>;

type toEndWith =
    | _<_.expect<"asd", _.toEndWith<"d">>>
    | _<_.expect<"asd", _.toEndWith<"">>>
    | _<_.expect<"", _.toEndWith<"">>>
    | _<_.expect<"asd", _.not.toEndWith<"s">>>
    | _<_.expect<"asd", _.not.toEndWith<"-">>>
    | _<_.expect<1, _.not.toEndWith<"-">>>
    | _<_.expect<undefined, _.not.toEndWith<"-">>>
    | _<_.expect<{}, _.not.toEndWith<"-">>>;

type toContain =
    | _<_.expect<"asd", _.toContain<"a">>>
    | _<_.expect<"asd", _.toContain<"s">>>
    | _<_.expect<"asd", _.toContain<"d">>>
    | _<_.expect<"assert", _.toContain<"ss">>>
    | _<_.expect<"assert", _.toContain<"sse">>>
    | _<_.expect<"assert", _.not.toContain<"-">>>
    | _<_.expect<1, _.not.toContain<"-">>>
    | _<_.expect<undefined, _.not.toContain<"-">>>
    | _<_.expect<{}, _.not.toContain<"-">>>;

type toBeAssignableTo =
    | _<_.expect<1, _.toBeAssignableTo<number>>>
    | _<_.expect<"a", _.toBeAssignableTo<string>>>
    | _<_.expect<true, _.toBeAssignableTo<boolean>>>
    | _<_.expect<{ a: number; b: string }, _.toBeAssignableTo<{ a: number }>>>
    | _<_.expect<undefined, _.toBeAssignableTo<void>>>
    | _<_.expect<number, _.not.toBeAssignableTo<1>>>
    | _<_.expect<string, _.not.toBeAssignableTo<"a">>>
    | _<_.expect<boolean, _.not.toBeAssignableTo<true>>>
    | _<_.expect<boolean, _.not.toBeAssignableTo<false>>>
    | _<_.expect<{ a: number }, _.not.toBeAssignableTo<{ a: number; b: string }>>>
    | _<_.expect<void, _.not.toBeAssignableTo<undefined>>>
    | _<_.expect<string, _.not.toBeAssignableTo<number>>>;

type toAccept =
    | _<_.expect<number, _.toAccept<1>>>
    | _<_.expect<string, _.toAccept<"a">>>
    | _<_.expect<boolean, _.toAccept<true>>>
    | _<_.expect<{ a: number }, _.toAccept<{ a: number; b: string }>>>
    | _<_.expect<void, _.toAccept<undefined>>>
    | _<_.expect<1, _.not.toAccept<number>>>
    | _<_.expect<"a", _.not.toAccept<string>>>
    | _<_.expect<true, _.not.toAccept<boolean>>>
    | _<_.expect<false, _.not.toAccept<boolean>>>
    | _<_.expect<{ a: number; b: string }, _.not.toAccept<{ a: number }>>>
    | _<_.expect<undefined, _.not.toAccept<void>>>
    | _<_.expect<string, _.not.toAccept<number>>>;

type toBeEqualTo =
    | _<_.expect<1, _.toEqualTo<1>>>
    | _<_.expect<"a", _.toEqualTo<"a">>>
    | _<_.expect<true, _.toEqualTo<true>>>
    | _<_.expect<[], _.toEqualTo<[]>>>
    | _<_.expect<{}, _.toEqualTo<{}>>>
    | _<_.expect<number, _.toEqualTo<number>>>
    | _<_.expect<string, _.toEqualTo<string>>>
    | _<_.expect<boolean, _.toEqualTo<boolean>>>
    | _<_.expect<Array<any>, _.toEqualTo<Array<any>>>>
    | _<_.expect<object, _.toEqualTo<object>>>
    | _<_.expect<undefined, _.toEqualTo<undefined>>>
    | _<_.expect<null, _.toEqualTo<null>>>
    | _<_.expect<{ a: number }, _.toEqualTo<{ a: number }>>>
    | _<_.expect<number, _.not.toEqualTo<string>>>
    | _<_.expect<1, _.not.toEqualTo<2>>>
    | _<_.expect<1, _.not.toEqualTo<number>>>
    | _<_.expect<1, _.not.toEqualTo<"1">>>
    | _<_.expect<"a", _.not.toEqualTo<string>>>
    | _<_.expect<"a", _.not.toEqualTo<"b">>>
    | _<_.expect<"a", _.not.toEqualTo<"">>>
    | _<_.expect<"a", _.not.toEqualTo<undefined>>>
    | _<_.expect<"a", _.not.toEqualTo<null>>>
    | _<_.expect<string, _.not.toEqualTo<{}>>>
    | _<_.expect<undefined, _.not.toEqualTo<null>>>
    | _<_.expect<undefined, _.not.toEqualTo<void>>>
    | _<_.expect<{ a: number }, _.not.toEqualTo<{ b: number }>>>
    | _<_.expect<{ a: number }, _.not.toEqualTo<{ a: string }>>>
    | _<_.expect<{ a: number }, _.not.toEqualTo<{ a: string | number }>>>;

type toExtend =
    | _<_.expect<1, _.toExtend<number>>>
    | _<_.expect<1n, _.toExtend<bigint>>>
    | _<_.expect<"a", _.toExtend<string>>>
    | _<_.expect<true, _.toExtend<boolean>>>
    | _<_.expect<[], _.toExtend<{}>>>
    | _<_.expect<number, _.toExtend<unknown>>>
    | _<_.expect<{ a: number }, _.toExtend<{}>>>
    | _<_.expect<{ a: number; b: string }, _.toExtend<{ a: number }>>>
    | _<_.expect<{ a: number }, _.toExtend<{ a: number | string }>>>
    | _<_.expect<number, _.not.toExtend<1>>>
    | _<_.expect<bigint, _.not.toExtend<1n>>>
    | _<_.expect<string, _.not.toExtend<"a">>>
    | _<_.expect<boolean, _.not.toExtend<true>>>
    | _<_.expect<{}, _.not.toExtend<[]>>>
    | _<_.expect<unknown, _.not.toExtend<number>>>
    | _<_.expect<{}, _.not.toExtend<{ a: number }>>>
    | _<_.expect<{ a: number }, _.not.toExtend<{ a: number; b: string }>>>
    | _<_.expect<{ a: number | string }, _.not.toExtend<{ a: number }>>>;

type toBeExtendedBy =
    | _<_.expect<number, _.toBeExtendedBy<1>>>
    | _<_.expect<bigint, _.toBeExtendedBy<1n>>>
    | _<_.expect<string, _.toBeExtendedBy<"a">>>
    | _<_.expect<boolean, _.toBeExtendedBy<true>>>
    | _<_.expect<{}, _.toBeExtendedBy<[]>>>
    | _<_.expect<unknown, _.toBeExtendedBy<number>>>
    | _<_.expect<{}, _.toBeExtendedBy<{ a: number }>>>
    | _<_.expect<{ a: number }, _.toBeExtendedBy<{ a: number; b: string }>>>
    | _<_.expect<{ a: number | string }, _.toBeExtendedBy<{ a: number }>>>
    | _<_.expect<1, _.not.toBeExtendedBy<number>>>
    | _<_.expect<1n, _.not.toBeExtendedBy<bigint>>>
    | _<_.expect<"a", _.not.toBeExtendedBy<string>>>
    | _<_.expect<true, _.not.toBeExtendedBy<boolean>>>
    | _<_.expect<[], _.not.toBeExtendedBy<{}>>>
    | _<_.expect<number, _.not.toBeExtendedBy<unknown>>>
    | _<_.expect<{ a: number }, _.not.toBeExtendedBy<{}>>>
    | _<_.expect<{ a: number; b: string }, _.not.toBeExtendedBy<{ a: number }>>>
    | _<_.expect<{ a: number }, _.not.toBeExtendedBy<{ a: number | string }>>>;

type toHaveKeys =
    | _<_.expect<{ a: number }, _.toHaveKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"b">>>
    | _<_.expect<{ a: number; b: string }, _.toHaveKeys<"a" | "b">>>
    | _<_.expect<object, _.not.toHaveKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.not.toHaveKeys<"c">>>
    | _<_.expect<{}, _.not.toHaveKeys<"a">>>
    // @ts-expect-error
    | _<_.expect<{}, _.toHaveKeys<1>>>
    // @ts-expect-error
    | _<_.expect<{}, _.not.toHaveKeys<1>>>;

type toHaveOnlyKeys =
    | _<_.expect<{ a: number }, _.toHaveOnlyKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.not.toHaveOnlyKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.not.toHaveOnlyKeys<"b">>>
    | _<_.expect<{ a: number; b: string }, _.toHaveOnlyKeys<"a" | "b">>>
    | _<_.expect<object, _.not.toHaveOnlyKeys<"a">>>
    | _<_.expect<{ a: number; b: string }, _.not.toHaveOnlyKeys<"c">>>
    | _<_.expect<{}, _.not.toHaveOnlyKeys<"a">>>
    // @ts-expect-error
    | _<_.expect<{}, _.toHaveOnlyKeys<1>>>
    // @ts-expect-error
    | _<_.expect<{}, _.not.toHaveOnlyKeys<1>>>;

type toHaveFieldsThatAccept =
    | _<_.expect<{ a: 1 }, _.toHaveFieldsThatAccept<1>>>
    | _<_.expect<{ a: number }, _.toHaveFieldsThatAccept<1>>>
    | _<_.expect<{ a: string }, _.toHaveFieldsThatAccept<"a">>>
    | _<_.expect<{ a: string }, _.toHaveFieldsThatAccept<string>>>
    | _<_.expect<{ c: true; b: false }, _.toHaveFieldsThatAccept<boolean>>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<"a">>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<1>>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<1 | "a">>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<1 | string>>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<number | "a">>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<number | string>>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAccept<string | number>>>
    | _<_.expect<{ a: 1 }, _.not.toHaveFieldsThatAccept<2>>>
    | _<_.expect<{ a: number }, _.not.toHaveFieldsThatAccept<"a">>>
    | _<_.expect<{ a: number }, _.not.toHaveFieldsThatAccept<string>>>
    | _<_.expect<{ a: number }, _.not.toHaveFieldsThatAccept<unknown>>>
    | _<_.expect<{ c: number; b: string }, _.not.toHaveFieldsThatAccept<boolean>>>
    | _<_.expect<{ c: true }, _.not.toHaveFieldsThatAccept<boolean>>>
    | _<_.expect<{ c: number; b: string }, _.not.toHaveFieldsThatAccept<string | number | boolean>>>;

type toHaveFieldsThatAcceptOnly =
    | _<_.expect<{ a: 1 }, _.toHaveFieldsThatAcceptOnly<1>>>
    | _<_.expect<{ a: number }, _.toHaveFieldsThatAcceptOnly<number>>>
    | _<_.expect<{ c: number; b: string }, _.toHaveFieldsThatAcceptOnly<string | number>>>
    | _<_.expect<{ a: number }, _.not.toHaveFieldsThatAcceptOnly<1>>>
    | _<_.expect<{ a: number }, _.not.toHaveFieldsThatAcceptOnly<string>>>
    | _<_.expect<{ c: number; b: string }, _.not.toHaveFieldsThatAcceptOnly<string>>>
    | _<_.expect<{ c: number; b: string }, _.not.toHaveFieldsThatAcceptOnly<number>>>;

type arrays =
    | _<_.expect<[1], _.toBeAssignableTo<[1]>>>
    | _<_.expect<[1], _.toBeAssignableTo<[number]>>>
    | _<_.expect<[number], _.toAccept<[number]>>>
    | _<_.expect<[number], _.toAccept<[1]>>>
    | _<_.expect<[number], _.toBeAssignableTo<[number | string]>>>
    | _<_.expect<Array<string | boolean>, _.toAccept<[string | boolean]>>>
    | _<_.expect<Array<string | boolean>, _.not.toBeAssignableTo<[string | boolean]>>>
    | _<_.expect<[number], _.not.toBeAssignableTo<[1]>>>
    | _<_.expect<[number | string], _.not.toBeAssignableTo<[1]>>>
    | _<_.expect<[number | string], _.not.toBeAssignableTo<[number]>>>
    | _<_.expect<[1], _.toInclude<1>>>
    | _<_.expect<[1], _.not.toInclude<2>>>
    | _<_.expect<[number], _.toInclude<number>>>
    | _<_.expect<[number | string], _.toInclude<number>>>
    | _<_.expect<[number, string], _.toInclude<number>>>
    | _<_.expect<[number | string], _.toInclude<number | string>>>
    | _<_.expect<[number, string], _.toInclude<number | string>>>
    | _<_.expect<[number, string], _.not.toInclude<number | string | boolean>>>
    | _<_.expect<Array<1>, _.toInclude<1>>>
    | _<_.expect<Array<1>, _.not.toInclude<2>>>
    | _<_.expect<Array<number>, _.toInclude<number>>>
    | _<_.expect<Array<number | string>, _.toInclude<number>>>
    | _<_.expect<Array<number | string>, _.toInclude<number | string>>>
    | _<_.expect<Array<number | string>, _.not.toInclude<number | string | boolean>>>;

type toReturn =
    | _<_.expect<() => number | string, _.toReturn<number>>>
    | _<_.expect<() => void, _.toReturn<void>>>
    | _<_.expect<() => void, _.toReturn<undefined>>>
    | _<_.expect<() => undefined, _.toReturn<undefined>>>
    | _<_.expect<() => number, _.toReturn<number>>>
    | _<_.expect<() => unknown, _.toReturn<number>>>
    | _<_.expect<() => unknown, _.toReturn<unknown>>>
    | _<_.expect<() => number, _.toReturn<1>>>
    | _<_.expect<() => number | string, _.toReturn<number | string>>>
    | _<_.expect<() => number | string | boolean, _.toReturn<number | string>>>
    | _<_.expect<() => Promise<"a">, _.toReturn<Promise<any>>>>
    | _<_.expect<() => number[], _.toReturn<Array<number>>>>
    | _<_.expect<() => undefined, _.not.toReturn<void>>>
    | _<_.expect<() => number, _.not.toReturn<unknown>>>
    | _<_.expect<() => number, _.not.toReturn<string>>>
    | _<_.expect<() => 1, _.not.toReturn<number>>>
    | _<_.expect<() => number, _.not.toReturn<number | string>>>
    | _<_.expect<() => Promise<string>, _.not.toReturn<string>>>;

type toReturnOnly =
    | _<_.expect<() => void, _.toReturnOnly<void>>>
    | _<_.expect<() => undefined, _.toReturnOnly<undefined>>>
    | _<_.expect<() => number, _.toReturnOnly<number>>>
    | _<_.expect<() => unknown, _.toReturnOnly<unknown>>>
    | _<_.expect<() => number | string, _.toReturnOnly<number | string>>>
    | _<_.expect<() => Promise<"a">, _.toReturnOnly<Promise<any>>>>
    | _<_.expect<() => number[], _.toReturnOnly<Array<number>>>>
    | _<_.expect<() => number | string, _.not.toReturnOnly<number | string | boolean>>>
    | _<_.expect<() => 1, _.not.toReturnOnly<number>>>
    | _<_.expect<() => number, _.not.toReturnOnly<unknown>>>
    | _<_.expect<() => undefined, _.not.toReturnOnly<void>>>
    | _<_.expect<() => void, _.not.toReturnOnly<undefined>>>
    | _<_.expect<() => unknown, _.not.toReturnOnly<number>>>
    | _<_.expect<() => unknown, _.not.toReturnOnly<void>>>
    | _<_.expect<() => number, _.not.toReturnOnly<string>>>
    | _<_.expect<() => number, _.not.toReturnOnly<1>>>
    | _<_.expect<() => number | string, _.not.toReturnOnly<number>>>
    | _<_.expect<() => Promise<string>, _.not.toReturnOnly<string>>>;

type toResolveTo =
    | _<_.expect<() => Promise<void>, _.toResolveTo<void>>>
    | _<_.expect<() => Promise<void>, _.toResolveTo<undefined>>>
    | _<_.expect<() => Promise<undefined>, _.toResolveTo<undefined>>>
    | _<_.expect<() => Promise<number>, _.toResolveTo<number>>>
    | _<_.expect<() => Promise<unknown>, _.toResolveTo<number>>>
    | _<_.expect<() => Promise<unknown>, _.toResolveTo<unknown>>>
    | _<_.expect<() => Promise<number>, _.toResolveTo<1>>>
    | _<_.expect<() => Promise<number | string>, _.toResolveTo<number | string>>>
    | _<_.expect<() => Promise<number | string | boolean>, _.toResolveTo<number | string>>>
    | _<_.expect<() => Promise<Promise<"a">>, _.toResolveTo<Promise<any>>>>
    | _<_.expect<() => Promise<number[]>, _.toResolveTo<Array<number>>>>
    | _<_.expect<() => Promise<undefined>, _.not.toResolveTo<void>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveTo<unknown>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveTo<string>>>
    | _<_.expect<() => Promise<1>, _.not.toResolveTo<number>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveTo<number | string>>>
    | _<_.expect<() => Promise<Promise<string>>, _.not.toResolveTo<string>>>;

type toResolveToOnly =
    | _<_.expect<() => Promise<void>, _.toResolveToOnly<void>>>
    | _<_.expect<() => Promise<undefined>, _.toResolveToOnly<undefined>>>
    | _<_.expect<() => Promise<number>, _.toResolveToOnly<number>>>
    | _<_.expect<() => Promise<unknown>, _.toResolveToOnly<unknown>>>
    | _<_.expect<() => Promise<number | string>, _.toResolveToOnly<number | string>>>
    | _<_.expect<() => Promise<Promise<"a">>, _.toResolveToOnly<Promise<any>>>>
    | _<_.expect<() => Promise<number[]>, _.toResolveToOnly<Array<number>>>>
    | _<_.expect<() => Promise<number | string | boolean>, _.not.toResolveToOnly<number | string>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<1>>>
    | _<_.expect<() => Promise<unknown>, _.not.toResolveToOnly<number>>>
    | _<_.expect<() => Promise<void>, _.not.toResolveToOnly<undefined>>>
    | _<_.expect<() => Promise<undefined>, _.not.toResolveToOnly<void>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<unknown>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<string>>>
    | _<_.expect<() => Promise<1>, _.not.toResolveToOnly<number>>>
    | _<_.expect<() => Promise<number>, _.not.toResolveToOnly<number | string>>>
    | _<_.expect<() => Promise<Promise<string>>, _.not.toResolveToOnly<string>>>;

type toAcceptParameters =
    | _<_.expect<() => void, _.toAcceptParameters<[]>>>
    | _<_.expect<(a: string) => void, _.toAcceptParameters<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptParameters<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptParameters<[string | number]>>>
    | _<_.expect<(a: string, b: number) => void, _.toAcceptParameters<[string, number]>>>
    | _<_.expect<(a: string | boolean, b: number) => void, _.toAcceptParameters<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.toAcceptParameters<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.toAcceptParameters<[string]>>>
    | _<_.expect<(a: [string]) => void, _.toAcceptParameters<[[string]]>>>
    | _<_.expect<(a: number[]) => void, _.toAcceptParameters<[[1, 2, 3]]>>>
    | _<_.expect<(a: number[]) => void, _.toAcceptParameters<[(1 | 2 | 3)[]]>>>
    | _<_.expect<(a: string) => void, _.not.toAcceptParameters<string[]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptParameters<[1, 2, 3]>>>
    | _<_.expect<(a: "a") => void, _.not.toAcceptParameters<[string]>>>
    | _<_.expect<(a: boolean) => void, _.not.toAcceptParameters<[number]>>>;

type toAcceptOnlyParameters =
    | _<_.expect<() => void, _.toAcceptOnlyParameters<[]>>>
    | _<_.expect<(a: string) => void, _.toAcceptOnlyParameters<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptOnlyParameters<[string | number]>>>
    | _<_.expect<(a: string, b: number) => void, _.toAcceptOnlyParameters<[string, number]>>>
    | _<_.expect<(a: [string]) => void, _.toAcceptOnlyParameters<[[string]]>>>
    | _<_.expect<(a: string) => void, _.not.toAcceptOnlyParameters<string[]>>>
    | _<_.expect<(a: string | number) => void, _.not.toAcceptOnlyParameters<[string]>>>
    | _<_.expect<(a: string | boolean, b: number) => void, _.not.toAcceptOnlyParameters<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.not.toAcceptOnlyParameters<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.not.toAcceptOnlyParameters<[string]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyParameters<[(1 | 2 | 3)[]]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyParameters<[[1, 2, 3]]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyParameters<[1, 2, 3]>>>
    | _<_.expect<(a: "a") => void, _.not.toAcceptOnlyParameters<[string]>>>
    | _<_.expect<(a: boolean) => void, _.not.toAcceptOnlyParameters<[number]>>>
    | _<_.expect<(a?: boolean) => void, _.toAcceptOnlyParameters<[a?: boolean | undefined]>>>;

type expectReturnTypeOf =
    | _<_.expectReturnOf<() => void, _.not.toBeDefined>>
    | _<_.expectReturnOf<() => undefined, _.not.toBeDefined>>
    | _<_.expectReturnOf<() => undefined | number, _.not.toBeDefined>>
    | _<_.expectReturnOf<() => number, _.toBeDefined>>
    | _<_.expectReturnOf<() => number, _.toBe<number>>>
    | _<_.expectReturnOf<() => never, _.toBe<never>>>
    | _<_.expectReturnOf<() => never, _.not.toBe<void>>>
    | _<_.expectReturnOf<() => 1, _.toBeLiteral>>
    | _<_.expectReturnOf<() => () => void, _.toBeAssignableTo<Function>>>;

type expectParametersOf =
    | _<_.expectParametersOf<() => void, _.toAccept<[]>>>
    | _<_.expectParametersOf<(a: string) => void, _.toAccept<[string]>>>
    | _<_.expectParametersOf<(a: string | number) => void, _.toAccept<[string]>>>
    | _<_.expectParametersOf<(a: string | number) => void, _.toAccept<[string | number]>>>
    | _<_.expectParametersOf<(a: string | number) => void, _.toBe<[string | number]>>>
    | _<_.expectParametersOf<(a: string | number) => void, _.toEqualTo<[string | number]>>>
    | _<_.expectParametersOf<(a: string, b: number) => void, _.toAccept<[string, number]>>>
    | _<_.expectParametersOf<(a: string | boolean, b: number) => void, _.toAccept<[string, number]>>>
    | _<_.expectParametersOf<(a: string, b?: number) => void, _.toAccept<[string, number]>>>
    | _<_.expectParametersOf<(a: string, b?: number) => void, _.toAccept<[string]>>>
    | _<_.expectParametersOf<(a: [string]) => void, _.toAccept<[[string]]>>>
    | _<_.expectParametersOf<(a: number[]) => void, _.toAccept<[[1, 2, 3]]>>>
    | _<_.expectParametersOf<(a: number[]) => void, _.toAccept<[(1 | 2 | 3)[]]>>>
    | _<_.expectParametersOf<(a: string) => void, _.not.toAccept<string[]>>>
    | _<_.expectParametersOf<(a: number[]) => void, _.not.toAccept<[1, 2, 3]>>>
    | _<_.expectParametersOf<(a: "a") => void, _.not.toAccept<[string]>>>
    | _<_.expectParametersOf<(a: boolean) => void, _.not.toAccept<[number]>>>;

type expectKeysOf =
    | _<_.expectKeysOf<{ a: number; b: string }, _.toBe<"a" | "b">>>
    | _<_.expectKeysOf<{ a: number; b?: string }, _.toBe<"a" | "b">>>
    | _<_.expectKeysOf<{ a: number; b: string }, _.toAccept<"a">>>
    | _<_.expectKeysOf<{ a: number; b?: string }, _.toAccept<"b">>>
    | _<_.expectKeysOf<{ getA: () => number; getB: () => string }, _.toStartWith<"get">>>;

type expectValuesOf =
    | _<_.expectValuesOf<{ a: number; b: string }, _.toBe<number | string>>>
    | _<_.expectValuesOf<{ a: number; b?: string }, _.toBe<number | string | undefined>>>
    | _<_.expectValuesOf<{ a: number; b: string }, _.toAccept<number>>>
    | _<_.expectValuesOf<{ a: number; b: string }, _.toAccept<string>>>
    | _<_.expectValuesOf<{ a: number; b: string }, _.not.toAccept<undefined>>>
    | _<_.expectValuesOf<{ getA: () => number; getB: () => string }, _.toBe<(() => number) | (() => string)>>>
    | _<_.expectValuesOf<{ getA: () => number; getB: () => string }, _.toAccept<() => 1>>>
    | _<_.expectValuesOf<number[], _.toAccept<1>>>
    | _<_.expectValuesOf<number[], _.toAccept<number | 0>>>
    | _<_.expectValuesOf<[string, symbol], _.toAccept<string>>>
    | _<_.expectValuesOf<[string, symbol], _.toAccept<symbol>>>
    | _<_.expectValuesOf<[string, symbol], _.toAccept<symbol | string>>>
    | _<_.expectValuesOf<[string, symbol], _.not.toAccept<number>>>
    | _<_.expectValuesOf<[string, symbol], _.not.toAccept<[string]>>>;
