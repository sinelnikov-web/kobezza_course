"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Struct_fn, _Struct_values;
exports.__esModule = true;
exports.Struct = void 0;
var Struct = /** @class */ (function () {
    function Struct(values) {
        _Struct_fn.set(this, void 0);
        _Struct_values.set(this, void 0);
        __classPrivateFieldSet(this, _Struct_fn, Struct.generateKeyFunction(values), "f");
        __classPrivateFieldSet(this, _Struct_values, new Array(values.length), "f");
    }
    Struct.prototype.get = function (key) {
        var value = __classPrivateFieldGet(this, _Struct_values, "f")[__classPrivateFieldGet(this, _Struct_fn, "f").call(this, key)];
        return value;
    };
    Struct.prototype.set = function (key, value) {
        __classPrivateFieldGet(this, _Struct_values, "f")[__classPrivateFieldGet(this, _Struct_fn, "f").call(this, key)] = value;
    };
    Struct.generateKeyFunction = function (props) {
        var fnBody = "switch(key) {\n            ".concat(props.map(function (key, index) { return "case \"".concat(key, "\": return ").concat(index, ";"); }).join('\n'), "\n            default: {\n                throw new Error(\"Key doesn't exist!\");\n            }\n        }");
        return Function('key', fnBody);
    };
    return Struct;
}());
exports.Struct = Struct;
_Struct_fn = new WeakMap(), _Struct_values = new WeakMap();
