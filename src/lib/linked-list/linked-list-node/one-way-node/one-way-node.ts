import { ILinkedListNode, NodeConfig } from './one-way-node.types';

export class LinkedListNode<T> implements ILinkedListNode<T> {
    value: T;
    next: Nullable<ILinkedListNode<T>> = null;

    constructor(value: T, config?: NodeConfig<T>) {
        this.value = value;
        if (config?.next != null) {
            this.next = config.next;
        }
    }
}
