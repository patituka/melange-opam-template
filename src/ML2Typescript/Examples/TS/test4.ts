import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function length<A>(l: A[]): number {
    if (l.length == 0) {
        return 0;
    } else {
        const [h, ...t] = l;
        return (1 + length(t));
    }
}

function empty<A>(l: A[]): boolean {
    if (l.length == 0) {
        return true;
    } else {
        const [, ] = l;
        return false;
    }
}
const l2 = [1, ...[2, ...[3, ...[]]]];
