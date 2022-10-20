"use strict";
exports.__esModule = true;
exports.LinkedListTwoWayNode = void 0;
var LinkedListTwoWayNode = /** @class */ (function () {
    function LinkedListTwoWayNode(value, config) {
        var _a, _b;
        this.next = null;
        this.prev = null;
        this.value = value;
        if (config) {
            this.next = (_a = config.next) !== null && _a !== void 0 ? _a : null;
            this.prev = (_b = config.prev) !== null && _b !== void 0 ? _b : null;
        }
    }
    return LinkedListTwoWayNode;
}());
exports.LinkedListTwoWayNode = LinkedListTwoWayNode;
