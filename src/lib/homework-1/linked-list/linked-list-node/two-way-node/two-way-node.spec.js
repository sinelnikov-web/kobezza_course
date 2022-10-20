"use strict";
exports.__esModule = true;
var two_way_node_1 = require("./two-way-node");
describe('One way node implementation', function () {
    it('Create node with params', function () {
        var _a, _b;
        var nodeWithoutConfig = new two_way_node_1.LinkedListTwoWayNode(5);
        expect(nodeWithoutConfig.value).toBe(5);
        expect(nodeWithoutConfig.next).toBe(null);
        expect(nodeWithoutConfig.prev).toBe(null);
        var nodeWithConfig = new two_way_node_1.LinkedListTwoWayNode(5, {
            next: new two_way_node_1.LinkedListTwoWayNode(7),
            prev: nodeWithoutConfig
        });
        nodeWithoutConfig.next = nodeWithConfig;
        expect(nodeWithConfig.next).toBeInstanceOf(two_way_node_1.LinkedListTwoWayNode);
        expect((_a = nodeWithConfig.next) === null || _a === void 0 ? void 0 : _a.value).toBe(7);
        expect((_b = nodeWithConfig.prev) === null || _b === void 0 ? void 0 : _b.value).toBe(5);
        expect(nodeWithConfig.prev).toEqual(nodeWithoutConfig);
    });
});
