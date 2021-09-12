// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols,DuplicatedCode

// TODO: add function checks
// TODO: add any/unknown checks
// TODO: add never checks
// TODO: add union checks

import { $ } from "../src/expect";

export class EmptyClass {}
export class ExtendedFunction extends Function {}
export interface InvocableInterface {
    (arg: string): number;
}
export interface NewableInterface {
    new (arg: string): number;
}

type suit_assert =
    | "should check that type evaluates to true"
    | $.assert<true>
    | $.assert<never> // TODO: how to fail this one?
    // @ts-expect-error
    | $.assert<false>
    // @ts-expect-error
    | $.assert<string>
    | " unions"
    // @ts-expect-error
    | $.assert<true | false>
    // @ts-expect-error
    | $.assert<true | number>;

type suit_assertNot =
    | "should check that type evaluates to false"
    | $.assertNot<false>
    | $.assertNot<never> // TODO: how to fail this one?
    // @ts-expect-error
    | $.assertNot<true>
    // @ts-expect-error
    | $.assertNot<string>
    | " unions"
    // @ts-expect-error
    | $.assertNot<true | false>
    // @ts-expect-error
    | $.assertNot<true | number>;

type suit_assertNever =
    | "should check that type evaluates to never"
    | $.assertNever<never>
    // @ts-expect-error
    | $.assertNever<true>
    // @ts-expect-error
    | $.assertNever<false>
    // @ts-expect-error
    | $.assertNever<void>
    // @ts-expect-error
    | $.assertNever<string>;

type suit_not =
    | "should negate a boolean type"
    | $.assert<$.not<false>>
    | $.assert<$.not<false | true>>
    | $.assertNot<$.not<true>>
    | $.assertNot<$.not<never>>
    // @ts-expect-error
    | $.assertNot<$.not<string>>;

type suit_is =
    | "true if A is assignable to B"
    | $.assert<$.is<"asd", string>>
    | $.assert<$.is<1, number>>
    | $.assert<$.is<undefined, void>>
    | $.assert<$.is<{ a: string; b: number }, { a: string }>>
    | $.assert<$.is<{ a: 1 }, { a: number }>>
    | $.assertNot<$.is<string, "asd">>
    | $.assertNot<$.is<number, 1>>
    | $.assertNot<$.is<void, undefined>>
    | $.assertNot<$.is<{ a: string }, { a: string; b: number }>>
    | $.assertNot<$.is<{ a: number }, { a: 1 }>>
    | "  functions"
    | $.assert<$.is<() => string, () => any>>
    | $.assert<$.is<() => void, () => any>>
    | $.assert<$.is<() => undefined, () => any>>
    | $.assert<$.is<() => undefined, (...args: any) => any>>
    | $.assert<$.is<(a: string) => void, (...args: any) => any>>
    | $.assert<$.is<(a: number) => "asd", (b: 1) => string>>;

type suit_is_not =
    | "reverse to 'is'" //
    | "should be covered by 'not' and 'is'";

type suit_equals_generic<T extends string> = $.equals<T, string>;
type suit_equals_generic_with_default<T extends string = string> = $.equals<T, string>;
type suit_equals__string_alias = string;

