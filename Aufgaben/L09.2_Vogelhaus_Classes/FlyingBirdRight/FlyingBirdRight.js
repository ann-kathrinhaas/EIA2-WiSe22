"use strict";
var L09_Vogelhaus_Classes;
(function (L09_Vogelhaus_Classes) {
    class FylingBirdRight {
        position = new L09_Vogelhaus_Classes.Vector2(Math.round((Math.random() * 700) + 50), Math.round((Math.random() * 200) + 50));
        randomColor = Math.round(Math.random() * 2);
        colorWing;
        colorBody;
        colorHead;
        velocity = (Math.random() * 4) + 1.5;
        constructor() {
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
        drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            L09_Vogelhaus_Classes.crc2.fillStyle = _color;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
        }
        drawTriangle(_x1, _y1, _x2, _y2, _x3, _y3, _color) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.moveTo(_x1, _y1);
            L09_Vogelhaus_Classes.crc2.lineTo(_x2, _y2);
            L09_Vogelhaus_Classes.crc2.lineTo(_x3, _y3);
            L09_Vogelhaus_Classes.crc2.fillStyle = _color;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
        }
        draw() {
            L09_Vogelhaus_Classes.crc2.save();
            L09_Vogelhaus_Classes.crc2.translate(this.position.x, this.position.y);
            this.drawArc(0, 0, 11, 0, 2 * Math.PI, this.colorBody); // K??rper
            this.drawTriangle(-10, 5, -18, -8, 4, -12, this.colorBody); // K??rper
            this.drawTriangle(-10, -10, -10, -20, 2, -8, this.colorWing); // Fl??gel
            this.drawArc(-4, -7, 6, 0, 2 * Math.PI, this.colorWing); // Fl??gel
            this.drawArc(12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
            L09_Vogelhaus_Classes.crc2.restore();
        }
        move() {
            this.position.x += this.velocity;
            if (this.position.x > L09_Vogelhaus_Classes.crc2.canvas.width)
                this.position.x -= L09_Vogelhaus_Classes.crc2.canvas.width;
        }
    }
    L09_Vogelhaus_Classes.FylingBirdRight = FylingBirdRight;
})(L09_Vogelhaus_Classes || (L09_Vogelhaus_Classes = {}));
//# sourceMappingURL=FlyingBirdRight.js.map