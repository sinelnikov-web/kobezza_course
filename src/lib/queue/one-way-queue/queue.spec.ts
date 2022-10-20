import { Queue } from './queue';

describe('queue implementation', () => {
    it('queue push values', () => {
        const queue = new Queue();
        expect(queue.head).toBe(null);
        queue.push(1);
        expect(queue.head).toBe(1);
        queue.push(2);
        expect(queue.head).toBe(1);
        queue.push(3);
        expect(queue.head).toBe(1);
    });

    it('queue pop values', () => {
        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).toBe(1);
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
        expect(() => queue.pop()).toThrow('queue is empty!');
    });
});
