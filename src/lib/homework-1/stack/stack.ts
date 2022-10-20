import { IStack } from './stack.types';

export class Stack<T> implements IStack<T> {
    stack: Array<T>;
    head: Nullable<T> = null;
    #length: number = 0;

    constructor(size = 5) {
        this.stack = new Array<T>(size);
    }

    push(value: T) {
        if (this.#length === this.stack.length) {
            throw new Error('Stack is full!');
        }
        this.stack[this.#length] = value;
        this.#length++;
        this.head = value;
    }

    pop(): T {
        if (this.head === null) {
            throw new Error('Stack is empty!');
        }
        this.head = this.stack[this.#length - 2] ?? null;
        const poppedItem = this.stack[this.#length - 1];
        delete this.stack[this.#length - 1];
        this.#length--;
        return poppedItem;
    }
}
