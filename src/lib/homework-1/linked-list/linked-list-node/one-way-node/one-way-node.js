"use strict";
exports.__esModule = true;
exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, config) {
        this.next = null;
        this.value = value;
        if ((config === null || config === void 0 ? void 0 : config.next) != null) {
            this.next = config.next;
        }
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
