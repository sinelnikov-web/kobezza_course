import { DoubleLinkedList } from '../../homework-1/linked-list/two-way-linked-list';

export interface IDynamicArray<T> {
    list: DoubleLinkedList<Array<T>>;
    length: number;
    add: (value: T) => void;
    get: (index: number) => T;
}
