"use strict";
var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    class Snowflake {
        r1 = Math.round((Math.random() * 4) + 1);
        r2 = Math.round((Math.random() * 6) + 4);
        gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        x = Math.round(Math.random() * innerWidth);
        y = Math.round(Math.random() * innerHeight);
        velocity;
        constructor() {
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            //this.draw();
        }
        draw() {
            console.log("draw me");
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
            L09_Vogelhaus.crc2.translate(this.x, this.y);
            L09_Vogelhaus.crc2.fillStyle = this.gradient;
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.closePath();
            L09_Vogelhaus.crc2.restore();
        }
        move(_timeslice) {
            console.log("move");
        }
    }
    L09_Vogelhaus.Snowflake = Snowflake;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=Snowflake.js.map