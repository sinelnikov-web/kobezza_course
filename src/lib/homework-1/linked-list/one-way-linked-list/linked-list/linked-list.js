"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var one_way_node_1 = require("../../linked-list-node/one-way-node/one-way-node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.first = null;
        this.length = 0;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new one_way_node_1.LinkedListNode(value);
        this.length++;
        if (this.first === null) {
            this.first = newNode;
            return;
        }
        var current = this.first;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    };
    LinkedList.prototype.pop = function () {
        var _a;
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        var current = this.first;
        while (((_a = current.next) === null || _a === void 0 ? void 0 : _a.next) != null) {
            current = current.next;
        }
        if (current.next === null) {
            this.first = null;
        }
        var result = current.next;
        current.next = null;
        this.length--;
        return result === null || result === void 0 ? void 0 : result.value;
    };
    LinkedList.prototype.unshift = function (value) {
        var newNode = new one_way_node_1.LinkedListNode(value);
        this.length++;
        if (this.first === null) {
            this.first = newNode;
            return;
        }
        var currentFirst = this.first;
        this.first = newNode;
        this.first.next = currentFirst;
    };
    LinkedList.prototype.shift = function () {
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        var currentFirst = this.first;
        this.first = currentFirst.next;
        this.length--;
        return currentFirst.value;
    };
    LinkedList.prototype.clean = function () {
        this.first = null;
        this.length = 0;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index >= this.length) {
            throw new Error('Index out of range');
        }
        var element = this.first;
        for (var i = 1; i < index - 1; i++) {
            element = element === null || element === void 0 ? void 0 : element.next;
        }
        if (element) {
            var nextElement = element === null || element === void 0 ? void 0 : element.next;
            element.next = new one_way_node_1.LinkedListNode(value, { next: nextElement });
        }
    };
    LinkedList.prototype.find = function (cb) {
        var _a;
        var current = this.first;
        for (var i = 0; i < this.length; i++) {
            if (current && cb(current.value, i)) {
                return current.value;
            }
            else {
                current = (_a = current === null || current === void 0 ? void 0 : current.next) !== null && _a !== void 0 ? _a : null;
            }
        }
        return null;
    };
    LinkedList.prototype.findIndex = function (value) {
        var _a;
        var current = this.first;
        for (var i = 0; i < this.length; i++) {
            if (current && current.value === value) {
                return i;
            }
            current = (_a = current === null || current === void 0 ? void 0 : current.next) !== null && _a !== void 0 ? _a : null;
        }
        return -1;
    };
    LinkedList.prototype.items = function () {
        var _a;
        var currentNode = this.first;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                var data = {
                    done: currentNode === null,
                    value: currentNode !== null && currentNode !== void 0 ? currentNode : undefined
                };
                if (currentNode !== null) {
                    currentNode = currentNode.next;
                }
                return data;
            },
            _a;
    };
    LinkedList.prototype.values = function () {
        var _a;
        var currentNode = this.first;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                var _a;
                var data = {
                    done: currentNode === null,
                    value: (_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.value) !== null && _a !== void 0 ? _a : undefined
                };
                if (currentNode !== null) {
                    currentNode = currentNode.next;
                }
                return data;
            },
            _a;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
