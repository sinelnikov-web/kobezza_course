import { ILinkedListTwoWayNode, NodeConfig } from './two-way-node.types';

export class LinkedListTwoWayNode<T> implements ILinkedListTwoWayNode<T> {
    value: T;
    next: Nullable<ILinkedListTwoWayNode<T>> = null;
    prev: Nullable<ILinkedListTwoWayNode<T>> = null;

    constructor(value: T, config?: NodeConfig<T>) {
        this.value = value;
        if (config) {
            this.next = config.next ?? null;
            this.prev = config.prev ?? null;
        }
    }
}
