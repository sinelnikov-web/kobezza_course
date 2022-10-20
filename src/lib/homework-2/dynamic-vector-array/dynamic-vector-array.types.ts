export interface IDynamicArray<T> {
    list: Array<T>;
    length: number;
    add: (value: T) => void;
    get: (index: number) => T;
}
