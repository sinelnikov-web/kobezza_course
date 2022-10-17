import { Nullable } from '../types';
import { LinkedList, LinkedListNode } from '../linked-list';

export interface IQueue {
    queue: LinkedList<LinkedListNode>;
    head: Nullable<any>;
    push: (value: any) => void;
    pop: () => any;
}
