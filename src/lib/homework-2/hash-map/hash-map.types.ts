export interface IHashMap {
    set: <T = unknown>(key: unknown, value: T) => void;
}
