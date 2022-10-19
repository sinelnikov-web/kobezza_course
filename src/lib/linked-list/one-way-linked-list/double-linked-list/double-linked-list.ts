import { IDoubleLinkedList } from '../../linked-list.types';
import { ILinkedListNode } from '../../linked-list-node/one-way-node/one-way-node.types';
import { LinkedListNode } from '../../linked-list-node/one-way-node/one-way-node';
import { LinkedList } from '../linked-list/linked-list';

export class DoubleLinkedList<T> extends LinkedList<T> implements IDoubleLinkedList<T, ILinkedListNode<T>> {
    first: Nullable<ILinkedListNode<T>> = null;
    last: Nullable<ILinkedListNode<T>> = null;
    protected length: number = 0;

    push(value: T): void {
        const newNode = new LinkedListNode(value);
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = this.first;
            return;
        }
        this.last.next = newNode;
        if (this.first.next === null) {
            this.first.next = this.last;
        }
        this.last = this.last.next;
        this.length++;
    }

    pop(): T {
        if (this.first === null || this.last === null) {
            throw new Error('List is empty!');
        }
        let current = this.first;

        while (current.next?.next != null) {
            current = current.next;
        }
        if (current.next === null) {
            this.first = null;
            this.last = null;
        }
        let result = current.next;
        current.next = null;
        this.last = current;
        this.length--;
        return result?.value as T;
    }

    unshift(value: T) {
        const newNode = new LinkedListNode(value);
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = newNode;
            return;
        }
        const currentFirst = this.first;
        this.first = newNode;
        this.first.next = currentFirst;
        this.length++;
    }

    clean(): void {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}
