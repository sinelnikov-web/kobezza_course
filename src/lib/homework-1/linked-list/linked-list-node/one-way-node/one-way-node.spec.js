"use strict";
exports.__esModule = true;
var one_way_node_1 = require("./one-way-node");
describe('One way node implementation', function () {
    it('Create node with params', function () {
        var _a;
        var nodeWithoutConfig = new one_way_node_1.LinkedListNode(5);
        expect(nodeWithoutConfig.value).toBe(5);
        expect(nodeWithoutConfig.next).toBe(null);
        var nodeWithConfig = new one_way_node_1.LinkedListNode(5, {
            next: new one_way_node_1.LinkedListNode(7)
        });
        expect(nodeWithConfig.next).toBeInstanceOf(one_way_node_1.LinkedListNode);
        expect((_a = nodeWithConfig.next) === null || _a === void 0 ? void 0 : _a.value).toBe(7);
    });
});
