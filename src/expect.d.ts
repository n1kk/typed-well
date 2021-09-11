import { $ as utils } from "./expect-utils";

export declare type _<check extends true> = never;

// TODO: everything is public in d.ts but not in .ts, convert d.ts to .ts before publishing

// TODO: figure out how to detect a union type
export import $ = utils;

export declare namespace _ {
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
        type extends checkType
    > = data<wrap<value>, "check", type>;

    type negativeCheck<
        T extends check<any, any> //
    > = tag<T, "not">;

    // -------------

    type checksMap<given, expected> = {
        falsy: $.isFalsy<given>;
        truthy: $.isTruthy<given>;
        defined: $.isDefined<given>;
        nullish: $.isAnyAssignable<$.nullish, given>;
        primitive: $.isPrimitive<given>;
        invokable: $.isInvokable<given>;
        newable: $.isNewable<given>;

        assign: $.is<given, expected>;
        accept: $.is<expected, given>;
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
        arguments: $.acceptsArguments<given, expected>;
        argumentsOnly: $.acceptsOnlyArguments<given, expected>;
    };
    type checkType = keyof checksMap<any, any>;

    // -------------
    // general
    export type toBeTruthy = check<unknown, "truthy">;
    export type toBeFalsy = check<unknown, "falsy">;
    export type toBeInvocable = check<unknown, "invokable">;
    export type toBeNewable = check<unknown, "newable">;

    // primitives
    export type toBeDefined = check<unknown, "defined">;
    export type toBeNullish = check<unknown, "nullish">;
    export type toBePrimitive = check<unknown, "primitive">;

    // strings
    export type toStartWith<T extends string> = check<T, "prefixed">;
    export type toEndWith<T extends string> = check<T, "suffixed">;
    export type toContain<T extends string> = check<T, "contains">;

    // comparison
    export type toAccept<T> = check<T, "accept">;
    export type toBeAssignableTo<T> = check<T, "assign">;
    export type toExtend<T> = check<T, "extend">;
    export type toBeExtendedBy<T> = check<T, "extendedBy">; // reverse toExtend
    export type toBeEqualTo<T> = check<T, "equal">;

    // objects
    export type toHaveKeys<T extends string> = check<T, "hasKeys">;
    export type toHaveOnlyKeys<T extends string> = check<T, "hasOnlyKeys">;
    export type toHaveFieldsThatAccept<T> = check<T, "hasValues">;
    export type toHaveFieldsThatAcceptOnly<T> = check<T, "hasOnlyValues">;

    export type toInclude<T> = check<T, "includes">;

    // functions
    export type toReturn<T> = check<T, "returns">;
    export type toReturnOnly<T> = check<T, "returnsOnly">;
    export type toResolveTo<T> = check<T, "resolvesTo">;
    export type toResolveToOnly<T> = check<T, "resolvesOnlyTo">;
    export type toAcceptArguments<T extends any[]> = check<T, "arguments">;
    export type toAcceptOnlyArguments<T extends any[]> = check<T, "argumentsOnly">;

    export namespace not {
        export type toBeTruthy = negativeCheck<_.toBeTruthy>;
        export type toBeFalsy = negativeCheck<_.toBeFalsy>;

        export type toBeDefined = negativeCheck<_.toBeDefined>;
        export type toBeNullish = negativeCheck<_.toBeNullish>;
        export type toBeInvocable = negativeCheck<_.toBeInvocable>;
        export type toBeNewable = negativeCheck<_.toBeNewable>;
        export type toBePrimitive = negativeCheck<_.toBePrimitive>;

        export type toStartWith<T extends string> = negativeCheck<_.toStartWith<T>>;
        export type toEndWith<T extends string> = negativeCheck<_.toEndWith<T>>;
        export type toContain<T extends string> = negativeCheck<_.toContain<T>>;

        export type toAccept<T> = negativeCheck<_.toAccept<T>>;
        export type toBeAssignableTo<T> = negativeCheck<_.toBeAssignableTo<T>>;
        export type toExtend<T> = negativeCheck<_.toExtend<T>>;
        export type toBeExtendedBy<T> = negativeCheck<_.toBeExtendedBy<T>>;
        export type toBeEqualTo<T> = negativeCheck<_.toBeEqualTo<T>>;
        export type toInclude<T> = negativeCheck<_.toInclude<T>>;

        export type toHaveKeys<T extends string> = negativeCheck<_.toHaveKeys<T>>;
        export type toHaveOnlyKeys<T extends string> = negativeCheck<_.toHaveOnlyKeys<T>>;
        export type toHaveFieldsThatAccept<T> = negativeCheck<_.toHaveFieldsThatAccept<T>>;
        export type toHaveFieldsThatAcceptOnly<T> = negativeCheck<_.toHaveFieldsThatAcceptOnly<T>>;

        export type toReturn<T> = negativeCheck<_.toReturn<T>>;
        export type toReturnOnly<T> = negativeCheck<_.toReturnOnly<T>>;
        export type toResolveTo<T> = negativeCheck<_.toResolveTo<T>>;
        export type toResolveToOnly<T> = negativeCheck<_.toResolveToOnly<T>>;
        export type toAcceptArguments<T extends any[]> = negativeCheck<_.toAcceptArguments<T>>;
        export type toAcceptOnlyArguments<T extends any[]> = negativeCheck<
            _.toAcceptOnlyArguments<T>
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
        // for some reason first infer of value results in it being of type T
        // second infer gets the actual data type
        [T] extends [data<infer value, "check", infer type>]
            ? [value] extends [data<infer _value, "check", type>]
                ? [unwrap<_value>, type]
                : never
            : never;

    type resolveCheck<
        given, //
        expected,
        check extends checkType
    > = {
        [key in check]: checksMap<given, expected>[key];
    }[check];

    type _expect<
        given, //
        payload extends check<any, checkType>,
        payloadValue extends check<any, any> = unwrapNegativeCheck<payload>,
        negativeCheck extends boolean = $.notEquals<payload, payloadValue>,
        data extends [any, any] = extractCheckData<payloadValue>,
        result extends boolean = resolveCheck<given, data[0], data[1]>
    > = $.if_else<negativeCheck, $.not<result>, result>;

    export type expect<given, payload extends check<any, checkType>> = _expect<given, payload>;

    export {};
}
