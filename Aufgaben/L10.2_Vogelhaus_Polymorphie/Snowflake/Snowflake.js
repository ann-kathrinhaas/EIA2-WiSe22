"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Snowflake extends L10_Vogelhaus_Polymorphie.Moveable {
        position = new L10_Vogelhaus_Polymorphie.Vector2(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        r1 = Math.round((Math.random() * 4) + 1);
        r2 = Math.round((Math.random() * 6) + 4);
        gradient = L10_Vogelhaus_Polymorphie.crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        velocityRandom = (Math.random() * 3) + 1;
        velocity = new L10_Vogelhaus_Polymorphie.Vector2(this.velocityRandom, this.velocityRandom);
        constructor() {
            super();
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }
        draw() {
            L10_Vogelhaus_Polymorphie.crc2.save();
            L10_Vogelhaus_Polymorphie.crc2.beginPath();
            L10_Vogelhaus_Polymorphie.crc2.arc(this.position.x, this.position.y, this.r2, 0, 2 * Math.PI);
            L10_Vogelhaus_Polymorphie.crc2.translate(this.position.x, this.position.y);
            L10_Vogelhaus_Polymorphie.crc2.fillStyle = this.gradient;
            L10_Vogelhaus_Polymorphie.crc2.fill();
            L10_Vogelhaus_Polymorphie.crc2.closePath();
            L10_Vogelhaus_Polymorphie.crc2.restore();
        }
        move() {
            super.move();
        }
    }
    L10_Vogelhaus_Polymorphie.Snowflake = Snowflake;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Snowflake.js.map