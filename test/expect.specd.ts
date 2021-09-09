// noinspection JSUnusedGlobalSymbols

import { _ } from "../src/expect";

type expectedSuits<T extends Record<_.checkType, any>> = never;

type suitMap = expectedSuits<{
    assign: toBeAssignableTo;
    accept: toAccept;
    equal: toBeEqualTo;
    extend: toExtend;
    extendedBy: toBeExtendedBy;
    defined: toBeDefined;
    falsy: toBeFalsy;
    truthy: toBeTruthy;
    nullish: toBeNullish;
    prefixed: toStartWith;
    suffixed: toEndWith;
    contains: toContain;
    includes: arrays;
    hasKeys: toHaveKeys;
    hasOnlyKeys: toHaveOnlyKeys;
    hasValues: toHaveValues;
    hasOnlyValues: toHaveOnlyValues;
    returns: toReturn;
    returnsOnly: toReturnOnly;
    resolvesTo: toResolveTo;
    resolvesOnlyTo: toResolveToOnly;
    arguments: toAcceptArguments;
    argumentsOnly: toAcceptOnlyArguments;
}>;

type toBeDefined =
    | _<_.expect<number, _.toBeDefined>>
    | _<_.expect<string, _.toBeDefined>>
    | _<_.expect<0, _.toBeDefined>>
    | _<_.expect<"", _.toBeDefined>>
    | _<_.expect<false, _.toBeDefined>>
    | _<_.expect<undefined, _.not.toBeDefined>>
    | _<_.expect<void, _.not.toBeDefined>>;

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
    | _<_.expect<"asssd", _.toContain<"ss">>>
    | _<_.expect<"asssd", _.toContain<"sss">>>
    | _<_.expect<"asssd", _.not.toContain<"-">>>
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
    | _<_.expect<1, _.toBeEqualTo<1>>>
    | _<_.expect<"a", _.toBeEqualTo<"a">>>
    | _<_.expect<true, _.toBeEqualTo<true>>>
    | _<_.expect<[], _.toBeEqualTo<[]>>>
    | _<_.expect<{}, _.toBeEqualTo<{}>>>
    | _<_.expect<number, _.toBeEqualTo<number>>>
    | _<_.expect<string, _.toBeEqualTo<string>>>
    | _<_.expect<boolean, _.toBeEqualTo<boolean>>>
    | _<_.expect<Array<any>, _.toBeEqualTo<Array<any>>>>
    | _<_.expect<object, _.toBeEqualTo<object>>>
    | _<_.expect<undefined, _.toBeEqualTo<undefined>>>
    | _<_.expect<null, _.toBeEqualTo<null>>>
    | _<_.expect<{ a: number }, _.toBeEqualTo<{ a: number }>>>
    | _<_.expect<number, _.not.toBeEqualTo<string>>>
    | _<_.expect<1, _.not.toBeEqualTo<2>>>
    | _<_.expect<1, _.not.toBeEqualTo<number>>>
    | _<_.expect<1, _.not.toBeEqualTo<"1">>>
    | _<_.expect<"a", _.not.toBeEqualTo<string>>>
    | _<_.expect<"a", _.not.toBeEqualTo<"b">>>
    | _<_.expect<"a", _.not.toBeEqualTo<"">>>
    | _<_.expect<"a", _.not.toBeEqualTo<undefined>>>
    | _<_.expect<"a", _.not.toBeEqualTo<null>>>
    | _<_.expect<string, _.not.toBeEqualTo<{}>>>
    | _<_.expect<undefined, _.not.toBeEqualTo<null>>>
    | _<_.expect<undefined, _.not.toBeEqualTo<void>>>
    | _<_.expect<{ a: number }, _.not.toBeEqualTo<{ b: number }>>>
    | _<_.expect<{ a: number }, _.not.toBeEqualTo<{ a: string }>>>
    | _<_.expect<{ a: number }, _.not.toBeEqualTo<{ a: string | number }>>>;

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

type toHaveValues =
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

type toHaveOnlyValues =
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

type toAcceptArguments =
    | _<_.expect<() => void, _.toAcceptArguments<[]>>>
    | _<_.expect<(a: string) => void, _.toAcceptArguments<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptArguments<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptArguments<[string | number]>>>
    | _<_.expect<(a: string, b: number) => void, _.toAcceptArguments<[string, number]>>>
    | _<_.expect<(a: string | boolean, b: number) => void, _.toAcceptArguments<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.toAcceptArguments<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.toAcceptArguments<[string]>>>
    | _<_.expect<(a: [string]) => void, _.toAcceptArguments<[[string]]>>>
    | _<_.expect<(a: number[]) => void, _.toAcceptArguments<[[1, 2, 3]]>>>
    | _<_.expect<(a: number[]) => void, _.toAcceptArguments<[(1 | 2 | 3)[]]>>>
    | _<_.expect<(a: string) => void, _.not.toAcceptArguments<string[]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptArguments<[1, 2, 3]>>>
    | _<_.expect<(a: "a") => void, _.not.toAcceptArguments<[string]>>>
    | _<_.expect<(a: boolean) => void, _.not.toAcceptArguments<[number]>>>;

type toAcceptOnlyArguments =
    | _<_.expect<() => void, _.toAcceptOnlyArguments<[]>>>
    | _<_.expect<(a: string) => void, _.toAcceptOnlyArguments<[string]>>>
    | _<_.expect<(a: string | number) => void, _.toAcceptOnlyArguments<[string | number]>>>
    | _<_.expect<(a: string, b: number) => void, _.toAcceptOnlyArguments<[string, number]>>>
    | _<_.expect<(a: [string]) => void, _.toAcceptOnlyArguments<[[string]]>>>
    | _<_.expect<(a: string) => void, _.not.toAcceptOnlyArguments<string[]>>>
    | _<_.expect<(a: string | number) => void, _.not.toAcceptOnlyArguments<[string]>>>
    | _<_.expect<(a: string | boolean, b: number) => void, _.not.toAcceptOnlyArguments<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.not.toAcceptOnlyArguments<[string, number]>>>
    | _<_.expect<(a: string, b?: number) => void, _.not.toAcceptOnlyArguments<[string]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyArguments<[(1 | 2 | 3)[]]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyArguments<[[1, 2, 3]]>>>
    | _<_.expect<(a: number[]) => void, _.not.toAcceptOnlyArguments<[1, 2, 3]>>>
    | _<_.expect<(a: "a") => void, _.not.toAcceptOnlyArguments<[string]>>>
    | _<_.expect<(a: boolean) => void, _.not.toAcceptOnlyArguments<[number]>>>;
