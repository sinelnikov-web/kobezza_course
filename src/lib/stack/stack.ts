import { IStack } from './stack.types';
import { LinkedList } from '../linked-list/one-way-linked-list';

export class Stack<T> implements IStack<T> {
    stack: LinkedList<T> = new LinkedList<T>();
    head: Nullable<T> = null;

    push(value: T) {
        this.head = value;
        this.stack.unshift(value);
    }

    pop(): T {}
}
