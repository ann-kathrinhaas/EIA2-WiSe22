"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Moveable {
        position;
        velocity;
        velocityRandom;
        direction;
        draw() {
            //
        }
        move() {
            switch (this.direction) {
                case "right":
                    this.position.x += this.velocity.x;
                    if (this.position.x > L10_Vogelhaus_Polymorphie.crc2.canvas.width)
                        this.position.x -= L10_Vogelhaus_Polymorphie.crc2.canvas.width;
                    break;
                case "left":
                    this.position.x -= this.velocity.x;
                    if (this.position.x < 0)
                        this.position.x += L10_Vogelhaus_Polymorphie.crc2.canvas.width;
                    break;
            }
        }
    }
    L10_Vogelhaus_Polymorphie.Moveable = Moveable;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Moveable.js.map