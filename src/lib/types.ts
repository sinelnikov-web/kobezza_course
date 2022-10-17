export type Nullable<T> = T | null;
export type Constructor<T> = { new (value: any, next?: T, prev?: T): T };
