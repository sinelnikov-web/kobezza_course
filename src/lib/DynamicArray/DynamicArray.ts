import { IDynamicArray } from './types';
import { LinkedList, LinkedListNode } from '../linked-list';

export class DynamicArray implements IDynamicArray {
    #list = new LinkedList(LinkedListNode);
    #currentArray: Array<any>;
    #capacity: number;
    length: number = 0;

    constructor(capacity = 5) {
        this.#capacity = capacity;
        this.#currentArray = new Array(capacity);
        this.#list.add(this.#currentArray);
    }

    add(value: any) {
        if (this.length === this.#capacity) {
            this.#currentArray = new Array(this.#capacity);
            this.#list.add(this.#currentArray);
        }
        this.#currentArray[this.length % this.#capacity] = value;
        this.length++;
    }

    get(index: number) {
        let needArray = this.#list.first;
        for (let i = 0; i < Math.floor(index / this.#capacity); i++) {
            needArray = needArray?.next ?? null;
        }
        return needArray?.value[index % this.#capacity];
    }

    [Symbol.iterator]() {
        let currentArray = this.#list.first;
        let currentIndex = 0;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (currentIndex === currentArray?.value.length) {
                    currentIndex = 0;
                    currentArray = currentArray.next;
                }
                let data = null;
                if (currentArray !== null && currentArray.value[currentIndex] !== undefined) {
                    data = {
                        done: false,
                        value: currentArray.value[currentIndex],
                    };
                } else {
                    data = {
                        done: true,
                        value: undefined,
                    };
                }
                currentIndex++;
                return data;
            },
        };
    }
}
