import { IDequeue } from './dequeue.types';
import { DoubleLinkedList } from '../../linked-list/two-way-linked-list';

export class Dequeue<T> implements IDequeue<T> {
    queue: DoubleLinkedList<T> = new DoubleLinkedList();
    head: Nullable<T> = null;
    tail: Nullable<T> = null;

    push(value: T): void {
        if (this.head === null) {
            this.head = value;
        }
        this.tail = value;
        this.queue.push(value);
    }

    pop(): T {
        if (this.queue.last === null) {
            throw new Error('Queue is empty!');
        }
        const poppedValue = this.queue.pop();
        this.tail = this.queue.last?.value ?? null;
        if (this.tail === null) {
            this.head = null;
        }
        return poppedValue;
    }

    unshift(value: T): void {
        if (this.tail === null) {
            this.tail = value;
        }
        this.head = value;
        this.queue.unshift(value);
    }

    shift(): T {
        if (this.queue.first === null) {
            throw new Error('Queue is empty!');
        }
        const shiftedValue = this.queue.shift();
        this.head = this.queue.first?.value ?? null;
        if (this.head === null) {
            this.tail = null;
        }
        return shiftedValue;
    }
}
