import { IDynamicArray } from './dynamic-vector-array.types';

export class DynamicVectorArray<T> implements IDynamicArray<T> {
    length: number = 0;
    list: Array<T>;

    constructor(size = 1) {
        this.list = new Array<T>(size);
    }

    add(value: T) {
        if (this.length > 0 && this.length === this.list.length) {
            const oldList = this.list;
            this.list = new Array<T>(this.list.length * 2);
            for (let i = 0; i < oldList.length; i++) {
                this.list[i] = oldList[i];
            }
        }
        this.list[this.length] = value;
        this.length++;
    }

    get(index: number): T {
        if (index > this.length) {
            throw new Error('Index out of range!');
        }
        return this.list[this.length - 1];
    }

    [Symbol.iterator]() {
        return this.list[Symbol.iterator]();
    }
}
