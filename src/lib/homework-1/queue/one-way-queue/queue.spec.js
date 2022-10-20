"use strict";
exports.__esModule = true;
var queue_1 = require("./queue");
describe('queue implementation', function () {
    it('queue push values', function () {
        var queue = new queue_1.Queue();
        expect(queue.head).toBe(null);
        queue.push(1);
        expect(queue.head).toBe(1);
        queue.push(2);
        expect(queue.head).toBe(1);
        queue.push(3);
        expect(queue.head).toBe(1);
    });
    it('queue pop values', function () {
        var queue = new queue_1.Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).toBe(1);
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
        expect(function () { return queue.pop(); }).toThrow('queue is empty!');
    });
});
