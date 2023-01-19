"use strict";
var L11_Vogelhaus_Advanced;
(function (L11_Vogelhaus_Advanced) {
    class Vector2 {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector2(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getRandom(_minLength, _maxLength) {
            let vector = new Vector2(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector2(this.x, this.y);
        }
    }
    L11_Vogelhaus_Advanced.Vector2 = Vector2;
})(L11_Vogelhaus_Advanced || (L11_Vogelhaus_Advanced = {}));
//# sourceMappingURL=Vector2.js.map