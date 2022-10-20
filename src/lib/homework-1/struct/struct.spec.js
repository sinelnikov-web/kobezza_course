"use strict";
exports.__esModule = true;
var struct_1 = require("./struct");
describe('Struct implementation', function () {
    it('Struct set/get values', function () {
        var struct = new struct_1.Struct(['name', 'age', 'isAdmin']);
        expect(struct.get('name')).toBe(undefined);
        struct.set('name', 'Maxim');
        struct.set('age', 20);
        struct.set('isAdmin', true);
        expect(struct.get('name')).toBe('Maxim');
        expect(struct.get('age')).toBe(20);
        expect(struct.get('isAdmin')).toBe(true);
        struct.set('age', 25);
        expect(struct.get('age')).toBe(25);
        expect(function () { return struct.get('unknown'); }).toThrow("Key doesn't exist!");
    });
});
