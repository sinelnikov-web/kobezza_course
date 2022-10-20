"use strict";
exports.__esModule = true;
exports.DynamicArray = void 0;
var two_way_linked_list_1 = require("../../homework-1/linked-list/two-way-linked-list");
var DynamicArray = /** @class */ (function () {
    function DynamicArray(size) {
        if (size === void 0) { size = 5; }
        this.length = 0;
        this.list = new two_way_linked_list_1.DoubleLinkedList();
        this.currentArray = new Array(size);
        this.list.push(this.currentArray);
    }
    DynamicArray.prototype.add = function (value) {
        if (this.length !== 0 && this.length % this.currentArray.length === 0) {
            var newArray = new Array(this.currentArray.length);
            this.list.push(newArray);
            this.currentArray = newArray;
        }
        this.currentArray[this.length % this.currentArray.length] = value;
        this.length++;
    };
    DynamicArray.prototype.get = function (index) {
        if (index > this.length) {
            throw new Error('Index out of range!');
        }
        var steps = Math.floor(index / this.currentArray.length);
        var current = this.list.first;
        for (var i = 0; i < steps; i++) {
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return current === null || current === void 0 ? void 0 : current.value[index % this.currentArray.length];
    };
    DynamicArray.prototype[Symbol.iterator] = function () {
        var _a;
        var current = this.list.first;
        var currentIndex = 0;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                if (current === null || current.value[currentIndex] == undefined) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                var value = current.value[currentIndex];
                currentIndex++;
                if (currentIndex === current.value.length) {
                    current = current.next;
                    currentIndex = 0;
                }
                return {
                    done: false,
                    value: value
                };
            },
            _a;
    };
    return DynamicArray;
}());
exports.DynamicArray = DynamicArray;
