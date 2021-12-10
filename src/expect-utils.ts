export declare namespace $ {
    export type falsy = false | "" | 0 | 0n | null | undefined | void;
    export type primitive = string | number | bigint | boolean | symbol | null | undefined;
    export type nullish = null | undefined | void;

    export type assert<condition extends true> = never;
    export type assertNever<condition extends never> = never;
    export type assertNot<condition extends false> = never;
    export type assertResolves<A, B extends A> = never;

    export type not<A extends boolean> = [A] extends [true] ? false : true;
    export type isNot<A, B> = not<isAssignable<A, B>>;
    export type equals<A, B> = [A, B] extends [B, A] ? true : false;
    export type notEquals<A, B> = not<equals<A, B>>;

    export type ifThen<
        predicate extends boolean, //
        result,
        alternative = never
    > = ifElse<predicate, result, alternative>;

    export type ifElse<
        predicate extends boolean, //
        result,
        alternative
    > = isNotNever<predicate> extends true
        ? [predicate] extends [true]
            ? result
            : alternative
        : alternative;

    export type and<
        A extends boolean, //
        B extends boolean
    > = ifThen<A, ifThen<B, true, false>, false>;
    export type or<
        A extends boolean, //
        B extends boolean
    > = ifThen<A, true, ifThen<B, true, false>>;
    export type xor<
        A extends boolean, //
        B extends boolean
    > = notEquals<A, B>;
    export type butNot<
        A extends boolean, //
        B extends boolean
    > = and<A, not<B>>;

    export type isUndefined<T> = or<equals<undefined, T>, equals<void, T>>;
    export type isOptional<T> = isAssignable<undefined, T>;
    export type isDefined<T> = and<not<isOptional<T>>, isNotNever<T>>;

    export type isPrimitive<T> = isAssignable<T, primitive>;
    export type isLiteral<T> = not<
        isAssignable<
            | doesExtend<T, number> //
            | doesExtend<T, string>
            | doesExtend<T, boolean>,
            false
        >
    >;

    export type isFalsy<T> = isAssignable<T, falsy>;
    export type isTruthy<
        T, //
        notFalsy = not<isAnyAssignable<falsy, T>>
    > = [T] extends [{}] ? ([{}] extends [T] ? true : notFalsy) : notFalsy;

    export type isNever<T> = equals<T, never>;
    export type isNotNever<T> = not<equals<T, never>>;

    export type isAssignable<A, toB> = [A] extends [toB] ? true : false;
    export type isAnyAssignable<A, B> = not<equals<A extends B ? true : false, false>>;
    export type isEveryAssignable<A, B> = equals<A extends B ? true : false, true>;

    export type isInvokable<T> = or<
        isAssignable<T, { (...args: any[]): any }>,
        isAssignable<T, Function>
    >;
    export type isNewable<T> = isAssignable<T, { new (...args: any[]): any }>;

    export type doesExtend<A, B> = butNot<isAssignable<A, B>, isAssignable<B, A>>;
    export type doesSubset<A, B> = butNot<isAssignable<A, B>, isAssignable<B, A>>;
    export type doesSuperset<A, B> = butNot<isAssignable<B, A>, isAssignable<A, B>>;

    export type isPrefixed<
        T, //
        P
    > = [T] extends [string]
        ? [P] extends [string]
            ? [T] extends [`${P}${infer _}`]
                ? true
                : false
            : false
        : false;

    export type isSuffixed<
        T, //
        P
    > = [T] extends [string]
        ? [P] extends [string]
            ? [T] extends [`${infer _}${P}`]
                ? true
                : false
            : false
        : false;

    export type doesContain<
        T, //
        S
    > = [T] extends [string]
        ? [S] extends [string]
            ? [T] extends [`${infer _}${S}${infer __}`]
                ? true
                : false
            : false
        : false;

    export type hasKeys<O, K> = [K] extends [string] ? isAssignable<K, keyof O> : false;
    // TODO: add hasOptionalKeys and hasRequiredKeys
    export type hasOnlyKeys<O, K> = [K] extends [string] ? equals<O, Record<K, any>> : false;
    export type hasValues<O, V> = isAssignable<V, O[keyof O]>;
    export type hasOnlyValues<O, V> = equals<V, O[keyof O]>;

    export type includes<T, V> = [T] extends [Array<any>]
        ? [V] extends [T[number]]
            ? true
            : false
        : false;

    export type returns<T, V> = [T] extends [(...args: any) => infer R]
        ? isAssignable<V, R>
        : false;
    export type returnsOnly<T, V> = [T] extends [(...args: any) => infer R] ? equals<R, V> : false;

    export type resolvesTo<T, V> = returns<T, Promise<V>>;
    export type resolvesOnlyTo<T, V> = returnsOnly<T, Promise<V>>;

    export type acceptsParameters<T, V> = [V] extends [any[]]
        ? [T] extends [(...args: infer A) => any]
            ? isAssignable<V, A>
            : false
        : false;

    export type acceptsOnlyParameters<T, V> = [V] extends [any[]]
        ? [T] extends [(...args: infer A) => any]
            ? equals<V, A>
            : false
        : false;

    export {};
}
