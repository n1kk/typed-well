// noinspection JSUnusedGlobalSymbols

import {
    _,
    __checkType,
    expect,
    expectKeysOf,
    expectParametersOf,
    expectReturnOf,
    expectValuesOf,
    to,
} from "../src/expect";
import { EmptyClass, ExtendedFunction, InvocableInterface, NewableInterface } from "./expect-utils.spec";

// TODO: go over each suit and think of edge cases

type TestMap<T extends { [key in __checkType]: any }> = T;

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
    never: toBeNever;

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
    | _<expect<number, to.beDefined>>
    | _<expect<string, to.beDefined>>
    | _<expect<0, to.beDefined>>
    | _<expect<"", to.beDefined>>
    | _<expect<false, to.beDefined>>
    | _<expect<undefined | number, to.not.beDefined>>
    | _<expect<undefined, to.not.beDefined>>
    | _<expect<void, to.not.beDefined>>;

type toBeOptional =
    | _<expect<undefined | number, to.beOptional>>
    | _<expect<undefined, to.beOptional>>
    | _<expect<void, to.beOptional>>
    | _<expect<number, to.not.beOptional>>
    | _<expect<string, to.not.beOptional>>
    | _<expect<0, to.not.beOptional>>
    | _<expect<"", to.not.beOptional>>
    | _<expect<false, to.not.beOptional>>;

type toBeFalsy =
    | _<expect<1, to.not.beFalsy>>
    | _<expect<"a", to.not.beFalsy>>
    | _<expect<true, to.not.beFalsy>>
    | _<expect<object, to.not.beFalsy>>
    | _<expect<[], to.not.beFalsy>>
    | _<expect<keyof { a: 1 }, to.not.beFalsy>>
    | _<expect<{}, to.not.beFalsy>>
    | _<expect<0, to.beFalsy>>
    | _<expect<"", to.beFalsy>>
    | _<expect<false, to.beFalsy>>
    | _<expect<void, to.beFalsy>>
    | _<expect<undefined, to.beFalsy>>
    | _<expect<number, to.not.beFalsy>>
    | _<expect<string, to.not.beFalsy>>
    | _<expect<boolean, to.not.beFalsy>>;

type toBeTruthy =
    | _<expect<1, to.beTruthy>>
    | _<expect<"a", to.beTruthy>>
    | _<expect<true, to.beTruthy>>
    | _<expect<object, to.beTruthy>>
    | _<expect<[], to.beTruthy>>
    | _<expect<keyof { a: 1 }, to.beTruthy>>
    | _<expect<{}, to.beTruthy>>
    | _<expect<0, to.not.beTruthy>>
    | _<expect<"", to.not.beTruthy>>
    | _<expect<false, to.not.beTruthy>>
    | _<expect<number, to.not.beTruthy>>
    | _<expect<string, to.not.beTruthy>>
    | _<expect<boolean, to.not.beTruthy>>
    | _<expect<void, to.not.beTruthy>>
    | _<expect<undefined, to.not.beTruthy>>;

type toBeNullish =
    | _<expect<null, to.beNullish>>
    | _<expect<undefined, to.beNullish>>
    | _<expect<void, to.beNullish>>
    | _<expect<0, to.not.beNullish>>
    | _<expect<"", to.not.beNullish>>
    | _<expect<number, to.not.beNullish>>
    | _<expect<string, to.not.beNullish>>;

type toBePrimitive =
    | _<expect<1, to.bePrimitive>>
    | _<expect<"a", to.bePrimitive>>
    | _<expect<true, to.bePrimitive>>
    | _<expect<false, to.bePrimitive>>
    | _<expect<number, to.bePrimitive>>
    | _<expect<string, to.bePrimitive>>
    | _<expect<null, to.bePrimitive>>
    | _<expect<undefined, to.bePrimitive>>
    | _<expect<bigint, to.bePrimitive>>
    | _<expect<symbol, to.bePrimitive>>
    | _<expect<void, to.not.bePrimitive>>
    | _<expect<object, to.not.bePrimitive>>
    | _<expect<[], to.not.bePrimitive>>
    | _<expect<{ a: number }, to.not.bePrimitive>>
    | _<expect<{}, to.not.bePrimitive>>;