type suit_equals =
    | "types should be assignable to each other"
    | "  primitives"
    | $.assert<$.equals<number, number>>
    | $.assert<$.equals<string, string>>
    | $.assert<$.equals<never, never>>
    | $.assert<$.equals<void, void>>
    | $.assertNot<$.equals<1, 2>>
    | $.assertNot<$.equals<"a", "b">>
    | $.assertNot<$.equals<string, never>>
    | $.assertNot<$.equals<never, string>>
    | $.assertNot<$.equals<true, false>>
    | $.assertNot<$.equals<false, true>>
    | $.assertNot<$.equals<boolean, true>>
    | $.assertNot<$.equals<number, 1>>
    | $.assertNot<$.equals<string, "a">>
    | $.assertNot<$.equals<string | number, "a">>
    | $.assertNot<$.equals<"a", string | number>>
    | $.assertNot<$.equals<{}, string>>
    | $.assertNot<$.equals<number, {}>>
    | "  object"
    | $.assert<$.equals<{}, {}>>
    | $.assert<$.equals<{ a: number }, { a: number }>>
    | $.assertNot<$.equals<{ a: number }, {}>>
    | $.assertNot<$.equals<{}, { a: number }>>
    | $.assertNot<$.equals<{ a: number }, { a: 1 }>>
    | "  function"
    | $.assert<$.equals<() => any, () => any>>
    | $.assert<$.equals<() => void, () => any>>
    | $.assert<$.equals<() => undefined, (...args: any) => any>>
    | $.assert<$.equals<(a: string) => void, (...args: any) => any>>
    | $.assert<$.equals<(a: number) => undefined, (b: number) => undefined>>
    | $.assertNot<$.equals<() => void, (b: number) => void>>
    | $.assertNot<$.equals<(a: number) => void, () => void>>
    | $.assertNot<$.equals<() => number, () => void>>
    | "  unions"
    | $.assert<$.equals<string | number, number | string>>
    | $.assertNot<$.equals<1 | "a", number | string>>
    | $.assertNot<$.equals<number | string, 1 | "a">>
    | $.assert<$.equals<boolean, true | false>>
    | "generics and aliases"
    | $.assert<$.equals<suit_equals__string_alias, string>>
    | $.assert<suit_equals_generic<string>>
    | $.assert<$.equals<suit_equals_generic_with_default, true>>
    | $.assertNot<suit_equals_generic<"">>
    | "should fail"
    | $.assertNot<$.equals<1, string | number>>;

type suit_notEquals =
    | "reverse of equals, types are not assignable to each other" //
    | " should be covered by 'not' and 'equals'";

type suit_if_then =
    | "resolved to type A or B based on a conditional type" //
    | " primitives"
    | $.assert<$.equals<$.if_then<true, "then">, "then">>
    | $.assert<$.equals<$.if_then<true, "then", "else">, "then">>
    | $.assert<$.equals<$.if_then<false, "then">, never>>
    | $.assertNot<$.equals<$.if_then<false, "then">, "then">>
    | $.assert<$.equals<$.if_then<false, "then", "else">, "else">>
    | $.assert<$.equals<$.if_then<boolean, "then", "else">, "else">>
    | " unions"
    | $.assert<$.equals<$.if_then<true, 1 | "a", 3>, "a" | 1>>
    | $.assertNot<$.equals<$.if_then<true | false, 1 | "a", 3>, "a" | 1>>
    | " faulty input"
    // @ts-expect-error
    | $.if_then<number, "then", "else">;

type suit_if_else =
    | "resolved to type A or B based on a conditional type" //
    | " primitives"
    | $.assert<$.equals<$.if_else<true, "then", "else">, "then">>
    | $.assert<$.equals<$.if_else<false, "then", "else">, "else">>
    | $.assert<$.equals<$.if_else<boolean, "then", "else">, "else">>
    | " unions"
    | $.assert<$.equals<$.if_else<true, 1 | "a", 3>, "a" | 1>>
    | $.assertNot<$.equals<$.if_else<true | false, 1 | "a", 3>, "a" | 1>>
    | " faulty input"
    // @ts-expect-error
    | $.if_else<number, "then", "else">;

type suit_and =
    | "should resolve true of both types resolve to true" //
    | $.assert<$.and<true, true>>
    | $.assertNot<$.and<true, false>>
    | $.assertNot<$.and<false, true>>
    | $.assertNot<$.and<false, false>>
    | $.assertNot<$.and<true | false, false>>
    | $.assertNot<$.and<false, true | false>>
    // @ts-expect-error
    | $.assertNot<$.and<number, true>>
    // @ts-expect-error
    | $.assertNot<$.and<false, number>>;

type suit_or =
    | "should resolve true if one of types resolves to true" //
    | $.assert<$.or<true, true>>
    | $.assert<$.or<true, false>>
    | $.assert<$.or<false, true>>
    | $.assertNot<$.or<false, false>>
    | $.assertNot<$.or<true | false, false>>
    | $.assertNot<$.or<false, true | false>>
    // @ts-expect-error
    | $.assertNot<$.or<number, true>>
    // @ts-expect-error
    | $.assertNot<$.or<false, number>>;

type suit_xor =
    | "should resolve true types are different" //
    | $.assert<$.xor<true, false>>
    | $.assert<$.xor<false, true>>
    | $.assertNot<$.xor<false, false>>
    | $.assertNot<$.xor<true, true>>
    | $.assert<$.xor<true | false, false>>
    | $.assert<$.xor<false, true | false>>
    // @ts-expect-error
    | $.assertNot<$.xor<number, true>>
    // @ts-expect-error
    | $.assertNot<$.xor<false, number>>;

