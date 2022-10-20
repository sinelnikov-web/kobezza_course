import { IDoubleLinkedList } from '../../linked-list.types';
import { ILinkedListTwoWayNode } from '../../linked-list-node/two-way-node/two-way-node.types';
import { LinkedListTwoWayNode } from '../../linked-list-node/two-way-node/two-way-node';
import { LinkedList } from '../linked-list/linked-list';

export class DoubleLinkedList<T> extends LinkedList<T> implements IDoubleLinkedList<T, ILinkedListTwoWayNode<T>> {
    first: Nullable<ILinkedListTwoWayNode<T>> = null;
    last: Nullable<ILinkedListTwoWayNode<T>> = null;
    protected length: number = 0;

    push(value: T): void {
        const newNode = new LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = this.first;
            return;
        }
        this.last.next = newNode;
        newNode.prev = this.last;
        if (this.first.next === null) {
            this.first.next = this.last;
        }
        this.last = this.last.next;
    }

    pop(): T {
        if (this.first === null || this.last === null) {
            throw new Error('List is empty!');
        }
        let currentLast = this.last;
        if (this.last === this.first) {
            this.first = null;
        }
        this.last = currentLast.prev;
        if (this.last) {
            this.last.next = null;
        }

        this.length--;
        return currentLast.value;
    }

    unshift(value: T) {
        const newNode = new LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = newNode;
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
        } else {
            this.last = null;
        }
        this.length--;
        return currentFirst.value;
    }

    clean(): void {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}
