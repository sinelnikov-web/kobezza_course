export interface IStack<T> {
    stack: Array<T>;
    head: Nullable<T>;
    push: (value: T) => void;
    pop: () => T;
}
