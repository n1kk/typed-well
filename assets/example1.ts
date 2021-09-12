import { _ } from "typed-well";

export type EventHandler = (type: string, data?: any) => boolean;

type test_suit =
    | "you can write test descriptions/notes as strings"
    | _<_.expect<EventHandler, _.toBeInvocable>>
    | _<_.expect<EventHandler, _.toBeAssignableTo<Function>>>
    | _<_.expect<EventHandler, _.toReturn<boolean>>>
    | _<_.expect<ReturnType<EventHandler>, _.toBe<boolean>>>
    // or as comments, whatever suits your style
    | _<_.expect<EventHandler, _.toAcceptParameters<[string]>>>
    | _<_.expect<Parameters<EventHandler>, _.toAccept<[string, object]>>>
    | `you can explicitly state if you expect test to pass or fail`
    | _.pass<_.expect<EventHandler, _.toAcceptParameters<[string, undefined]>>>
    | _.fail<_.expect<EventHandler, _.toAcceptParameters<[symbol]>>>
    | "your IDE will highlight tests that do not pass"
    // | _<_.expect<EventHandler, _.toReturn<number>>>
    // | _<_.expect<EventHandler, _.toReturn<string>>>
    | `negative checks available via " _.not" namespace`
    | _<_.expect<EventHandler, _.not.toReturn<void | undefined>>>
    | _<_.expect<EventHandler, _.not.toBeAssignableTo<symbol>>>
    | `or use "_.fail" assert`
    | _.fail<_.expect<EventHandler, _.toReturn<void | undefined>>>
    | _.fail<_.expect<EventHandler, _.toBeAssignableTo<symbol>>>;
