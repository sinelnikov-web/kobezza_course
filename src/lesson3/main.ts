import { DynamicVectorArray } from '../lib/homework-2/dynamic-vector-array/dynamic-vector-array';

const arr = new DynamicVectorArray(3);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log({ arr });

console.log(arr.length); // 5

console.log(arr.get(0)); // 1
console.log(arr.get(1)); // 2
console.log(arr.get(4)); // 5

for (const value of arr) {
    console.log(value);
}
