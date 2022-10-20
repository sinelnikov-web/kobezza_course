import { DynamicVectorArray } from './dynamic-vector-array';

describe('Dynamic array based on vector implementation', () => {
    it('Push / get values', () => {
        const array = new DynamicVectorArray();
        expect(() => array.get(5)).toThrow('Index out of range!');
        array.add(5);
        expect(array.get(0)).toBe(5);
        array.add(3);
        expect(array.get(1)).toBe(3);
        array.add(1);
        expect(array.get(2)).toBe(1);
        array.add(4);
        expect(array.get(3)).toBe(4);
    });
});
