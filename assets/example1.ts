import { _, expect, to } from "typed-well"; // "typed-well"

export type EventHandler = (type: string, data?: any) => boolean;

type test_suit =
    | "you can write test descriptions/notes as strings"
    | _<expect<EventHandler, to.beInvocable>>
    | _<expect<EventHandler, to.beAssignableTo<Function>>>
    | _<expect<EventHandler, to.returnType<boolean>>>
    | _<expect<ReturnType<EventHandler>, to.be<boolean>>>
    // or as comments, whatever suits your style
    | _<expect<EventHandler, to.acceptParameters<[string]>>>
    | _<expect<Parameters<EventHandler>, to.accept<[string, object]>>>
    | `you can explicitly state if you expect test to pass or fail`
    | _.pass<expect<EventHandler, to.acceptParameters<[string, undefined]>>>
    | _.fail<expect<EventHandler, to.acceptParameters<[symbol]>>>
    | "your IDE will highlight tests that do not pass"
    | _<expect<EventHandler, to.returnType<number>>>
    | _<expect<EventHandler, to.returnType<string>>>
    | `negative checks available via " to.not" namespace`
    | _<expect<EventHandler, to.not.returnType<void | undefined>>>
    | _<expect<EventHandler, to.not.beAssignableTo<symbol>>>
    | `or use "_.fail" assert`
    | _.fail<expect<EventHandler, to.returnType<void | undefined>>>
    | _.fail<expect<EventHandler, to.beAssignableTo<symbol>>>;
