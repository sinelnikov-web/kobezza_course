import { Stack } from './stack';

describe('Stack implementation', () => {
    it('Stack push values', () => {
        const stack = new Stack<number>();
        stack.push(5);
        expect(stack.head).toBe(5);
        stack.push(3);
        expect(stack.head).toBe(3);
        stack.push(9);
        expect(stack.head).toBe(9);
    });

    it('Pop items from stack', () => {
        const stack = new Stack<number>();
        stack.push(5);
        stack.push(3);
        stack.push(9);

        expect(stack.pop()).toBe(9);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(() => stack.pop()).toThrow('Stack is empty!');
    });

    it('Create stack with custom size', () => {
        const stack = new Stack(2);
        stack.push(5);
        stack.push(3);
        expect(() => stack.push(5)).toThrow('Stack is full!');
    });
});