type suit_butNot =
    | "should resolve true if type A is true but not B" //
    | $.assert<$.butNot<true, false>>
    | $.assertNot<$.butNot<false, true>>
    | $.assertNot<$.butNot<false, false>>
    | $.assertNot<$.butNot<true, true>>
    | $.assertNot<$.butNot<true | false, false>>
    | $.assertNot<$.butNot<false, true | false>>
    // @ts-expect-error
    | $.assertNot<$.butNot<number, true>>
    // @ts-expect-error
    | $.assertNot<$.butNot<false, number>>;

type suit_isUndefined =
    | "resolves true if type is undefined"
    | $.assert<$.isUndefined<undefined>>
    | $.assert<$.isUndefined<void>>
    // @ts-expect-error
    | $.assert<$.isUndefined<never>>
    | $.assertNot<$.isUndefined<number>>
    | $.assertNot<$.isUndefined<string>>
    | $.assertNot<$.isUndefined<symbol>>
    | $.assertNot<$.isUndefined<boolean>>
    | $.assertNot<$.isUndefined<never>>;

type suit_isDefined =
    | "resolves true if undefined is not assignable to the type"
    | $.assertNot<$.isDefined<undefined>>
    | $.assertNot<$.isDefined<undefined | number>>
    | $.assertNot<$.isDefined<void>>
    | $.assertNot<$.isDefined<void | string>>
    | $.assertNot<$.isDefined<never>>
    | $.assert<$.isDefined<number>>
    | $.assert<$.isDefined<string>>
    | $.assert<$.isDefined<symbol>>
    | $.assert<$.isDefined<boolean>>;

type suit_isPrimitive =
    | $.assert<$.isPrimitive<1>>
    | $.assert<$.isPrimitive<"a">>
    | $.assert<$.isPrimitive<true>>
    | $.assert<$.isPrimitive<false>>
    | $.assert<$.isPrimitive<number>>
    | $.assert<$.isPrimitive<string>>
    | $.assert<$.isPrimitive<null>>
    | $.assert<$.isPrimitive<undefined>>
    | $.assert<$.isPrimitive<bigint>>
    | $.assert<$.isPrimitive<symbol>>
    | $.assertNot<$.isPrimitive<void>>
    | $.assertNot<$.isPrimitive<object>>
    | $.assertNot<$.isPrimitive<[]>>
    | $.assertNot<$.isPrimitive<{ a: number }>>
    | $.assertNot<$.isPrimitive<{}>>;

type suit_isLiteral =
    | $.assert<$.isLiteral<1>>
    | $.assert<$.isLiteral<"a">>
    | $.assert<$.isLiteral<true>>
    | $.assert<$.isLiteral<false>>
    | $.assertNot<$.isLiteral<number>>
    | $.assertNot<$.isLiteral<string>>
    | $.assertNot<$.isLiteral<null>>
    | $.assertNot<$.isLiteral<undefined>>
    | $.assertNot<$.isLiteral<bigint>>
    | $.assertNot<$.isLiteral<symbol>>
    | $.assertNot<$.isLiteral<void>>
    | $.assertNot<$.isLiteral<object>>
    | $.assertNot<$.isLiteral<[]>>
    | $.assertNot<$.isLiteral<{ a: number }>>
    | $.assertNot<$.isLiteral<{}>>;

type suit_isFalsy =
    | $.assert<$.isFalsy<0>>
    | $.assert<$.isFalsy<"">>
    | $.assert<$.isFalsy<false>>
    | $.assert<$.isFalsy<null>>
    | $.assert<$.isFalsy<undefined>>
    | $.assert<$.isFalsy<void>>
    | $.assertNot<$.isFalsy<1>>
    | $.assertNot<$.isFalsy<"a">>
    | $.assertNot<$.isFalsy<number>>
    | $.assertNot<$.isFalsy<string>>
    | $.assertNot<$.isFalsy<bigint>>
    | $.assertNot<$.isFalsy<symbol>>
    | $.assertNot<$.isFalsy<object>>
    | $.assertNot<$.isFalsy<[]>>
    | $.assertNot<$.isFalsy<{ a: number }>>
    | $.assertNot<$.isFalsy<{}>>;

