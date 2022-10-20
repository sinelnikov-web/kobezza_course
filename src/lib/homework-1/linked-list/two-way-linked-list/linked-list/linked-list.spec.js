"use strict";
exports.__esModule = true;
var linked_list_1 = require("./linked-list");
describe('Two way linked list implementation', function () {
    it('Push items into list', function () {
        var _a, _b, _c, _d, _e;
        var list = new linked_list_1.LinkedList();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        expect((_a = list.first) === null || _a === void 0 ? void 0 : _a.value).toBe(1);
        expect((_e = (_d = (_c = (_b = list.first) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.prev) === null || _e === void 0 ? void 0 : _e.value).toBe(2);
    });
    it('Pop items from list', function () {
        var _a, _b, _c, _d, _e, _f;
        var list = new linked_list_1.LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        expect((_c = (_b = (_a = list.first) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.value).toBe(3);
        expect(list.pop()).toBe(3);
        expect((_f = (_e = (_d = list.first) === null || _d === void 0 ? void 0 : _d.next) === null || _e === void 0 ? void 0 : _e.prev) === null || _f === void 0 ? void 0 : _f.value).toBe(1);
        list.pop();
        list.pop();
        expect(function () { return list.pop(); }).toThrow('List is empty!');
    });
    it('Unshift items into list', function () {
        var _a, _b, _c, _d;
        var list = new linked_list_1.LinkedList();
        expect(list.first).toBe(null);
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect((_a = list.first) === null || _a === void 0 ? void 0 : _a.value).toBe(3);
        expect((_d = (_c = (_b = list.first) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.prev) === null || _d === void 0 ? void 0 : _d.value).toBe(3);
    });
    it('Shift items from list', function () {
        var _a, _b, _c, _d, _e;
        var list = new linked_list_1.LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        expect((_c = (_b = (_a = list.first) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.prev) === null || _c === void 0 ? void 0 : _c.value).toBe(1);
        expect(list.shift()).toBe(1);
        expect((_e = (_d = list.first) === null || _d === void 0 ? void 0 : _d.next) === null || _e === void 0 ? void 0 : _e.next).toBe(null);
        list.shift();
        list.shift();
        expect(function () { return list.shift(); }).toThrow('List is empty!');
    });
    it('Insert item by index', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var list = new linked_list_1.LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);
        list.insert(1, 5);
        expect((_b = (_a = list.first) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.value).toBe(5);
        expect((_e = (_d = (_c = list.first) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.prev) === null || _e === void 0 ? void 0 : _e.value).toBe(1);
        expect((_j = (_h = (_g = (_f = list.first) === null || _f === void 0 ? void 0 : _f.next) === null || _g === void 0 ? void 0 : _g.next) === null || _h === void 0 ? void 0 : _h.prev) === null || _j === void 0 ? void 0 : _j.value).toBe(5);
        expect(function () { return list.insert(9, 3); }).toThrow('Index out of range');
    });
    it('Find item by callback', function () {
        var _a;
        var list = new linked_list_1.LinkedList();
        list.push({ id: 1, value: 'first' });
        list.push({ id: 2, value: 'second' });
        list.push({ id: 3, value: 'third' });
        expect((_a = list.find(function (value) { return value.id === 2; })) === null || _a === void 0 ? void 0 : _a.value).toBe('second');
        expect(list.find(function (value) { return value.id === 5; })).toBe(null);
    });
    it('Find item index by value', function () {
        var list = new linked_list_1.LinkedList();
        list.push(7);
        list.push(3);
        list.push(2);
        list.push(4);
        expect(list.findIndex(7)).toBe(0);
        expect(list.findIndex(2)).toBe(2);
        expect(list.findIndex(9)).toBe(-1);
    });
    it('Clean list', function () {
        var list = new linked_list_1.LinkedList();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        list.clean();
        expect(list.first).toBe(null);
    });
    it('Get items iterable iterator', function () {
        var list = new linked_list_1.LinkedList();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        var items = list.items();
        var next = items.next();
        expect(next.done).toBe(false);
        expect(next.value.value).toBe(1);
        expect(items.next().value.value).toBe(2);
        items.next();
        expect(items.next().done).toBe(true);
    });
    it('Get value iterable iterator', function () {
        var list = new linked_list_1.LinkedList();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        var items = list.values();
        var next = items.next();
        expect(next.done).toBe(false);
        expect(next.value).toBe(1);
        expect(items.next().value).toBe(2);
        items.next();
        expect(items.next().done).toBe(true);
    });
});
