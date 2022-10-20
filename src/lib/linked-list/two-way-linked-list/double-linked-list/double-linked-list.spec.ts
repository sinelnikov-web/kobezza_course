import { DoubleLinkedList } from './double-linked-list';

describe('Two way double linked list implementation', () => {
    it('Push items into list', () => {
        let list = new DoubleLinkedList<number>();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.first?.value).toBe(1);
        expect(list.last?.value).toBe(3);
        expect(list.last?.prev?.value).toBe(2);
        expect(list.first?.next?.next?.value).toBe(3);
    });

    it('Pop items from list', () => {
        let list = new DoubleLinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.first?.next?.next?.value).toBe(3);
        expect(list.last?.value).toBe(3);
        expect(list.last?.prev?.value).toBe(2);
        expect(list.pop()).toBe(3);
        expect(list.last?.value).toBe(2);
        expect(list.last?.next).toBe(null);
        list.pop();
        list.pop();
        expect(() => list.pop()).toThrow('List is empty!');
    });

    it('Unshift items into list', () => {
        let list = new DoubleLinkedList<number>();
        expect(list.first).toBe(null);
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.first?.value).toBe(3);
        expect(list.last?.value).toBe(1);
        expect(list.last?.prev?.value).toBe(2);
        expect(list.first?.next?.next?.value).toBe(1);
    });

    it('Shift items from list', () => {
        let list = new DoubleLinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.last?.value).toBe(3);
        expect(list.shift()).toBe(1);
        expect(list.first?.next?.next).toBe(null);
        list.shift();
        list.shift();
        expect(() => list.shift()).toThrow('List is empty!');
    });

    it('Insert item by index', () => {
        let list = new DoubleLinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        list.insert(1, 5);

        expect(list.first?.next?.value).toBe(5);
        expect(list.last?.prev?.prev?.value).toBe(5);
        expect(() => list.insert(9, 3)).toThrow('Index out of range');
    });

    it('Find item by callback', () => {
        let list = new DoubleLinkedList<{ id: number; value: string }>();
        list.push({ id: 1, value: 'first' });
        list.push({ id: 2, value: 'second' });
        list.push({ id: 3, value: 'third' });
        expect(list.find((value) => value.id === 2)?.value).toBe('second');
        expect(list.find((value) => value.id === 5)).toBe(null);
    });

    it('Find item index by value', () => {
        let list = new DoubleLinkedList<number>();
        list.push(7);
        list.push(3);
        list.push(2);
        list.push(4);
        expect(list.findIndex(7)).toBe(0);
        expect(list.findIndex(2)).toBe(2);
        expect(list.findIndex(9)).toBe(-1);
    });

    it('Clean list', () => {
        let list = new DoubleLinkedList<number>();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        list.clean();
        expect(list.first).toBe(null);
    });

    it('Get items iterable iterator', () => {
        let list = new DoubleLinkedList<number>();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        const items = list.items();
        const next = items.next();
        expect(next.done).toBe(false);
        expect(next.value.value).toBe(1);
        expect(items.next().value.value).toBe(2);
        items.next();
        expect(items.next().done).toBe(true);
    });

    it('Get value iterable iterator', () => {
        let list = new DoubleLinkedList<number>();
        expect(list.first).toBe(null);
        list.push(1);
        list.push(2);
        list.push(3);
        const items = list.values();
        const next = items.next();
        expect(next.done).toBe(false);
        expect(next.value).toBe(1);
        expect(items.next().value).toBe(2);
        items.next();
        expect(items.next().done).toBe(true);
    });
});
