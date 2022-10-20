"use strict";
exports.__esModule = true;
var queue_1 = require("../lib/queue");
var queue = new queue_1.Queue();
queue.push(10);
queue.push(11);
queue.push(12);
console.log(queue.head); // 10
console.log(queue.pop()); // 10
console.log(queue.head); // 11
console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
