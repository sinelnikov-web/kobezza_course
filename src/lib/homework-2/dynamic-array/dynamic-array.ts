import { IDynamicArray } from './dynamic-array.types';
import { DoubleLinkedList } from '../../homework-1/linked-list/two-way-linked-list';
import { LinkedListTwoWayNode } from '../../homework-1/linked-list/linked-list-node/two-way-node/two-way-node';

export class DynamicArray<T> implements IDynamicArray<T> {
    length: number = 0;
    list: DoubleLinkedList<Array<T>> = new DoubleLinkedList<Array<T>>();
    currentArray: Array<T>;

    constructor(size = 5) {
        this.currentArray = new Array<T>(size);
        this.list.push(this.currentArray);
    }

    add(value: T) {
        if (this.length === this.currentArray.length) {
            const newArray = new Array(this.currentArray.length);
            this.list.push(newArray);
            this.currentArray = newArray;
        }
        this.currentArray[this.length % this.currentArray.length] = value;
        this.length++;
    }

    get(index: number): T {
        if (index > this.length) {
            throw new Error('Index out of range!');
        }
        const steps = Math.floor(index / this.length);
        let current = this.list.first;
        for (let i = 0; i < steps; i++) {
            current = current?.next as LinkedListTwoWayNode<Array<T>>;
        }
        return current?.value[index % (this.currentArray.length - 1)] as T;
    }
}
