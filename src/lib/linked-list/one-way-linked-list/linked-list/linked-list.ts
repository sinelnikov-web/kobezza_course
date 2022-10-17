import { ILinkedList } from '../../linked-list.types';
import { ILinkedListNode } from '../../linked-list-node/one-way-node/one-way-node.types';
import { LinkedListNode } from '../../linked-list-node/one-way-node/one-way-node';

export class LinkedList<T> implements ILinkedList<T, ILinkedListNode<T>> {
    first: Nullable<ILinkedListNode<T>> = null;
    #length: number = 0;

    push(value: T) {
        if (this.first === null) {
            this.first = new LinkedListNode(value);
            return;
        }
        let current = this.first;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = new LinkedListNode(value);
        this.#length++;
    }

    pop(): T {
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        let current = this.first;

        while (current.next?.next != null) {
            current = current.next;
        }
        if (current.next === null) {
            this.first = null;
        }
        let result = current.next;
        current.next = null;
        this.#length--;
        return result?.value as T;
    }

    unshift(value: T) {
        if (this.first === null) {
            this.first = new LinkedListNode(value);
            return;
        }
        const currentFirst = this.first;
        this.first = new LinkedListNode(value);
        this.first.next = currentFirst;
        this.#length++;
    }

    shift(): T {
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        const currentFirst = this.first;
        this.first = currentFirst.next;
        this.#length--;
        return currentFirst.value;
    }

    clean() {
        this.first = null;
    }

    insert(index: number, value: T) {
        if (index >= this.#length) {
            throw new Error('Index out of range');
        }
        let element = this.first;
        for (let i = 1; i < index - 1; i++) {
            element = element?.next as ILinkedListNode<T>;
        }
        if (element) {
            const nextElement = element?.next as ILinkedListNode<T>;
            element.next = new LinkedListNode(value, { next: nextElement });
        }
    }

    find(cb: (value: T, index: number) => boolean): Nullable<T> {
        let current = this.first;
        for (let i = 0; i < this.#length; i++) {
            if (current && cb(current.value, i)) {
                return current.value;
            } else {
                current = current?.next ?? null;
            }
        }
        return null;
    }

    findIndex(value: T): number {
        let current = this.first;
        for (let i = 0; i < this.#length; i++) {
            if (current && current.value === value) {
                return i;
            }
            current = current?.next ?? null;
        }
        return -1;
    }

    items(): IterableIterator<CanUndef<ILinkedListNode<T>>> {
        let currentNode = this.first;

        return {
            [Symbol.iterator](): IterableIterator<CanUndef<ILinkedListNode<T>>> {
                return this;
            },
            next(): IteratorResult<CanUndef<ILinkedListNode<T>>, CanUndef<ILinkedListNode<T>>> {
                const data = {
                    done: currentNode === null,
                    value: currentNode ?? undefined,
                };

                if (currentNode !== null) {
                    currentNode = currentNode.next;
                }

                return data;
            },
        };
    }

    values(): IterableIterator<CanUndef<T>> {
        let currentNode = this.first;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next(): IteratorResult<CanUndef<T>, CanUndef<T>> {
                const data = {
                    done: currentNode === null,
                    value: currentNode?.value ?? undefined,
                };

                if (currentNode !== null) {
                    currentNode = currentNode.next;
                }

                return data;
            },
        };
    }
}
