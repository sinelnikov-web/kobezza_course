export type NodeConfig<T> = {
    next?: ILinkedListTwoWayNode<T>;
    prev?: ILinkedListTwoWayNode<T>;
};

export interface ILinkedListTwoWayNode<T> {
    value: T;
    next: Nullable<ILinkedListTwoWayNode<T>>;
    prev: Nullable<ILinkedListTwoWayNode<T>>;
}
