import { DoubleLinkedList } from 'lib/linked-list/two-way-linked-list';
import { Nullable } from 'lib/types';

export interface IDequeue<T> {
    queue: DoubleLinkedList<T>;
    head: Nullable<T>;
    tail: Nullable<T>;
    push: (value: T) => void;
    pop: () => T;
    unshift: (value: T) => void;
    shift: () => T;
}