type toBeLiteral =
    | _<expect<1, to.beLiteral>>
    | _<expect<"a", to.beLiteral>>
    | _<expect<true, to.beLiteral>>
    | _<expect<false, to.beLiteral>>
    | _<expect<number, to.not.beLiteral>>
    | _<expect<string, to.not.beLiteral>>
    | _<expect<null, to.not.beLiteral>>
    | _<expect<undefined, to.not.beLiteral>>
    | _<expect<bigint, to.not.beLiteral>>
    | _<expect<symbol, to.not.beLiteral>>
    | _<expect<void, to.not.beLiteral>>
    | _<expect<object, to.not.beLiteral>>
    | _<expect<[], to.not.beLiteral>>
    | _<expect<{ a: number }, to.not.beLiteral>>
    | _<expect<{}, to.not.beLiteral>>;

type toBeNever =
    | _<expect<never, to.beNever>>
    | _<expect<"a", to.not.beNever>>
    | _<expect<void, to.not.beNever>>
    | _<expect<_.primitive, to.not.beNever>>
    | _.fail<expect<never, to.not.beNever>>
    | _.fail<expect<"a", to.beNever>>
    | _.fail<expect<_.primitive, to.beNever>>;

type toBeInvocable =
    | _<expect<() => void, to.beInvocable>>
    | _<expect<Function, to.beInvocable>>
    | _<expect<typeof console.log, to.beInvocable>>
    | _<expect<ExtendedFunction, to.beInvocable>>
    | _<expect<typeof ExtendedFunction, to.beInvocable>>
    | _<expect<InvocableInterface, to.beInvocable>>
    | _<expect<NewableInterface, to.beInvocable>>
    | _<expect<void, to.not.beInvocable>>
    | _<expect<object, to.not.beInvocable>>
    | _<expect<number, to.not.beInvocable>>
    | _<expect<number | ExtendedFunction, to.not.beInvocable>>
    | _<expect<number | (() => void), to.not.beInvocable>>
    | _<expect<object | InvocableInterface, to.not.beInvocable>>
    | _<expect<unknown, to.not.beInvocable>>;

type toBeNewable =
    | "can a given type be called with new keyword"
    | _<expect<typeof EmptyClass, to.beNewable>>
    | _<expect<typeof ExtendedFunction, to.beNewable>>
    | _<expect<typeof Function, to.beNewable>>
    | _<expect<{ new (arg: number): boolean }, to.beNewable>>
    | _<expect<Function, to.not.beNewable>>
    | _<expect<() => object, to.not.beNewable>>
    | _<expect<{ (arg: number): boolean }, to.not.beNewable>>
    | _<expect<object, to.not.beNewable>>
    | _<expect<unknown, to.not.beNewable>>;

type toStartWith =
    | _<expect<"asd", to.startWith<"a">>>
    | _<expect<"asd", to.startWith<"">>>
    | _<expect<"", to.startWith<"">>>
    | _<expect<"asd", to.not.startWith<"s">>>
    | _<expect<"asd", to.not.startWith<"-">>>
    | _<expect<1, to.not.startWith<"-">>>
    | _<expect<undefined, to.not.startWith<"-">>>
    | _<expect<{}, to.not.startWith<"-">>>;

type toEndWith =
    | _<expect<"asd", to.endWith<"d">>>
    | _<expect<"asd", to.endWith<"">>>
    | _<expect<"", to.endWith<"">>>
    | _<expect<"asd", to.not.endWith<"s">>>
    | _<expect<"asd", to.not.endWith<"-">>>
    | _<expect<1, to.not.endWith<"-">>>
    | _<expect<undefined, to.not.endWith<"-">>>
    | _<expect<{}, to.not.endWith<"-">>>;

