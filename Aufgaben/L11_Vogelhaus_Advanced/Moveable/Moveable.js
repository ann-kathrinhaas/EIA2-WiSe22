"use strict";
var L11_Vogelhaus_Advanced;
(function (L11_Vogelhaus_Advanced) {
    class Moveable {
        position;
        velocity;
        velocityRandom;
        direction;
        constructor(_position) {
            this.position = _position;
        }
        move() {
            switch (this.direction) {
                case L11_Vogelhaus_Advanced.DIRECTION.RIGHT:
                    this.position.x += this.velocity.x;
                    if (this.position.x > L11_Vogelhaus_Advanced.crc2.canvas.width)
                        this.position.x -= L11_Vogelhaus_Advanced.crc2.canvas.width;
                    break;
                case L11_Vogelhaus_Advanced.DIRECTION.LEFT:
                    this.position.x -= this.velocity.x;
                    if (this.position.x < 0)
                        this.position.x += L11_Vogelhaus_Advanced.crc2.canvas.width;
                    break;
                case L11_Vogelhaus_Advanced.DIRECTION.DOWN:
                    this.position.y += this.velocity.y;
                    if (this.position.y > L11_Vogelhaus_Advanced.crc2.canvas.height)
                        this.position.y -= L11_Vogelhaus_Advanced.crc2.canvas.height;
                    break;
            }
        }
    }
    L11_Vogelhaus_Advanced.Moveable = Moveable;
})(L11_Vogelhaus_Advanced || (L11_Vogelhaus_Advanced = {}));
//# sourceMappingURL=Moveable.js.map