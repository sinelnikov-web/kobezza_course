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
        if (this.length !== 0 && this.length % this.currentArray.length === 0) {
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
        const steps = Math.floor(index / this.currentArray.length);
        let current = this.list.first;
        for (let i = 0; i < steps; i++) {
            current = current?.next as LinkedListTwoWayNode<Array<T>>;
        }
        return current?.value[index % this.currentArray.length] as T;
    }

    [Symbol.iterator](): IterableIterator<T> {
        let current = this.list.first;
        let currentIndex = 0;

        return {
            [Symbol.iterator](): IterableIterator<T> {
                return this;
            },
            next(): IteratorResult<T> {
                if (current === null || current.value[currentIndex] == undefined) {
                    return {
                        done: true,
                        value: undefined,
                    };
                }

                const value = current.value[currentIndex];
                currentIndex++;

                if (currentIndex === current.value.length) {
                    current = current.next;
                    currentIndex = 0;
                }

                return {
                    done: false,
                    value: value,
                };
            },
        };
    }
}