type toContain =
    | _<expect<"asd", to.contain<"a">>>
    | _<expect<"asd", to.contain<"s">>>
    | _<expect<"asd", to.contain<"d">>>
    | _<expect<"assert", to.contain<"ss">>>
    | _<expect<"assert", to.contain<"sse">>>
    | _<expect<"assert", to.not.contain<"-">>>
    | _<expect<1, to.not.contain<"-">>>
    | _<expect<undefined, to.not.contain<"-">>>
    | _<expect<{}, to.not.contain<"-">>>;

type toBeAssignableTo =
    | _<expect<1, to.beAssignableTo<number>>>
    | _<expect<"a", to.beAssignableTo<string>>>
    | _<expect<true, to.beAssignableTo<boolean>>>
    | _<expect<{ a: number; b: string }, to.beAssignableTo<{ a: number }>>>
    | _<expect<undefined, to.beAssignableTo<void>>>
    | _<expect<number, to.not.beAssignableTo<1>>>
    | _<expect<string, to.not.beAssignableTo<"a">>>
    | _<expect<boolean, to.not.beAssignableTo<true>>>
    | _<expect<boolean, to.not.beAssignableTo<false>>>
    | _<expect<{ a: number }, to.not.beAssignableTo<{ a: number; b: string }>>>
    | _<expect<void, to.not.beAssignableTo<undefined>>>
    | _<expect<string, to.not.beAssignableTo<number>>>;

type toAccept =
    | _<expect<number, to.accept<1>>>
    | _<expect<string, to.accept<"a">>>
    | _<expect<boolean, to.accept<true>>>
    | _<expect<{ a: number }, to.accept<{ a: number; b: string }>>>
    | _<expect<void, to.accept<undefined>>>
    | _<expect<1, to.not.accept<number>>>
    | _<expect<"a", to.not.accept<string>>>
    | _<expect<true, to.not.accept<boolean>>>
    | _<expect<false, to.not.accept<boolean>>>
    | _<expect<{ a: number; b: string }, to.not.accept<{ a: number }>>>
    | _<expect<undefined, to.not.accept<void>>>
    | _<expect<string, to.not.accept<number>>>;

type toBeEqualTo =
    | _<expect<1, to.equalTo<1>>>
    | _<expect<"a", to.equalTo<"a">>>
    | _<expect<true, to.equalTo<true>>>
    | _<expect<[], to.equalTo<[]>>>
    | _<expect<{}, to.equalTo<{}>>>
    | _<expect<number, to.equalTo<number>>>
    | _<expect<string, to.equalTo<string>>>
    | _<expect<boolean, to.equalTo<boolean>>>
    | _<expect<Array<any>, to.equalTo<Array<any>>>>
    | _<expect<object, to.equalTo<object>>>
    | _<expect<undefined, to.equalTo<undefined>>>
    | _<expect<null, to.equalTo<null>>>
    | _<expect<{ a: number }, to.equalTo<{ a: number }>>>
    | _<expect<number, to.not.equalTo<string>>>
    | _<expect<1, to.not.equalTo<2>>>
    | _<expect<1, to.not.equalTo<number>>>
    | _<expect<1, to.not.equalTo<"1">>>
    | _<expect<"a", to.not.equalTo<string>>>
    | _<expect<"a", to.not.equalTo<"b">>>
    | _<expect<"a", to.not.equalTo<"">>>
    | _<expect<"a", to.not.equalTo<undefined>>>
    | _<expect<"a", to.not.equalTo<null>>>
    | _<expect<string, to.not.equalTo<{}>>>
    | _<expect<undefined, to.not.equalTo<null>>>
    | _<expect<undefined, to.not.equalTo<void>>>
    | _<expect<{ a: number }, to.not.equalTo<{ b: number }>>>
    | _<expect<{ a: number }, to.not.equalTo<{ a: string }>>>
    | _<expect<{ a: number }, to.not.equalTo<{ a: string | number }>>>;

