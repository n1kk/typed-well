export namespace $ {
    export type falsy = false | "" | 0 | 0n | null | undefined | void;
    export type primitive = string | number | bigint | boolean | symbol | null | undefined;
    export type nullish = null | undefined;

    export type assert<condition extends true> = never;
    export type assertNever<condition extends never> = never;
    export type assertNot<condition extends false> = never;
    export type assertResolves<A, B extends A> = never;

    type a = assertResolves<if_then<true, 1>, 1>;

    export type not<A extends boolean> = [A] extends [true] ? false : true;
    export type is<A, B> = [A] extends [B] ? true : false;
    export type isnt<A, B> = not<is<A, B>>;
    export type equals<A, B> = [A, B] extends [B, A] ? true : false;
    export type notEquals<A, B> = not<equals<A, B>>;

    export type if_then<
        predicate extends boolean, //
        result,
        alternative = never
    > = if_else<predicate, result, alternative>;

    export type if_else<
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
    > = if_then<A, if_then<B, true, false>, false>;
    export type or<
        A extends boolean, //
        B extends boolean
    > = if_then<A, true, if_then<B, true, false>>;
    export type xor<
        A extends boolean, //
        B extends boolean
    > = notEquals<A, B>;
    export type butNot<
        A extends boolean, //
        B extends boolean
    > = and<A, not<B>>;

    export type isUndefined<T> = is<T, undefined | void>;
    export type isDefined<T> = not<isUndefined<T>>;
    export type isPrimitive<T> = isAssignable<T, primitive>;
    export type isLiteral<T> = not<
        is<
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

    export type isAssignable<A, B> = is<A, B>;
    export type isAnyAssignable<A, B> = not<equals<A extends B ? true : false, false>>;
    export type isEveryAssignable<A, B> = equals<A extends B ? true : false, true>;

    export type doesExtend<A, B> = butNot<is<A, B>, is<B, A>>;
    export type doesSubset<A, B> = butNot<is<A, B>, is<B, A>>;
    export type doesSuperset<A, B> = butNot<is<B, A>, is<A, B>>;

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

    export type hasKeys<O, K> = [K] extends [string] ? doesExtend<O, Record<K, unknown>> : false;
    export type hasOnlyKeys<O, K> = [K] extends [string] ? equals<O, Record<K, any>> : false;
    export type hasValues<O, V> = is<V, O[keyof O]>;
    export type hasOnlyValues<O, V> = equals<V, O[keyof O]>;

    export type includes<T, V> = [T] extends [Array<any>]
        ? [V] extends [T[number]]
            ? true
            : false
        : false;

    export type returns<T, V> = [T] extends [(...args: any) => infer R] ? is<V, R> : false;
    export type returnsOnly<T, V> = [T] extends [(...args: any) => infer R] ? equals<R, V> : false;

    export type resolvesTo<T, V> = returns<T, Promise<V>>;
    export type resolvesOnlyTo<T, V> = returnsOnly<T, Promise<V>>;

    export type acceptsArguments<T, V> = [V] extends [any[]]
        ? [T] extends [(...args: infer A) => any]
            ? is<V, A>
            : false
        : false;

    export type acceptsOnlyArguments<T, V> = [V] extends [any[]]
        ? [T] extends [(...args: infer A) => any]
            ? equals<V, A>
            : false
        : false;
}
