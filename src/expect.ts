import { $ } from "./expect-utils";

export declare type _<check extends true> = never;

// TODO: figure out how to detect a union type
// TODO: figure out how to convert a union to a tuple and vice-versa
// TODO: change false check resolves to a strings with explanations

export namespace _ {
    export type pass<condition extends true> = never;
    export type fail<condition extends false> = never;

    // -------------

    export type falsy = $.falsy;
    export type primitive = $.primitive;
    export type nullish = $.nullish;

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
        type extends _checkType
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
    export type _checkType = keyof checksMap<any, any>;

    // -------------
    // comparison
    export type toEqualTo<T> = check<T, "equal">;
    export type toBe<T> = check<T, "equal">;
    export type toAccept<T> = check<T, "accept">;
    export type toBeAssignableTo<T> = check<T, "assign">;
    export type toExtend<T> = check<T, "extend">;
    export type toBeExtendedBy<T> = check<T, "extendedBy">;

    // primitives
    export type toBeDefined = check<unknown, "defined">;
    export type toBeOptional = check<unknown, "optional">;
    export type toBeNullish = check<unknown, "nullish">;
    export type toBePrimitive = check<unknown, "primitive">;
    export type toBeLiteral = check<unknown, "literal">;
    export type toBeNever = check<unknown, "never">;

    // general
    export type toBeTruthy = check<unknown, "truthy">;
    export type toBeFalsy = check<unknown, "falsy">;
    export type toBeInvocable = check<unknown, "invokable">;
    export type toBeNewable = check<unknown, "newable">;

    // strings
    export type toStartWith<T extends string> = check<T, "prefixed">;
    export type toEndWith<T extends string> = check<T, "suffixed">;
    export type toContain<T extends string> = check<T, "contains">;

    // objects
    export type toHaveKeys<T extends string> = check<T, "hasKeys">;
    export type toHaveOnlyKeys<T extends string> = check<T, "hasOnlyKeys">;
    export type toHaveFieldsThatAccept<T> = check<T, "hasValues">;
    export type toHaveFieldsThatAcceptOnly<T> = check<T, "hasOnlyValues">;
    // TODO: readonly fields

    // arrays
    export type toInclude<T> = check<T, "includes">;

    // functions
    export type toReturn<T> = check<T, "returns">;
    export type toReturnOnly<T> = check<T, "returnsOnly">;
    export type toResolveTo<T> = check<T, "resolvesTo">;
    export type toResolveToOnly<T> = check<T, "resolvesOnlyTo">;
    export type toAcceptParameters<T extends any[]> = check<T, "parameters">;
    export type toAcceptOnlyParameters<T extends any[]> = check<T, "parametersOnly">;

    export namespace not {
        export type toBeTruthy = negativeCheck<_.toBeTruthy>;
        export type toBeFalsy = negativeCheck<_.toBeFalsy>;

        export type toBeDefined = negativeCheck<_.toBeDefined>;
        export type toBeOptional = negativeCheck<_.toBeOptional>;
        export type toBeNullish = negativeCheck<_.toBeNullish>;
        export type toBeInvocable = negativeCheck<_.toBeInvocable>;
        export type toBeNewable = negativeCheck<_.toBeNewable>;
        export type toBePrimitive = negativeCheck<_.toBePrimitive>;
        export type toBeLiteral = negativeCheck<_.toBeLiteral>;
        export type toBeNever = negativeCheck<_.toBeNever>;

        export type toStartWith<T extends string> = negativeCheck<_.toStartWith<T>>;
        export type toEndWith<T extends string> = negativeCheck<_.toEndWith<T>>;
        export type toContain<T extends string> = negativeCheck<_.toContain<T>>;

        export type toAccept<T> = negativeCheck<_.toAccept<T>>;
        export type toBeAssignableTo<T> = negativeCheck<_.toBeAssignableTo<T>>;
        export type toExtend<T> = negativeCheck<_.toExtend<T>>;
        export type toBeExtendedBy<T> = negativeCheck<_.toBeExtendedBy<T>>;
        export type toEqualTo<T> = negativeCheck<_.toEqualTo<T>>;
        export type toBe<T> = negativeCheck<_.toBe<T>>;

        export type toInclude<T> = negativeCheck<_.toInclude<T>>;

        export type toHaveKeys<T extends string> = negativeCheck<_.toHaveKeys<T>>;
        export type toHaveOnlyKeys<T extends string> = negativeCheck<_.toHaveOnlyKeys<T>>;
        export type toHaveFieldsThatAccept<T> = negativeCheck<_.toHaveFieldsThatAccept<T>>;
        export type toHaveFieldsThatAcceptOnly<T> = negativeCheck<_.toHaveFieldsThatAcceptOnly<T>>;

        export type toReturn<T> = negativeCheck<_.toReturn<T>>;
        export type toReturnOnly<T> = negativeCheck<_.toReturnOnly<T>>;
        export type toResolveTo<T> = negativeCheck<_.toResolveTo<T>>;
        export type toResolveToOnly<T> = negativeCheck<_.toResolveToOnly<T>>;
        export type toAcceptParameters<T extends any[]> = negativeCheck<_.toAcceptParameters<T>>;
        export type toAcceptOnlyParameters<T extends any[]> = negativeCheck<
            _.toAcceptOnlyParameters<T>
        >;
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
        check extends _checkType
    > = {
        [key in check]: checksMap<given, expected>[key];
    }[check];

    type _expect<
        given, //
        payload extends check<any, _checkType>,
        payloadValue extends check<any, any> = unwrapNegativeCheck<payload>,
        negativeCheck extends boolean = $.notEquals<payload, payloadValue>,
        data extends [any, any] = extractCheckData<payloadValue>,
        result extends boolean = resolveCheck<given, data[0], data[1]>
    > = $.ifElse<negativeCheck, $.not<result>, result>;

    export type expect<
        given, //
        expectation extends check<any, _checkType>
    > = _expect<given, expectation>;

    export type expectReturnOf<
        given extends (...args: any[]) => any,
        expectation extends check<any, _checkType>
    > = _expect<ReturnType<given>, expectation>;

    export type expectParametersOf<
        given extends (...args: any[]) => any,
        expectation extends check<any, _checkType>
    > = _expect<Parameters<given>, expectation>;

    export type expectKeysOf<
        given extends object,
        payload extends check<any, _checkType>
    > = _expect<keyof given, payload>;

    export type expectValuesOf<
        given extends { [key: keyof any]: any } | Array<any>,
        payload extends check<any, _checkType>
    > = given extends Array<any>
        ? _expect<given[number], payload>
        : _expect<given[keyof given], payload>;

    export type expectFieldOf<
        given extends { [key: keyof any]: any } | Array<any>,
        field extends keyof given,
        payload extends check<any, _checkType>
    > = _expect<given[field], payload>;

    export function suit(description: string, context: (...ctx: any[]) => any) {}
    export function test(name: string, context: (...ctx: any[]) => any) {}
}