type toExtend =
    | _<expect<1, to.extend<number>>>
    | _<expect<1n, to.extend<bigint>>>
    | _<expect<"a", to.extend<string>>>
    | _<expect<true, to.extend<boolean>>>
    | _<expect<[], to.extend<{}>>>
    | _<expect<number, to.extend<unknown>>>
    | _<expect<{ a: number }, to.extend<{}>>>
    | _<expect<{ a: number; b: string }, to.extend<{ a: number }>>>
    | _<expect<{ a: number }, to.extend<{ a: number | string }>>>
    | _<expect<number, to.not.extend<1>>>
    | _<expect<bigint, to.not.extend<1n>>>
    | _<expect<string, to.not.extend<"a">>>
    | _<expect<boolean, to.not.extend<true>>>
    | _<expect<{}, to.not.extend<[]>>>
    | _<expect<unknown, to.not.extend<number>>>
    | _<expect<{}, to.not.extend<{ a: number }>>>
    | _<expect<{ a: number }, to.not.extend<{ a: number; b: string }>>>
    | _<expect<{ a: number | string }, to.not.extend<{ a: number }>>>;

type toBeExtendedBy =
    | _<expect<number, to.beExtendedBy<1>>>
    | _<expect<bigint, to.beExtendedBy<1n>>>
    | _<expect<string, to.beExtendedBy<"a">>>
    | _<expect<boolean, to.beExtendedBy<true>>>
    | _<expect<{}, to.beExtendedBy<[]>>>
    | _<expect<unknown, to.beExtendedBy<number>>>
    | _<expect<{}, to.beExtendedBy<{ a: number }>>>
    | _<expect<{ a: number }, to.beExtendedBy<{ a: number; b: string }>>>
    | _<expect<{ a: number | string }, to.beExtendedBy<{ a: number }>>>
    | _<expect<1, to.not.beExtendedBy<number>>>
    | _<expect<1n, to.not.beExtendedBy<bigint>>>
    | _<expect<"a", to.not.beExtendedBy<string>>>
    | _<expect<true, to.not.beExtendedBy<boolean>>>
    | _<expect<[], to.not.beExtendedBy<{}>>>
    | _<expect<number, to.not.beExtendedBy<unknown>>>
    | _<expect<{ a: number }, to.not.beExtendedBy<{}>>>
    | _<expect<{ a: number; b: string }, to.not.beExtendedBy<{ a: number }>>>
    | _<expect<{ a: number }, to.not.beExtendedBy<{ a: number | string }>>>;

type toHaveKeys =
    | _<expect<{ a: number }, to.haveKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.haveKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.haveKeys<"b">>>
    | _<expect<{ a: number; b: string }, to.haveKeys<"a" | "b">>>
    | _<expect<object, to.not.haveKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.not.haveKeys<"c">>>
    | _<expect<{}, to.not.haveKeys<"a">>>
    // @ts-expect-error
    | _<expect<{}, to.haveKeys<1>>>
    // @ts-expect-error
    | _<expect<{}, to.not.haveKeys<1>>>;

type toHaveOnlyKeys =
    | _<expect<{ a: number }, to.haveOnlyKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.not.haveOnlyKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.not.haveOnlyKeys<"b">>>
    | _<expect<{ a: number; b: string }, to.haveOnlyKeys<"a" | "b">>>
    | _<expect<object, to.not.haveOnlyKeys<"a">>>
    | _<expect<{ a: number; b: string }, to.not.haveOnlyKeys<"c">>>
    | _<expect<{}, to.not.haveOnlyKeys<"a">>>
    // @ts-expect-error
    | _<expect<{}, to.haveOnlyKeys<1>>>
    // @ts-expect-error
    | _<expect<{}, to.not.haveOnlyKeys<1>>>;

