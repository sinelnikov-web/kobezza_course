export type NodeConfig<T> = {
    next?: ILinkedListNode<T>;
};

export interface ILinkedListNode<T> {
    value: T;
    next: Nullable<ILinkedListNode<T>>;
}
