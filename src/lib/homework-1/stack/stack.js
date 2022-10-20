"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Stack_length;
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(size) {
        if (size === void 0) { size = 5; }
        this.head = null;
        _Stack_length.set(this, 0);
        this.stack = new Array(size);
    }
    Stack.prototype.push = function (value) {
        var _a;
        if (__classPrivateFieldGet(this, _Stack_length, "f") === this.stack.length) {
            throw new Error('Stack is full!');
        }
        this.stack[__classPrivateFieldGet(this, _Stack_length, "f")] = value;
        __classPrivateFieldSet(this, _Stack_length, (_a = __classPrivateFieldGet(this, _Stack_length, "f"), _a++, _a), "f");
        this.head = value;
    };
    Stack.prototype.pop = function () {
        var _a;
        var _b;
        if (this.head === null) {
            throw new Error('Stack is empty!');
        }
        this.head = (_a = this.stack[__classPrivateFieldGet(this, _Stack_length, "f") - 2]) !== null && _a !== void 0 ? _a : null;
        var poppedItem = this.stack[__classPrivateFieldGet(this, _Stack_length, "f") - 1];
        delete this.stack[__classPrivateFieldGet(this, _Stack_length, "f") - 1];
        __classPrivateFieldSet(this, _Stack_length, (_b = __classPrivateFieldGet(this, _Stack_length, "f"), _b--, _b), "f");
        return poppedItem;
    };
    return Stack;
}());
exports.Stack = Stack;
_Stack_length = new WeakMap();