type toHaveFieldsThatAccept =
    | _<expect<{ a: 1 }, to.haveFieldsThatAccept<1>>>
    | _<expect<{ a: number }, to.haveFieldsThatAccept<1>>>
    | _<expect<{ a: string }, to.haveFieldsThatAccept<"a">>>
    | _<expect<{ a: string }, to.haveFieldsThatAccept<string>>>
    | _<expect<{ c: true; b: false }, to.haveFieldsThatAccept<boolean>>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<"a">>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<1>>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<1 | "a">>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<1 | string>>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<number | "a">>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<number | string>>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAccept<string | number>>>
    | _<expect<{ a: 1 }, to.not.haveFieldsThatAccept<2>>>
    | _<expect<{ a: number }, to.not.haveFieldsThatAccept<"a">>>
    | _<expect<{ a: number }, to.not.haveFieldsThatAccept<string>>>
    | _<expect<{ a: number }, to.not.haveFieldsThatAccept<unknown>>>
    | _<expect<{ c: number; b: string }, to.not.haveFieldsThatAccept<boolean>>>
    | _<expect<{ c: true }, to.not.haveFieldsThatAccept<boolean>>>
    | _<expect<{ c: number; b: string }, to.not.haveFieldsThatAccept<string | number | boolean>>>;

type toHaveFieldsThatAcceptOnly =
    | _<expect<{ a: 1 }, to.haveFieldsThatAcceptOnly<1>>>
    | _<expect<{ a: number }, to.haveFieldsThatAcceptOnly<number>>>
    | _<expect<{ c: number; b: string }, to.haveFieldsThatAcceptOnly<string | number>>>
    | _<expect<{ a: number }, to.not.haveFieldsThatAcceptOnly<1>>>
    | _<expect<{ a: number }, to.not.haveFieldsThatAcceptOnly<string>>>
    | _<expect<{ c: number; b: string }, to.not.haveFieldsThatAcceptOnly<string>>>
    | _<expect<{ c: number; b: string }, to.not.haveFieldsThatAcceptOnly<number>>>;

type arrays =
    | _<expect<[1], to.beAssignableTo<[1]>>>
    | _<expect<[1], to.beAssignableTo<[number]>>>
    | _<expect<[number], to.accept<[number]>>>
    | _<expect<[number], to.accept<[1]>>>
    | _<expect<[number], to.beAssignableTo<[number | string]>>>
    | _<expect<Array<string | boolean>, to.accept<[string | boolean]>>>
    | _<expect<Array<string | boolean>, to.not.beAssignableTo<[string | boolean]>>>
    | _<expect<[number], to.not.beAssignableTo<[1]>>>
    | _<expect<[number | string], to.not.beAssignableTo<[1]>>>
    | _<expect<[number | string], to.not.beAssignableTo<[number]>>>
    | _<expect<[1], to.include<1>>>
    | _<expect<[1], to.not.include<2>>>
    | _<expect<[number], to.include<number>>>
    | _<expect<[number | string], to.include<number>>>
    | _<expect<[number, string], to.include<number>>>
    | _<expect<[number | string], to.include<number | string>>>
    | _<expect<[number, string], to.include<number | string>>>
    | _<expect<[number, string], to.not.include<number | string | boolean>>>
    | _<expect<Array<1>, to.include<1>>>
    | _<expect<Array<1>, to.not.include<2>>>
    | _<expect<Array<number>, to.include<number>>>
    | _<expect<Array<number | string>, to.include<number>>>
    | _<expect<Array<number | string>, to.include<number | string>>>
    | _<expect<Array<number | string>, to.not.include<number | string | boolean>>>;

type toReturn =
    | _<expect<() => number | string, to.returnType<number>>>
    | _<expect<() => void, to.returnType<void>>>
    | _<expect<() => void, to.returnType<undefined>>>
    | _<expect<() => undefined, to.returnType<undefined>>>
    | _<expect<() => number, to.returnType<number>>>
    | _<expect<() => unknown, to.returnType<number>>>
    | _<expect<() => unknown, to.returnType<unknown>>>
    | _<expect<() => number, to.returnType<1>>>
    | _<expect<() => number | string, to.returnType<number | string>>>
    | _<expect<() => number | string | boolean, to.returnType<number | string>>>
    | _<expect<() => Promise<"a">, to.returnType<Promise<any>>>>
    | _<expect<() => number[], to.returnType<Array<number>>>>
    | _<expect<() => undefined, to.not.returnType<void>>>
    | _<expect<() => number, to.not.returnType<unknown>>>
    | _<expect<() => number, to.not.returnType<string>>>
    | _<expect<() => 1, to.not.returnType<number>>>
    | _<expect<() => number, to.not.returnType<number | string>>>
    | _<expect<() => Promise<string>, to.not.returnType<string>>>;

