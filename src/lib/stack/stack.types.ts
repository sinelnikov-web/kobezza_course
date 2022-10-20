import { LinkedList } from '../linked-list/one-way-linked-list';

export interface IStack<T> {
    stack: LinkedList<T>;
    head: Nullable<T>;
    push: (value: T) => void;
    pop: () => T;
}
