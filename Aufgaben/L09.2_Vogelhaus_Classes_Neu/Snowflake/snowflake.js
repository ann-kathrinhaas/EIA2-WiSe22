"use strict";
var L09_Vogelhaus_Classes;
(function (L09_Vogelhaus_Classes) {
    class Snowflake {
        r1 = Math.round((Math.random() * 4) + 1);
        r2 = Math.round((Math.random() * 6) + 4);
        gradient = L09_Vogelhaus_Classes.crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        x = Math.round(Math.random() * innerWidth);
        y = Math.round(Math.random() * innerHeight);
        constructor() {
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }
        draw() {
            L09_Vogelhaus_Classes.crc2.save();
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
            L09_Vogelhaus_Classes.crc2.translate(this.x, this.y);
            L09_Vogelhaus_Classes.crc2.fillStyle = this.gradient;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
            L09_Vogelhaus_Classes.crc2.restore();
        }
        move(_timeslice) {
            this.y++;
            if (this.y > L09_Vogelhaus_Classes.crc2.canvas.height)
                this.y -= L09_Vogelhaus_Classes.crc2.canvas.height;
        }
    }
    L09_Vogelhaus_Classes.Snowflake = Snowflake;
})(L09_Vogelhaus_Classes || (L09_Vogelhaus_Classes = {}));
//# sourceMappingURL=Snowflake.js.map