type suit_isTruthy =
    | $.assertNot<$.isTruthy<0>>
    | $.assertNot<$.isTruthy<"">>
    | $.assertNot<$.isTruthy<false>>
    | $.assertNot<$.isTruthy<null>>
    | $.assertNot<$.isTruthy<undefined>>
    | $.assertNot<$.isTruthy<void>>
    | $.assert<$.isTruthy<1>>
    | $.assert<$.isTruthy<"a">>
    | $.assertNot<$.isTruthy<number>>
    | $.assertNot<$.isTruthy<string>>
    | $.assertNot<$.isTruthy<bigint>>
    | $.assert<$.isTruthy<symbol>>
    | $.assert<$.isTruthy<object>>
    | $.assert<$.isTruthy<[]>>
    | $.assert<$.isTruthy<{ a: number }>>
    | $.assert<$.isTruthy<{}>>;

type suit_isNever =
    | $.assert<$.isNever<never>>
    | $.assertNot<$.isNever<0>>
    | $.assertNot<$.isNever<"">>
    | $.assertNot<$.isNever<false>>
    | $.assertNot<$.isNever<null>>
    | $.assertNot<$.isNever<undefined>>
    | $.assertNot<$.isNever<void>>
    | $.assertNot<$.isNever<1>>
    | $.assertNot<$.isNever<"a">>
    | $.assertNot<$.isNever<number>>
    | $.assertNot<$.isNever<string>>
    | $.assertNot<$.isNever<bigint>>
    | $.assertNot<$.isNever<symbol>>
    | $.assertNot<$.isNever<object>>
    | $.assertNot<$.isNever<[]>>
    | $.assertNot<$.isNever<{ a: number }>>
    | $.assertNot<$.isNever<{}>>;

type suit_isNotNever =
    | "reverse to isNever" //
    | "should be covered by 'not' and 'isNever'";

type suit_assignable = "same as 'is'";

type suit_isAnyAssignable =
    | "is any member of union assignable to a type"
    | $.assert<$.isAnyAssignable<1, number>>
    | $.assert<$.isAnyAssignable<1, number | string>>
    | $.assert<$.isAnyAssignable<1 | "", number | string>>
    | $.assert<$.isAnyAssignable<1 | "", number>>
    | $.assertNot<$.isAnyAssignable<1 | "", boolean>>
    | $.assertNot<$.isAnyAssignable<boolean, number>>;

type suit_isEveryAssignable =
    | "is every member of union assignable to a type"
    | $.assert<$.isEveryAssignable<1, number>>
    | $.assert<$.isEveryAssignable<1, number | string>>
    | $.assert<$.isEveryAssignable<1 | "", number | string>>
    | $.assert<$.isEveryAssignable<0 | "" | false, $.falsy>>
    | $.assertNot<$.isEveryAssignable<1 | "", number>>
    | $.assertNot<$.isEveryAssignable<1 | "", boolean>>
    | $.assertNot<$.isEveryAssignable<1 | "" | true, boolean>>
    | $.assertNot<$.isEveryAssignable<boolean, number>>;

type suit_isInvokable =
    | "can a given type be called like a function"
    | $.assert<$.isInvokable<() => void>>
    | $.assert<$.isInvokable<Function>>
    | $.assert<$.isInvokable<typeof console.log>>
    | $.assert<$.isInvokable<ExtendedFunction>>
    | $.assert<$.isInvokable<InvocableInterface>>
    | $.assert<$.isInvokable<NewableInterface>>
    | $.assertNot<$.isInvokable<void>>
    | $.assertNot<$.isInvokable<object>>
    | $.assertNot<$.isInvokable<number>>
    | $.assertNot<$.isInvokable<number | ExtendedFunction>>
    | $.assertNot<$.isInvokable<number | (() => void)>>
    | $.assertNot<$.isInvokable<unknown>>;

type suit_isNewable =
    | "can a given type be called with new keyword"
    | $.assert<$.isNewable<typeof EmptyClass>>
    | $.assert<$.isNewable<typeof ExtendedFunction>>
    | $.assert<$.isNewable<typeof Function>>
    | $.assert<$.isNewable<{ new (arg: number): boolean }>>
    | $.assertNot<$.isNewable<Function>>
    | $.assertNot<$.isNewable<() => object>>
    | $.assertNot<$.isNewable<{ (arg: number): boolean }>>
    | $.assertNot<$.isNewable<object>>
    | $.assertNot<$.isNewable<unknown>>;

