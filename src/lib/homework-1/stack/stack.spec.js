"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
describe('Stack implementation', function () {
    it('Stack push values', function () {
        var stack = new stack_1.Stack();
        stack.push(5);
        expect(stack.head).toBe(5);
        stack.push(3);
        expect(stack.head).toBe(3);
        stack.push(9);
        expect(stack.head).toBe(9);
    });
    it('Pop items from stack', function () {
        var stack = new stack_1.Stack();
        stack.push(5);
        stack.push(3);
        stack.push(9);
        expect(stack.pop()).toBe(9);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(function () { return stack.pop(); }).toThrow('Stack is empty!');
    });
    it('Create stack with custom size', function () {
        var stack = new stack_1.Stack(2);
        stack.push(5);
        stack.push(3);
        expect(function () { return stack.push(5); }).toThrow('Stack is full!');
    });
});
