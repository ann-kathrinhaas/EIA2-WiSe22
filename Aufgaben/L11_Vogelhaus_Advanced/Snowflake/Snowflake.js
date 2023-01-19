"use strict";
var L11_Vogelhaus_Advanced;
(function (L11_Vogelhaus_Advanced) {
    class Snowflake extends L11_Vogelhaus_Advanced.Moveable {
        position = new L11_Vogelhaus_Advanced.Vector2(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        velocityRandom = (Math.random() * 3) + 1;
        velocity = new L11_Vogelhaus_Advanced.Vector2(this.velocityRandom, this.velocityRandom);
        direction = L11_Vogelhaus_Advanced.DIRECTION.DOWN;
        r1 = Math.round((Math.random() * 4) + 1);
        r2 = Math.round((Math.random() * 6) + 4);
        gradient = L11_Vogelhaus_Advanced.crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        constructor() {
            super();
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }
        draw() {
            L11_Vogelhaus_Advanced.crc2.save();
            L11_Vogelhaus_Advanced.crc2.beginPath();
            L11_Vogelhaus_Advanced.crc2.arc(this.position.x, this.position.y, this.r2, 0, 2 * Math.PI);
            L11_Vogelhaus_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_Vogelhaus_Advanced.crc2.fillStyle = this.gradient;
            L11_Vogelhaus_Advanced.crc2.fill();
            L11_Vogelhaus_Advanced.crc2.closePath();
            L11_Vogelhaus_Advanced.crc2.restore();
        }
        move() {
            super.move();
        }
    }
    L11_Vogelhaus_Advanced.Snowflake = Snowflake;
})(L11_Vogelhaus_Advanced || (L11_Vogelhaus_Advanced = {}));
//# sourceMappingURL=Snowflake.js.map