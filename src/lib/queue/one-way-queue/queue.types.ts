import { DoubleLinkedList } from 'lib/linked-list/one-way-linked-list';

export interface IQueue<T> {
    queue: DoubleLinkedList<T>;
    head: Nullable<T>;
    push: (value: T) => void;
    pop: () => T;
}
