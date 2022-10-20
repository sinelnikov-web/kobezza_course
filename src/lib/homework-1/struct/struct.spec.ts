import { Struct } from './struct';

describe('Struct implementation', () => {
    it('Struct set/get values', () => {
        const struct = new Struct(['name', 'age', 'isAdmin']);
        expect(struct.get('name')).toBe(undefined);
        struct.set('name', 'Maxim');
        struct.set('age', 20);
        struct.set('isAdmin', true);
        expect(struct.get('name')).toBe('Maxim');
        expect(struct.get('age')).toBe(20);
        expect(struct.get('isAdmin')).toBe(true);

        struct.set('age', 25);
        expect(struct.get('age')).toBe(25);
        expect(() => struct.get('unknown')).toThrow("Key doesn't exist!");
    });
});