type suit_doesExtend =
    | "A extends B so B is assignable to A but A is not assignable to B"
    | $.assert<$.doesExtend<1, number>>
    | $.assert<$.doesExtend<"", string>>
    | $.assert<$.doesExtend<true, boolean>>
    | $.assert<$.doesExtend<string | number, boolean | string | number>>
    | $.assert<$.doesExtend<{ a: number; b: string }, { a: number }>>
    | $.assertNot<$.doesExtend<number, 1>>
    | $.assertNot<$.doesExtend<string, "">>
    | $.assertNot<$.doesExtend<boolean, true>>
    | $.assertNot<$.doesExtend<{ a: number }, { a: number; b: string }>>;

type suit_doesSubset = "same as doesExtend";

type suit_doesSuperset =
    | "reverse subset/extend"
    | $.assert<$.doesSuperset<string | number | boolean, string | number>>
    | $.assert<$.doesSuperset<{ a: number }, { a: number; b: string }>>;

type suit_isPrefixed =
    | "should return true if string or every string in the union is prefixed"
    | $.assert<$.isPrefixed<"a", "">>
    | $.assert<$.isPrefixed<"-a" | "-b", "-">>
    | $.assertNot<$.isPrefixed<"-a" | "b", "-">>
    | $.assertNot<$.isPrefixed<"a" | "-b", "-">>
    | $.assertNot<$.isPrefixed<"a" | "b", "-">>
    | $.assertNot<$.isPrefixed<"-a" | "-b", "--">>;

type suit_isSuffixed =
    | "should return true if string or every string in the union is suffixed"
    | $.assert<$.isSuffixed<"a", "">>
    | $.assert<$.isSuffixed<"a-" | "b-", "-">>
    | $.assertNot<$.isSuffixed<"a-", "--">>
    | $.assertNot<$.isSuffixed<"a-" | "b", "-">>
    | $.assertNot<$.isSuffixed<"a" | "b-", "-">>
    | $.assertNot<$.isSuffixed<"a" | "b", "-">>
    | $.assertNot<$.isSuffixed<"a-" | "b-", "--">>;

type suit_doesContain =
    | "should return true if string or every string in the union contains a substring"
    | $.assert<$.doesContain<"a", "">>
    | $.assert<$.doesContain<"a-", "a">>
    | $.assert<$.doesContain<"-a-", "a">>
    | $.assert<$.doesContain<"-a", "a">>
    | $.assert<$.doesContain<"-a-" | "-b-", "-">>
    | $.assertNot<$.doesContain<"-a-", "--">>
    | $.assertNot<$.doesContain<"a-" | "b", "-">>
    | $.assertNot<$.doesContain<"a" | "b-", "-">>
    | $.assertNot<$.doesContain<"a" | "b", "-">>
    | $.assertNot<$.doesContain<"a-" | "b-", "--">>;

type suit_hasKeys =
    | "object should have keys with given names"
    | $.assert<$.hasKeys<{ a: number }, "a">>
    | $.assert<$.hasKeys<{ a: number; b: string }, "a" | "b">>
    | $.assert<$.hasKeys<{ a: number; b: string; c: boolean }, "a" | "b">>
    | $.assertNot<$.hasKeys<{ a: number }, "b">>
    | $.assertNot<$.hasKeys<{ a: number; b: string }, "a" | "b" | "c">>
    | $.assertNot<$.hasKeys<{ a: number; b: string; c: boolean }, []>>;

type suit_hasOnlyKeys =
    | "object should have only keys with given names"
    | $.assert<$.hasOnlyKeys<{ a: number }, "a">>
    | $.assert<$.hasOnlyKeys<{ a: number; b: string }, "a" | "b">>
    | $.assertNot<$.hasOnlyKeys<{ a: number; b: string }, "a">>
    | $.assertNot<$.hasOnlyKeys<{ a: number; b: string; c: boolean }, "a" | "b">>;

type suit_hasValues =
    | "object should have fields that accept given values"
    | $.assert<$.hasValues<{ a: number }, number>>
    | $.assert<$.hasValues<{ a: number; b: string }, number>>
    | $.assert<$.hasValues<{ a: number; b: string }, number | string>>
    | $.assertNot<$.hasValues<{ a: number; b: string }, number | string | boolean>>
    | $.assertNot<$.hasValues<{ a: number; b: string }, boolean>>;

