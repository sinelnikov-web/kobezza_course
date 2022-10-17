import { IQueue } from 'lib/Queue/queue.types';
import { Nullable } from '../types';
import { LinkedList, LinkedListNode } from '../linked-list';

export class Queue implements IQueue {
    queue: LinkedList<LinkedListNode> = new LinkedList(LinkedListNode);
    head: Nullable<any> = null;

    pop(): any {
        if (!this.queue.first) {
            throw new Error('Queue is empty!!!');
        }
        const poppedNode = this.queue.shift();
        this.head = this.queue.first.value;
        return poppedNode.value;
    }

    push(value: any): void {
        if (!this.head) {
            this.head = value;
        }
        this.queue.add(value);
        console.log('queue', this.queue.first);
    }
}
