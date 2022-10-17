import { LinkedListTwoWayNode } from './two-way-node';

describe('One way node implementation', () => {
    it('Create node with params', function () {
        const nodeWithoutConfig = new LinkedListTwoWayNode(5);
        expect(nodeWithoutConfig.value).toBe(5);
        expect(nodeWithoutConfig.next).toBe(null);
        expect(nodeWithoutConfig.prev).toBe(null);
        const nodeWithConfig = new LinkedListTwoWayNode(5, {
            next: new LinkedListTwoWayNode(7),
            prev: nodeWithoutConfig,
        });
        nodeWithoutConfig.next = nodeWithConfig;
        expect(nodeWithConfig.next).toBeInstanceOf(LinkedListTwoWayNode);
        expect(nodeWithConfig.next?.value).toBe(7);
        expect(nodeWithConfig.prev?.value).toBe(5);
        expect(nodeWithConfig.prev).toEqual(nodeWithoutConfig);
    });
});
