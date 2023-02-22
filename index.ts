interface User {
    name: string;
    age: number;
}

type bool = true | false;

type PaymentStatus = 'init' | 'success' | 'failed'


interface Hello<T> {
    isClicked: bool;
    data: T;
    paymentStatus?: PaymentStatus;
}

interface Resource<T> {
    data: T | null;
    loading: boolean;
    error?: string;
}

type Response<T> = {
    data: T
    isSuccess: boolean
    isError: boolean
    error?: string
    status?: number
}

declare global {
    type Predicate<K> = (value: K) => boolean

    export interface Array<T> {
        findFirst: (predicate: Predicate<T>) => T
    }
}

Array.prototype.findFirst = function <T>(predicate: Predicate<T>): T {
    this.forEach(e => {
        if (predicate(e)) return e
    })
    throw Error("Element doesn't exists")
}

const numbers: Array<number> = [1, 3, 4, 34, 34, 3, 43, 4]

const four = numbers.findFirst(e => e == 4)


function TODO(): never {
    throw Error("Not implemented yet")
}


type Horizontal = 'left' | 'right';
type Vertical = 'top' | 'bottom';


function updatePadding(direction: Horizontal | Vertical, value: number) {
    console.log(direction, value);
}

updatePadding('top', 1)


const markResource = <T, R>(data: T): Hello<string> => {
    return {
        isClicked: false,
        data: 'Hello',
    }
}

function test(s: string): number {
    TODO()
}

const data: Hello<string> = markResource('Hello');

console.log(data);


import {EventEmitter} from 'events';


class SomeEvent extends EventEmitter {
}


type Includes<K extends any[], P extends number> =
    K extends [infer Head, ...infer Rest]
        ? Head extends P
            ? true
            : Includes<Rest, P>
        : false





type SdDSsd = Includes<[12, 34, 12, 112, 2, 12], 3>

