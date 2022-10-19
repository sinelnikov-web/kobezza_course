export interface ILinkedList<T, N> {
    first: Nullable<N>;
    push: (value: T) => void;
    pop: () => T;
    shift: () => T;
    unshift: (value: T) => void;
    clean: () => void;
    insert: (index: number, value: T) => void;
    find: (cb: (item: T, index: number) => boolean) => Nullable<T>;
    findIndex: (value: T) => number;
    values: () => IterableIterator<CanUndef<T>>;
    items: () => IterableIterator<CanUndef<N>>;
}

export interface IDoubleLinkedList<T, N> extends ILinkedList<T, N> {
    last: Nullable<N>;
}