type suit_hasOnlyValues =
    | "object should have fields that accept only given values"
    | $.assert<$.hasOnlyValues<{ a: number }, number>>
    | $.assertNot<$.hasOnlyValues<{ a: number; b: string }, number>>
    | $.assert<$.hasOnlyValues<{ a: number; b: string }, number | string>>
    | $.assertNot<$.hasOnlyValues<{ a: number; b: string }, number | string | boolean>>
    | $.assertNot<$.hasOnlyValues<{ a: number; b: string }, boolean>>;

type suit_includes =
    | "array should include given types"
    | $.assert<$.includes<[number], number>>
    | $.assert<$.includes<number[], number>>
    | $.assert<$.includes<Array<number>, number>>
    | $.assert<$.includes<[number, string], number>>
    | $.assert<$.includes<[number, string], number | string>>
    | $.assert<$.includes<(number | string)[], number>>
    | $.assert<$.includes<Array<number | string>, number | string>>
    | $.assertNot<$.includes<[number], string>>
    | $.assertNot<$.includes<[number], number | string>>
    | $.assertNot<$.includes<number[], string>>
    | $.assertNot<$.includes<number[], string | number>>
    | $.assertNot<$.includes<Array<number>, string>>
    | $.assertNot<$.includes<Array<number>, number | string>>
    | $.assertNot<$.includes<[number, string], boolean>>
    | $.assertNot<$.includes<[number, string], number | boolean>>
    | $.assertNot<$.includes<(number | string)[], boolean>>
    | $.assertNot<$.includes<Array<number | string>, number | boolean>>;

type suit_returns =
    | "method should return a given value"
    | $.assert<$.returns<() => void, void>>
    | $.assert<$.returns<() => void, undefined>>
    | $.assert<$.returns<() => undefined, undefined>>
    | $.assert<$.returns<() => number, number>>
    | $.assert<$.returns<() => unknown, number>>
    | $.assert<$.returns<() => unknown, unknown>>
    | $.assert<$.returns<() => number, 1>>
    | $.assert<$.returns<() => number | string, number | string>>
    | $.assert<$.returns<() => number | string | boolean, number | string>>
    | $.assert<$.returns<() => Promise<"a">, Promise<any>>>
    | $.assert<$.returns<() => number[], Array<number>>>
    | $.assertNot<$.returns<() => undefined, void>>
    | $.assertNot<$.returns<() => number, unknown>>
    | $.assertNot<$.returns<() => number, string>>
    | $.assertNot<$.returns<() => 1, number>>
    | $.assertNot<$.returns<() => number, number | string>>
    | $.assertNot<$.returns<() => Promise<string>, string>>;

type suit_returnsOnly =
    | "method should return a given value"
    | $.assert<$.returnsOnly<() => void, void>>
    | $.assertNot<$.returnsOnly<() => undefined, void>>
    | $.assert<$.returnsOnly<() => undefined, undefined>>
    | $.assert<$.returnsOnly<() => number, number>>
    | $.assertNot<$.returnsOnly<() => number, unknown>>
    | $.assert<$.returnsOnly<() => unknown, unknown>>
    | $.assertNot<$.returnsOnly<() => 1, number>>
    | $.assert<$.returnsOnly<() => number | string, number | string>>
    | $.assertNot<$.returnsOnly<() => number | string, number | string | boolean>>
    | $.assert<$.returnsOnly<() => Promise<"a">, Promise<any>>>
    | $.assert<$.returnsOnly<() => number[], Array<number>>>
    | $.assertNot<$.returnsOnly<() => void, undefined>>
    | $.assertNot<$.returnsOnly<() => unknown, number>>
    | $.assertNot<$.returnsOnly<() => unknown, void>>
    | $.assertNot<$.returnsOnly<() => number, string>>
    | $.assertNot<$.returnsOnly<() => number, 1>>
    | $.assertNot<$.returnsOnly<() => number | string, number>>
    | $.assertNot<$.returnsOnly<() => Promise<string>, string>>;