type toReturnOnly =
    | _<expect<() => void, to.returnOnly<void>>>
    | _<expect<() => undefined, to.returnOnly<undefined>>>
    | _<expect<() => number, to.returnOnly<number>>>
    | _<expect<() => unknown, to.returnOnly<unknown>>>
    | _<expect<() => number | string, to.returnOnly<number | string>>>
    | _<expect<() => Promise<"a">, to.returnOnly<Promise<any>>>>
    | _<expect<() => number[], to.returnOnly<Array<number>>>>
    | _<expect<() => number | string, to.not.returnOnly<number | string | boolean>>>
    | _<expect<() => 1, to.not.returnOnly<number>>>
    | _<expect<() => number, to.not.returnOnly<unknown>>>
    | _<expect<() => undefined, to.not.returnOnly<void>>>
    | _<expect<() => void, to.not.returnOnly<undefined>>>
    | _<expect<() => unknown, to.not.returnOnly<number>>>
    | _<expect<() => unknown, to.not.returnOnly<void>>>
    | _<expect<() => number, to.not.returnOnly<string>>>
    | _<expect<() => number, to.not.returnOnly<1>>>
    | _<expect<() => number | string, to.not.returnOnly<number>>>
    | _<expect<() => Promise<string>, to.not.returnOnly<string>>>;

type toResolveTo =
    | _<expect<() => Promise<void>, to.resolveTo<void>>>
    | _<expect<() => Promise<void>, to.resolveTo<undefined>>>
    | _<expect<() => Promise<undefined>, to.resolveTo<undefined>>>
    | _<expect<() => Promise<number>, to.resolveTo<number>>>
    | _<expect<() => Promise<unknown>, to.resolveTo<number>>>
    | _<expect<() => Promise<unknown>, to.resolveTo<unknown>>>
    | _<expect<() => Promise<number>, to.resolveTo<1>>>
    | _<expect<() => Promise<number | string>, to.resolveTo<number | string>>>
    | _<expect<() => Promise<number | string | boolean>, to.resolveTo<number | string>>>
    | _<expect<() => Promise<Promise<"a">>, to.resolveTo<Promise<any>>>>
    | _<expect<() => Promise<number[]>, to.resolveTo<Array<number>>>>
    | _<expect<() => Promise<undefined>, to.not.resolveTo<void>>>
    | _<expect<() => Promise<number>, to.not.resolveTo<unknown>>>
    | _<expect<() => Promise<number>, to.not.resolveTo<string>>>
    | _<expect<() => Promise<1>, to.not.resolveTo<number>>>
    | _<expect<() => Promise<number>, to.not.resolveTo<number | string>>>
    | _<expect<() => Promise<Promise<string>>, to.not.resolveTo<string>>>;

