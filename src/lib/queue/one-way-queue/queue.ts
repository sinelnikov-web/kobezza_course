import { IQueue } from './queue.types';
import { DoubleLinkedList } from '../../linked-list/one-way-linked-list';

export class Queue<T> implements IQueue<T> {
    queue: DoubleLinkedList<T> = new DoubleLinkedList();
    head: Nullable<any> = null;

    pop(): T {
        if (this.queue.first === null) {
            throw new Error('queue is empty!!!');
        }
        const poppedValue = this.queue.shift();
        this.head = this.queue.first?.value ?? null;
        return poppedValue;
    }

    push(value: T): void {
        if (this.head === null) {
            this.head = value;
        }
        this.queue.push(value);
    }
}
