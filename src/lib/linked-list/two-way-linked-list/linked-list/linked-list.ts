import { ILinkedList } from '../../linked-list.types';
import { ILinkedListTwoWayNode } from '../../linked-list-node/two-way-node/two-way-node.types';
import { LinkedListTwoWayNode } from '../../linked-list-node/two-way-node/two-way-node';

export class LinkedList<T> implements ILinkedList<T, ILinkedListTwoWayNode<T>> {
    first: Nullable<ILinkedListTwoWayNode<T>> = null;
    protected length: number = 0;

    push(value: T) {
        const newNode = new LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null) {
            this.first = newNode;
            return;
        }
        let current = this.first;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
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
        this.length--;
        return result?.value as T;
    }

    unshift(value: T) {
        const newNode = new LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null) {
            this.first = newNode;
            return;
        }
        const currentFirst = this.first;
        currentFirst.prev = newNode;
        this.first = newNode;
        this.first.next = currentFirst;
    }

    shift(): T {
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        const currentFirst = this.first;
        this.first = currentFirst.next;
        if (this.first) {
            this.first.prev = null;
        }
        this.length--;
        return currentFirst.value;
    }

    clean() {
        this.first = null;
        this.length = 0;
    }

    insert(index: number, value: T) {
        if (index >= this.length) {
            throw new Error('Index out of range');
        }
        const newNode = new LinkedListTwoWayNode(value);
        let element = this.first;
        for (let i = 1; i < index - 1; i++) {
            element = element?.next as ILinkedListTwoWayNode<T>;
        }
        if (element) {
            const nextElement = element?.next;
            if (nextElement) {
                nextElement.prev = newNode;
                newNode.next = nextElement;
            }
            newNode.prev = element;
            element.next = newNode;
        }
    }

    find(cb: (value: T, index: number) => boolean): Nullable<T> {
        let current = this.first;
        for (let i = 0; i < this.length; i++) {
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
        for (let i = 0; i < this.length; i++) {
            if (current && current.value === value) {
                return i;
            }
            current = current?.next ?? null;
        }
        return -1;
    }

    items(): IterableIterator<CanUndef<ILinkedListTwoWayNode<T>>> {
        let currentNode = this.first;

        return {
            [Symbol.iterator](): IterableIterator<CanUndef<ILinkedListTwoWayNode<T>>> {
                return this;
            },
            next(): IteratorResult<CanUndef<ILinkedListTwoWayNode<T>>, CanUndef<ILinkedListTwoWayNode<T>>> {
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