type toResolveToOnly =
    | _<expect<() => Promise<void>, to.resolveToOnly<void>>>
    | _<expect<() => Promise<undefined>, to.resolveToOnly<undefined>>>
    | _<expect<() => Promise<number>, to.resolveToOnly<number>>>
    | _<expect<() => Promise<unknown>, to.resolveToOnly<unknown>>>
    | _<expect<() => Promise<number | string>, to.resolveToOnly<number | string>>>
    | _<expect<() => Promise<Promise<"a">>, to.resolveToOnly<Promise<any>>>>
    | _<expect<() => Promise<number[]>, to.resolveToOnly<Array<number>>>>
    | _<expect<() => Promise<number | string | boolean>, to.not.resolveToOnly<number | string>>>
    | _<expect<() => Promise<number>, to.not.resolveToOnly<1>>>
    | _<expect<() => Promise<unknown>, to.not.resolveToOnly<number>>>
    | _<expect<() => Promise<void>, to.not.resolveToOnly<undefined>>>
    | _<expect<() => Promise<undefined>, to.not.resolveToOnly<void>>>
    | _<expect<() => Promise<number>, to.not.resolveToOnly<unknown>>>
    | _<expect<() => Promise<number>, to.not.resolveToOnly<string>>>
    | _<expect<() => Promise<1>, to.not.resolveToOnly<number>>>
    | _<expect<() => Promise<number>, to.not.resolveToOnly<number | string>>>
    | _<expect<() => Promise<Promise<string>>, to.not.resolveToOnly<string>>>;

type toAcceptParameters =
    | _<expect<() => void, to.acceptParameters<[]>>>
    | _<expect<(a: string) => void, to.acceptParameters<[string]>>>
    | _<expect<(a: string | number) => void, to.acceptParameters<[string]>>>
    | _<expect<(a: string | number) => void, to.acceptParameters<[string | number]>>>
    | _<expect<(a: string, b: number) => void, to.acceptParameters<[string, number]>>>
    | _<expect<(a: string | boolean, b: number) => void, to.acceptParameters<[string, number]>>>
    | _<expect<(a: string, b?: number) => void, to.acceptParameters<[string, number]>>>
    | _<expect<(a: string, b?: number) => void, to.acceptParameters<[string]>>>
    | _<expect<(a: [string]) => void, to.acceptParameters<[[string]]>>>
    | _<expect<(a: number[]) => void, to.acceptParameters<[[1, 2, 3]]>>>
    | _<expect<(a: number[]) => void, to.acceptParameters<[(1 | 2 | 3)[]]>>>
    | _<expect<(a: string) => void, to.not.acceptParameters<string[]>>>
    | _<expect<(a: number[]) => void, to.not.acceptParameters<[1, 2, 3]>>>
    | _<expect<(a: "a") => void, to.not.acceptParameters<[string]>>>
    | _<expect<(a: boolean) => void, to.not.acceptParameters<[number]>>>;

type toAcceptOnlyParameters =
    | _<expect<() => void, to.acceptOnlyParameters<[]>>>
    | _<expect<(a: string) => void, to.acceptOnlyParameters<[string]>>>
    | _<expect<(a: string | number) => void, to.acceptOnlyParameters<[string | number]>>>
    | _<expect<(a: string, b: number) => void, to.acceptOnlyParameters<[string, number]>>>
    | _<expect<(a: [string]) => void, to.acceptOnlyParameters<[[string]]>>>
    | _<expect<(a: string) => void, to.not.acceptOnlyParameters<string[]>>>
    | _<expect<(a: string | number) => void, to.not.acceptOnlyParameters<[string]>>>
    | _<expect<(a: string | boolean, b: number) => void, to.not.acceptOnlyParameters<[string, number]>>>
    | _<expect<(a: string, b?: number) => void, to.not.acceptOnlyParameters<[string, number]>>>
    | _<expect<(a: string, b?: number) => void, to.not.acceptOnlyParameters<[string]>>>
    | _<expect<(a: number[]) => void, to.not.acceptOnlyParameters<[(1 | 2 | 3)[]]>>>
    | _<expect<(a: number[]) => void, to.not.acceptOnlyParameters<[[1, 2, 3]]>>>
    | _<expect<(a: number[]) => void, to.not.acceptOnlyParameters<[1, 2, 3]>>>
    | _<expect<(a: "a") => void, to.not.acceptOnlyParameters<[string]>>>
    | _<expect<(a: boolean) => void, to.not.acceptOnlyParameters<[number]>>>
    | _<expect<(a?: boolean) => void, to.acceptOnlyParameters<[a?: boolean | undefined]>>>;

