// Trim

type Space = " "

type TrimLeft<T extends string> = T extends `${Space}${infer Rest}`
    ? TrimLeft<Rest>
    : T

type TrimRight<T extends string> = T extends `${infer Prefix}${Space}`
    ? TrimRight<Prefix>
    : T

type Trim<T extends string> = TrimLeft<TrimRight<T>>

type TrimLeftHello = TrimLeft<'    hello'>

type TrimRightHello = TrimRight<'hello      '>

type TrimHello = Trim<'      hello       '>


// Replace
type Replace<Str extends string, From extends string, To extends string> =
    Str extends `${infer Prefix}${From}${infer Suffix}`
        ? `${Prefix}${To}${Suffix}` : Str


type ReplaceHello = Replace<"Hello World!", "World", "Avinash">





