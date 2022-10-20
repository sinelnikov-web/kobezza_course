"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DoubleLinkedList = void 0;
var two_way_node_1 = require("../../linked-list-node/two-way-node/two-way-node");
var linked_list_1 = require("../linked-list/linked-list");
var DoubleLinkedList = /** @class */ (function (_super) {
    __extends(DoubleLinkedList, _super);
    function DoubleLinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.first = null;
        _this.last = null;
        _this.length = 0;
        return _this;
    }
    DoubleLinkedList.prototype.push = function (value) {
        var newNode = new two_way_node_1.LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = this.first;
            return;
        }
        this.last.next = newNode;
        newNode.prev = this.last;
        if (this.first.next === null) {
            this.first.next = this.last;
        }
        this.last = this.last.next;
    };
    DoubleLinkedList.prototype.pop = function () {
        if (this.first === null || this.last === null) {
            throw new Error('List is empty!');
        }
        var currentLast = this.last;
        if (this.last === this.first) {
            this.first = null;
        }
        this.last = currentLast.prev;
        if (this.last) {
            this.last.next = null;
        }
        this.length--;
        return currentLast.value;
    };
    DoubleLinkedList.prototype.unshift = function (value) {
        var newNode = new two_way_node_1.LinkedListTwoWayNode(value);
        this.length++;
        if (this.first === null || this.last === null) {
            this.first = newNode;
            this.last = newNode;
            return;
        }
        var currentFirst = this.first;
        currentFirst.prev = newNode;
        this.first = newNode;
        this.first.next = currentFirst;
    };
    DoubleLinkedList.prototype.shift = function () {
        if (this.first === null) {
            throw new Error('List is empty!');
        }
        var currentFirst = this.first;
        this.first = currentFirst.next;
        if (this.first) {
            this.first.prev = null;
        }
        else {
            this.last = null;
        }
        this.length--;
        return currentFirst.value;
    };
    DoubleLinkedList.prototype.clean = function () {
        this.first = null;
        this.last = null;
        this.length = 0;
    };
    return DoubleLinkedList;
}(linked_list_1.LinkedList));
exports.DoubleLinkedList = DoubleLinkedList;
