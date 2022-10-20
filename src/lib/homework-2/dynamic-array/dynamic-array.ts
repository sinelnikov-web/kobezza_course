import { IDynamicArray } from './dynamic-array.types';
import { DoubleLinkedList } from '../../homework-1/linked-list/two-way-linked-list';

export class DynamicArray<T> implements IDynamicArray<T> {
    length: number = 0;
    list: DoubleLinkedList<Array<T>> = new DoubleLinkedList<Array<T>>();

    constructor(size = 5) {
        this.list.push(new Array<T>(size));
    }
}
