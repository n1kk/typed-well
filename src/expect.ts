import { $ } from "./expect-utils";

export declare type _<check extends true> = never;

// TODO: figure out how to detect a union type
// TODO: figure out how to convert a union to a tuple and vice-versa
// TODO: change false check resolves to a strings with explanations

export namespace _ {
    export type pass<condition extends true> = never;
    export type fail<condition extends false> = never;

    export type falsy = $.falsy;
    export type primitive = $.primitive;
    export type nullish = $.nullish;
}

// -------------

type tag<
    target, //
    key extends string
> = target & Record<`--${key}`, key>;

type data<
    target, //
    key extends string,
    value
> = target & Record<`::${key}`, value>;

type wrap<T> = [T];
type unwrap<T> = T extends [infer U] ? U : T;

type check<
    value, //
    type extends __checkType
> = data<wrap<value>, "check", type>;

type negativeCheck<
    T extends check<any, any> //
> = tag<T, "not">;

// -------------

type checksMap<given, expected> = {
    falsy: $.isFalsy<given>;
    truthy: $.isTruthy<given>;
    defined: $.isDefined<given>;
    optional: $.isOptional<given>;
    nullish: $.isAnyAssignable<$.nullish, given>;
    primitive: $.isPrimitive<given>;
    invokable: $.isInvokable<given>;
    newable: $.isNewable<given>;
    literal: $.isLiteral<given>;
    never: $.isNever<given>;

    assign: $.isAssignable<given, expected>;
    accept: $.isAssignable<expected, given>;
    equal: $.equals<given, expected>;
    extend: $.doesExtend<given, expected>;
    extendedBy: $.doesExtend<expected, given>;

    prefixed: $.isPrefixed<given, expected>;
    suffixed: $.isSuffixed<given, expected>;
    contains: $.doesContain<given, expected>;

    includes: $.includes<given, expected>;
    hasKeys: $.hasKeys<given, expected>;
    hasOnlyKeys: $.hasOnlyKeys<given, expected>;
    hasValues: $.hasValues<given, expected>;
    hasOnlyValues: $.hasOnlyValues<given, expected>;

    returns: $.returns<given, expected>;
    returnsOnly: $.returnsOnly<given, expected>;
    resolvesTo: $.resolvesTo<given, expected>;
    resolvesOnlyTo: $.resolvesOnlyTo<given, expected>;
    parameters: $.acceptsParameters<given, expected>;
    parametersOnly: $.acceptsOnlyParameters<given, expected>;
};

export type __checkType = keyof checksMap<any, any>;

// -------------

export namespace to {
    // comparison
    export type equalTo<T> = check<T, "equal">;
    export type be<T> = check<T, "equal">;
    export type accept<T> = check<T, "accept">;
    export type beAssignableTo<T> = check<T, "assign">;
    export type extend<T> = check<T, "extend">;
    export type beExtendedBy<T> = check<T, "extendedBy">;

    // primitives
    export type beDefined = check<unknown, "defined">;
    export type beOptional = check<unknown, "optional">;
    export type beNullish = check<unknown, "nullish">;
    export type bePrimitive = check<unknown, "primitive">;
    export type beLiteral = check<unknown, "literal">;
    export type beNever = check<unknown, "never">;

    // general
    export type beTruthy = check<unknown, "truthy">;
    export type beFalsy = check<unknown, "falsy">;
    export type beInvocable = check<unknown, "invokable">;
    export type beNewable = check<unknown, "newable">;

    // strings
    export type startWith<T extends string> = check<T, "prefixed">;
    export type endWith<T extends string> = check<T, "suffixed">;
    export type contain<T extends string> = check<T, "contains">;

    // objects
    export type haveKeys<T extends string> = check<T, "hasKeys">;
    export type haveOnlyKeys<T extends string> = check<T, "hasOnlyKeys">;
    export type haveFieldsThatAccept<T> = check<T, "hasValues">;
    export type haveFieldsThatAcceptOnly<T> = check<T, "hasOnlyValues">;
    // TODO: readonly fields

    // arrays
    export type include<T> = check<T, "includes">;

    // functions
    export type returnType<T> = check<T, "returns">;
    export type returnOnly<T> = check<T, "returnsOnly">;
    export type resolveTo<T> = check<T, "resolvesTo">;
    export type resolveToOnly<T> = check<T, "resolvesOnlyTo">;
    export type acceptParameters<T extends any[]> = check<T, "parameters">;
    export type acceptOnlyParameters<T extends any[]> = check<T, "parametersOnly">;

