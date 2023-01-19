"use strict";
var L11_Vogelhaus_Advanced;
(function (L11_Vogelhaus_Advanced) {
    class FylingBirdRight extends L11_Vogelhaus_Advanced.Moveable {
        position = new L11_Vogelhaus_Advanced.Vector2(Math.round((Math.random() * 700) + 50), Math.round((Math.random() * 200) + 50));
        velocityRandom = (Math.random() * 4) + 1.5;
        velocity = new L11_Vogelhaus_Advanced.Vector2(this.velocityRandom, 0);
        direction = L11_Vogelhaus_Advanced.DIRECTION.RIGHT;
        randomColor = Math.round(Math.random() * 2);
        colorWing;
        colorBody;
        colorHead;
        constructor() {
            super();
            switch (this.randomColor) {
                case 0:
                    this.colorWing = "HSL(0, 100%, 50%)";
                    this.colorBody = "HSL(0, 80%, 40%)";
                    this.colorHead = "HSL(0, 92%, 65%)";
                    break;
                case 1:
                    this.colorWing = "HSL(240, 100%, 50%)";
                    this.colorBody = "HSL(240, 93%, 35%)";
                    this.colorHead = "HSL(240, 82%, 63%)";
                    break;
                case 2:
                    this.colorWing = "HSL(350, 87%, 69%)";
                    this.colorBody = "HSL(350, 93%, 60%)";
                    this.colorHead = "HSL(350, 100%, 88%)";
                    break;
            }
            this.draw();
        }
        draw() {
            L11_Vogelhaus_Advanced.crc2.save();
            L11_Vogelhaus_Advanced.crc2.translate(this.position.x, this.position.y);
            this.drawArc(0, 0, 11, 0, 2 * Math.PI, this.colorBody); // Körper
            this.drawTriangle(-10, 5, -18, -8, 4, -12, this.colorBody); // Körper
            this.drawTriangle(-10, -10, -10, -20, 2, -8, this.colorWing); // Flügel
            this.drawArc(-4, -7, 6, 0, 2 * Math.PI, this.colorWing); // Flügel
            this.drawArc(12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
            L11_Vogelhaus_Advanced.crc2.restore();
        }
        move() {
            super.move();
        }
        drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
            L11_Vogelhaus_Advanced.crc2.beginPath();
            L11_Vogelhaus_Advanced.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            L11_Vogelhaus_Advanced.crc2.fillStyle = _color;
            L11_Vogelhaus_Advanced.crc2.fill();
            L11_Vogelhaus_Advanced.crc2.closePath();
        }
        drawTriangle(_x1, _y1, _x2, _y2, _x3, _y3, _color) {
            L11_Vogelhaus_Advanced.crc2.beginPath();
            L11_Vogelhaus_Advanced.crc2.moveTo(_x1, _y1);
            L11_Vogelhaus_Advanced.crc2.lineTo(_x2, _y2);
            L11_Vogelhaus_Advanced.crc2.lineTo(_x3, _y3);
            L11_Vogelhaus_Advanced.crc2.fillStyle = _color;
            L11_Vogelhaus_Advanced.crc2.fill();
            L11_Vogelhaus_Advanced.crc2.closePath();
        }
    }
    L11_Vogelhaus_Advanced.FylingBirdRight = FylingBirdRight;
})(L11_Vogelhaus_Advanced || (L11_Vogelhaus_Advanced = {}));
//# sourceMappingURL=FlyingBirdRight.js.map