type expectReturnTypeOf =
    | _<expectReturnOf<() => void, to.not.beDefined>>
    | _<expectReturnOf<() => undefined, to.not.beDefined>>
    | _<expectReturnOf<() => undefined | number, to.not.beDefined>>
    | _<expectReturnOf<() => number, to.beDefined>>
    | _<expectReturnOf<() => number, to.be<number>>>
    | _<expectReturnOf<() => never, to.be<never>>>
    | _<expectReturnOf<() => never, to.not.be<void>>>
    | _<expectReturnOf<() => 1, to.beLiteral>>
    | _<expectReturnOf<() => () => void, to.beAssignableTo<Function>>>;

type _expectParametersOf =
    | _<expectParametersOf<() => void, to.accept<[]>>>
    | _<expectParametersOf<(a: string) => void, to.accept<[string]>>>
    | _<expectParametersOf<(a: string | number) => void, to.accept<[string]>>>
    | _<expectParametersOf<(a: string | number) => void, to.accept<[string | number]>>>
    | _<expectParametersOf<(a: string | number) => void, to.be<[string | number]>>>
    | _<expectParametersOf<(a: string | number) => void, to.equalTo<[string | number]>>>
    | _<expectParametersOf<(a: string, b: number) => void, to.accept<[string, number]>>>
    | _<expectParametersOf<(a: string | boolean, b: number) => void, to.accept<[string, number]>>>
    | _<expectParametersOf<(a: string, b?: number) => void, to.accept<[string, number]>>>
    | _<expectParametersOf<(a: string, b?: number) => void, to.accept<[string]>>>
    | _<expectParametersOf<(a: [string]) => void, to.accept<[[string]]>>>
    | _<expectParametersOf<(a: number[]) => void, to.accept<[[1, 2, 3]]>>>
    | _<expectParametersOf<(a: number[]) => void, to.accept<[(1 | 2 | 3)[]]>>>
    | _<expectParametersOf<(a: string) => void, to.not.accept<string[]>>>
    | _<expectParametersOf<(a: number[]) => void, to.not.accept<[1, 2, 3]>>>
    | _<expectParametersOf<(a: "a") => void, to.not.accept<[string]>>>
    | _<expectParametersOf<(a: boolean) => void, to.not.accept<[number]>>>;

type _expectKeysOf =
    | _<expectKeysOf<{ a: number; b: string }, to.be<"a" | "b">>>
    | _<expectKeysOf<{ a: number; b?: string }, to.be<"a" | "b">>>
    | _<expectKeysOf<{ a: number; b: string }, to.accept<"a">>>
    | _<expectKeysOf<{ a: number; b?: string }, to.accept<"b">>>
    | _<expectKeysOf<{ getA: () => number; getB: () => string }, to.startWith<"get">>>;

type _expectValuesOf =
    | _<expectValuesOf<{ a: number; b: string }, to.be<number | string>>>
    | _<expectValuesOf<{ a: number; b?: string }, to.be<number | string | undefined>>>
    | _<expectValuesOf<{ a: number; b: string }, to.accept<number>>>
    | _<expectValuesOf<{ a: number; b: string }, to.accept<string>>>
    | _<expectValuesOf<{ a: number; b: string }, to.not.accept<undefined>>>
    | _<expectValuesOf<{ getA: () => number; getB: () => string }, to.be<(() => number) | (() => string)>>>
    | _<expectValuesOf<{ getA: () => number; getB: () => string }, to.accept<() => 1>>>
    | _<expectValuesOf<number[], to.accept<1>>>
    | _<expectValuesOf<number[], to.accept<number | 0>>>
    | _<expectValuesOf<[string, symbol], to.accept<string>>>
    | _<expectValuesOf<[string, symbol], to.accept<symbol>>>
    | _<expectValuesOf<[string, symbol], to.accept<symbol | string>>>
    | _<expectValuesOf<[string, symbol], to.not.accept<number>>>
    | _<expectValuesOf<[string, symbol], to.not.accept<[string]>>>;