    export namespace not {
        export type beTruthy = negativeCheck<to.beTruthy>;
        export type beFalsy = negativeCheck<to.beFalsy>;

        export type beDefined = negativeCheck<to.beDefined>;
        export type beOptional = negativeCheck<to.beOptional>;
        export type beNullish = negativeCheck<to.beNullish>;
        export type beInvocable = negativeCheck<to.beInvocable>;
        export type beNewable = negativeCheck<to.beNewable>;
        export type bePrimitive = negativeCheck<to.bePrimitive>;
        export type beLiteral = negativeCheck<to.beLiteral>;
        export type beNever = negativeCheck<to.beNever>;

        export type startWith<T extends string> = negativeCheck<to.startWith<T>>;
        export type endWith<T extends string> = negativeCheck<to.endWith<T>>;
        export type contain<T extends string> = negativeCheck<to.contain<T>>;

        export type accept<T> = negativeCheck<to.accept<T>>;
        export type beAssignableTo<T> = negativeCheck<to.beAssignableTo<T>>;
        export type extend<T> = negativeCheck<to.extend<T>>;
        export type beExtendedBy<T> = negativeCheck<to.beExtendedBy<T>>;
        export type equalTo<T> = negativeCheck<to.equalTo<T>>;
        export type be<T> = negativeCheck<to.be<T>>;

        export type include<T> = negativeCheck<to.include<T>>;

        export type haveKeys<T extends string> = negativeCheck<to.haveKeys<T>>;
        export type haveOnlyKeys<T extends string> = negativeCheck<to.haveOnlyKeys<T>>;
        export type haveFieldsThatAccept<T> = negativeCheck<to.haveFieldsThatAccept<T>>;
        export type haveFieldsThatAcceptOnly<T> = negativeCheck<to.haveFieldsThatAcceptOnly<T>>;

        export type returnType<T> = negativeCheck<to.returnType<T>>;
        export type returnOnly<T> = negativeCheck<to.returnOnly<T>>;
        export type resolveTo<T> = negativeCheck<to.resolveTo<T>>;
        export type resolveToOnly<T> = negativeCheck<to.resolveToOnly<T>>;
        export type acceptParameters<T extends any[]> = negativeCheck<to.acceptParameters<T>>;
        export type acceptOnlyParameters<T extends any[]> = negativeCheck<
            to.acceptOnlyParameters<T>
        >;
    }
}

type unwrapNegativeCheck<
    T extends check<any, any> //
> = [T] extends [negativeCheck<infer _check>]
    ? _check extends check<any, any>
        ? _check
        : never
    : T;

type extractCheckData<
    T extends check<any, any> //
> =
    // for some reason first infer of a value results in it being of type T
    // second infer gets the actual data type of the check
    [T] extends [data<infer value, "check", infer type>]
        ? [value] extends [data<infer _value, "check", type>]
            ? [unwrap<_value>, type]
            : never
        : never;

type resolveCheck<
    given, //
    expected,
    check extends __checkType
> = {
    [key in check]: checksMap<given, expected>[key];
}[check];

type _expect<
    given, //
    payload extends check<any, __checkType>,
    payloadValue extends check<any, any> = unwrapNegativeCheck<payload>,
    negativeCheck extends boolean = $.notEquals<payload, payloadValue>,
    data extends [any, any] = extractCheckData<payloadValue>,
    result extends boolean = resolveCheck<given, data[0], data[1]>
> = $.ifElse<negativeCheck, $.not<result>, result>;

export type expect<
    given, //
    expectation extends check<any, __checkType>
> = _expect<given, expectation>;

export type expectReturnOf<
    given extends (...args: any[]) => any,
    expectation extends check<any, __checkType>
> = _expect<ReturnType<given>, expectation>;

export type expectParametersOf<
    given extends (...args: any[]) => any,
    expectation extends check<any, __checkType>
> = _expect<Parameters<given>, expectation>;

export type expectKeysOf<given extends object, payload extends check<any, __checkType>> = _expect<
    keyof given,
    payload
>;

export type expectValuesOf<
    given extends { [key: keyof any]: any } | Array<any>,
    payload extends check<any, __checkType>
> = given extends Array<any>
    ? _expect<given[number], payload>
    : _expect<given[keyof given], payload>;

export type expectFieldOf<
    given extends { [key: keyof any]: any } | Array<any>,
    field extends keyof given,
    payload extends check<any, __checkType>
> = _expect<given[field], payload>;

export function suit(description: string, context: (...ctx: any[]) => any) {}
export function test(name: string, context: (...ctx: any[]) => any) {}
