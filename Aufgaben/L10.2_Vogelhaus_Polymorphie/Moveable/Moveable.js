"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Moveable {
        position;
        velocity;
        velocityRandom;
        draw() {
            //
        }
        move() {
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            if (this.position.y > L10_Vogelhaus_Polymorphie.crc2.canvas.height)
                this.position.y -= L10_Vogelhaus_Polymorphie.crc2.canvas.height;
            if (this.position.x > L10_Vogelhaus_Polymorphie.crc2.canvas.width)
                this.position.x -= L10_Vogelhaus_Polymorphie.crc2.canvas.width;
        }
    }
    L10_Vogelhaus_Polymorphie.Moveable = Moveable;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Moveable.js.map