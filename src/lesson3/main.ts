import { DynamicArray } from '../lib/DynamicArray';

const arr = new DynamicArray(3);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr.length); // 5

console.log(arr.get(0)); // 1
console.log(arr.get(1)); // 2
console.log(arr.get(4)); // 5
