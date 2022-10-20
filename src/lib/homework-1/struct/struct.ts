import { IStruct } from './struct.types';

type GetIndex = (key: string) => number;

export class Struct implements IStruct {
    #fn: GetIndex;
    #values: Array<unknown>;

    constructor(values: Array<string>) {
        this.#fn = Struct.generateKeyFunction(values);
        this.#values = new Array(values.length);
    }

    get<T = unknown>(key: string): T {
        const value = this.#values[this.#fn(key)];
        return value as T;
    }

    set<T = unknown>(key: string, value: T) {
        this.#values[this.#fn(key)] = value;
    }

    static generateKeyFunction(props: Array<string>): GetIndex {
        const fnBody = `switch(key) {
            ${props.map((key, index) => `case "${key}": return ${index};`).join('\n')}
            default: {
                throw new Error("Key doesn't exist!");
            }
        }`;

        return Function('key', fnBody) as GetIndex;
    }
}
