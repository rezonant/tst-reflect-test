import { getType } from "tst-reflect";


export function cool<T>(...args) {
    console.dir(args);
    return getType<T>();
}