type suit_resolvesTo =
    | "method should return a given value"
    | $.assert<$.resolvesTo<() => Promise<void>, void>>
    | $.assert<$.resolvesTo<() => Promise<void>, undefined>>
    | $.assert<$.resolvesTo<() => Promise<undefined>, undefined>>
    | $.assert<$.resolvesTo<() => Promise<number>, number>>
    | $.assert<$.resolvesTo<() => Promise<unknown>, number>>
    | $.assert<$.resolvesTo<() => Promise<unknown>, unknown>>
    | $.assert<$.resolvesTo<() => Promise<number>, 1>>
    | $.assert<$.resolvesTo<() => Promise<number | string>, number | string>>
    | $.assert<$.resolvesTo<() => Promise<number | string | boolean>, number | string>>
    | $.assert<$.resolvesTo<() => Promise<Promise<"a">>, Promise<any>>>
    | $.assert<$.resolvesTo<() => Promise<number[]>, Array<number>>>
    | $.assertNot<$.resolvesTo<() => Promise<undefined>, void>>
    | $.assertNot<$.resolvesTo<() => Promise<number>, unknown>>
    | $.assertNot<$.resolvesTo<() => Promise<number>, string>>
    | $.assertNot<$.resolvesTo<() => Promise<1>, number>>
    | $.assertNot<$.resolvesTo<() => Promise<number>, number | string>>
    | $.assertNot<$.resolvesTo<() => Promise<Promise<string>>, string>>;

type suit_resolvesOnlyTo =
    | "method should return a given value"
    | $.assert<$.resolvesOnlyTo<() => Promise<void>, void>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<void>, undefined>>
    | $.assert<$.resolvesOnlyTo<() => Promise<undefined>, undefined>>
    | $.assert<$.resolvesOnlyTo<() => Promise<number>, number>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<unknown>, number>>
    | $.assert<$.resolvesOnlyTo<() => Promise<unknown>, unknown>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<number>, 1>>
    | $.assert<$.resolvesOnlyTo<() => Promise<number | string>, number | string>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<number | string | boolean>, number | string>>
    | $.assert<$.resolvesOnlyTo<() => Promise<Promise<"a">>, Promise<any>>>
    | $.assert<$.resolvesOnlyTo<() => Promise<number[]>, Array<number>>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<undefined>, void>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<number>, unknown>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<number>, string>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<1>, number>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<number>, number | string>>
    | $.assertNot<$.resolvesOnlyTo<() => Promise<Promise<string>>, string>>;

type suit_acceptsArguments =
    | "method should accept arguments"
    | $.assert<$.acceptsParameters<() => void, []>>
    | $.assert<$.acceptsParameters<(a: string) => void, [string]>>
    | $.assertNot<$.acceptsParameters<(a: string) => void, string[]>>
    | $.assert<$.acceptsParameters<(a: string | number) => void, [string]>>
    | $.assert<$.acceptsParameters<(a: string | number) => void, [string | number]>>
    | $.assert<$.acceptsParameters<(a: string, b: number) => void, [string, number]>>
    | $.assert<$.acceptsParameters<(a: string | boolean, b: number) => void, [string, number]>>
    | $.assert<$.acceptsParameters<(a: string, b?: number) => void, [string, number]>>
    | $.assert<$.acceptsParameters<(a: string, b?: number) => void, [string]>>
    | $.assert<$.acceptsParameters<(a: [string]) => void, [[string]]>>
    | $.assert<$.acceptsParameters<(a: number[]) => void, [[1, 2, 3]]>>
    | $.assert<$.acceptsParameters<(a: number[]) => void, [(1 | 2 | 3)[]]>>
    | $.assertNot<$.acceptsParameters<(a: number[]) => void, [1, 2, 3]>>
    | $.assertNot<$.acceptsParameters<(a: "a") => void, [string]>>
    | $.assertNot<$.acceptsParameters<(a: boolean) => void, [number]>>;

type suit_acceptsOnlyArguments =
    | "method should accept arguments"
    | $.assert<$.acceptsOnlyParameters<() => void, []>>
    | $.assert<$.acceptsOnlyParameters<(a: string) => void, [string]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: string) => void, string[]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: string | number) => void, [string]>>
    | $.assert<$.acceptsOnlyParameters<(a: string | number) => void, [string | number]>>
    | $.assert<$.acceptsOnlyParameters<(a: string, b: number) => void, [string, number]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: string | boolean, b: number) => void, [string, number]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: string, b?: number) => void, [string, number]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: string, b?: number) => void, [string]>>
    | $.assert<$.acceptsOnlyParameters<(a: [string]) => void, [[string]]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: number[]) => void, [(1 | 2 | 3)[]]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: number[]) => void, [[1, 2, 3]]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: number[]) => void, [1, 2, 3]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: "a") => void, [string]>>
    | $.assertNot<$.acceptsOnlyParameters<(a: boolean) => void, [number]>>;
