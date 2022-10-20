import { LinkedListNode } from './one-way-node';

describe('One way node implementation', () => {
    it('Create node with params', function () {
        const nodeWithoutConfig = new LinkedListNode(5);
        expect(nodeWithoutConfig.value).toBe(5);
        expect(nodeWithoutConfig.next).toBe(null);

        const nodeWithConfig = new LinkedListNode(5, {
            next: new LinkedListNode(7),
        });
        expect(nodeWithConfig.next).toBeInstanceOf(LinkedListNode);
        expect(nodeWithConfig.next?.value).toBe(7);
    });
});
