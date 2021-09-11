import { _ } from "typed-well";

export type EventHandler = (type: string, data?: any) => boolean;

type test_suit =
    | "you can write test descriptions/notes as strings"
    | _<_.expect<EventHandler, _.toBeInvocable>>
    | _<_.expect<EventHandler, _.toBeAssignableTo<Function>>>
    // or as comments, whatever suits your style
    | _<_.expect<EventHandler, _.toAcceptArguments<[string]>>>
    | `you can explicitly state if you expect test to pass or fail`
    | _.pass<_.expect<EventHandler, _.toAcceptArguments<[string, undefined]>>>
    | _.fail<_.expect<EventHandler, _.toAcceptArguments<[symbol]>>>
    | "your IDE will highlight tests that do not pass"
    | _<_.expect<EventHandler, _.toReturn<number>>>
    | _.pass<_.expect<EventHandler, _.toReturn<string>>>
    | _.fail<_.expect<EventHandler, _.toReturn<boolean>>>
    | "should return whether event was handled or not"
    | _<_.expect<EventHandler, _.toReturn<boolean>>>
    | _<_.expect<EventHandler, _.not.toReturn<void | undefined>>>
    | "should not be compativle with generic function definition"
    | _<_.expect<EventHandler, _.not.toBeAssignableTo<() => void>>>
    | _<_.expect<EventHandler, _.not.toAccept<() => void>>>
    | "should not allow to be called withought arguments"
    | _<_.expect<EventHandler, _.not.toAcceptArguments<[]>>>;
