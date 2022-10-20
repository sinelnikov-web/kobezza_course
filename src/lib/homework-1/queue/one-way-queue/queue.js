"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var one_way_linked_list_1 = require("../../linked-list/one-way-linked-list");
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new one_way_linked_list_1.DoubleLinkedList();
        this.head = null;
    }
    Queue.prototype.pop = function () {
        var _a, _b;
        if (this.queue.first === null) {
            throw new Error('queue is empty!!!');
        }
        var poppedValue = this.queue.shift();
        this.head = (_b = (_a = this.queue.first) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        return poppedValue;
    };
    Queue.prototype.push = function (value) {
        if (this.head === null) {
            this.head = value;
        }
        this.queue.push(value);
    };
    return Queue;
}());
exports.Queue = Queue;
