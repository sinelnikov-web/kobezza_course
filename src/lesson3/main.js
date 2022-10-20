"use strict";
exports.__esModule = true;
var dynamic_array_1 = require("../lib/homework-2/dynamic-array/dynamic-array");
var arr = new dynamic_array_1.DynamicArray(3);
arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);
console.log(arr.length); // 5
console.log(arr.get(0)); // 1
console.log(arr.get(1)); // 2
console.log(arr.get(4)); // 5
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
