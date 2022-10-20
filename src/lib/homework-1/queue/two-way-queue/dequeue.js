"use strict";
exports.__esModule = true;
exports.Dequeue = void 0;
var two_way_linked_list_1 = require("../../linked-list/two-way-linked-list");
var Dequeue = /** @class */ (function () {
    function Dequeue() {
        this.queue = new two_way_linked_list_1.DoubleLinkedList();
        this.head = null;
        this.tail = null;
    }
    Dequeue.prototype.push = function (value) {
        if (this.head === null) {
            this.head = value;
        }
        this.tail = value;
        this.queue.push(value);
    };
    Dequeue.prototype.pop = function () {
        var _a, _b;
        if (this.queue.last === null) {
            throw new Error('Queue is empty!');
        }
        var poppedValue = this.queue.pop();
        this.tail = (_b = (_a = this.queue.last) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        if (this.tail === null) {
            this.head = null;
        }
        return poppedValue;
    };
    Dequeue.prototype.unshift = function (value) {
        if (this.tail === null) {
            this.tail = value;
        }
        this.head = value;
        this.queue.unshift(value);
    };
    Dequeue.prototype.shift = function () {
        var _a, _b;
        if (this.queue.first === null) {
            throw new Error('Queue is empty!');
        }
        var shiftedValue = this.queue.shift();
        this.head = (_b = (_a = this.queue.first) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        if (this.head === null) {
            this.tail = null;
        }
        return shiftedValue;
    };
    return Dequeue;
}());
exports.Dequeue = Dequeue;
