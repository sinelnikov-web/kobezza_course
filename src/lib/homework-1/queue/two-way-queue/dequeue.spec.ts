import { Dequeue } from './dequeue';

describe('dequeue implementation', () => {
    it('dequeue push values', () => {
        const queue = new Dequeue();
        expect(queue.head).toBe(null);
        expect(queue.tail).toBe(null);
        queue.push(1);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(1);
        queue.push(2);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(2);
        queue.push(3);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(3);
    });

    it('dequeue pop values', () => {
        const queue = new Dequeue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(3);
        expect(queue.pop()).toBe(3);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(2);
        expect(queue.pop()).toBe(2);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(1);
        expect(queue.pop()).toBe(1);
        expect(() => queue.pop()).toThrow('Queue is empty!');
    });

    it('dequeue unshift values', () => {
        const queue = new Dequeue();
        queue.unshift(1);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(1);
        queue.unshift(2);
        expect(queue.head).toBe(2);
        expect(queue.tail).toBe(1);
        queue.unshift(3);
        expect(queue.head).toBe(3);
        expect(queue.tail).toBe(1);
    });

    it('dequeue shift values', () => {
        const queue = new Dequeue();
        queue.unshift(1);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(1);
        queue.unshift(2);
        expect(queue.head).toBe(2);
        expect(queue.tail).toBe(1);
        queue.unshift(3);
        expect(queue.head).toBe(3);
        expect(queue.tail).toBe(1);

        expect(queue.shift()).toBe(3);
        expect(queue.head).toBe(2);
        expect(queue.tail).toBe(1);
        expect(queue.shift()).toBe(2);
        expect(queue.head).toBe(1);
        expect(queue.tail).toBe(1);
        expect(queue.shift()).toBe(1);
        expect(() => queue.pop()).toThrow('Queue is empty!');
    });
});
