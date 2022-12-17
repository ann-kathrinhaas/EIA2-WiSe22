"use strict";
var L09_Vogelhaus_Classes;
(function (L09_Vogelhaus_Classes) {
    class Bird1Right {
        position = new L09_Vogelhaus_Classes.Vector2(Math.round((Math.random() * L09_Vogelhaus_Classes.crc2.canvas.width)), Math.round(Math.random() * L09_Vogelhaus_Classes.crc2.canvas.height) + 450);
        randomColor = Math.round(Math.random() * 2);
        colorWing;
        colorBody;
        colorHead;
        velocity = Math.random() * 2;
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
        drawTail(_x1, _y1, _x2, _y2, _x3, _y3, _x4, _y4, _x5, _y5, _x6, _y6, _x7, _y7, _color) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.moveTo(_x1, _y1);
            L09_Vogelhaus_Classes.crc2.lineTo(_x2, _y2);
            L09_Vogelhaus_Classes.crc2.lineTo(_x3, _y3);
            L09_Vogelhaus_Classes.crc2.lineTo(_x4, _y4);
            L09_Vogelhaus_Classes.crc2.lineTo(_x5, _y5);
            L09_Vogelhaus_Classes.crc2.lineTo(_x6, _y6);
            L09_Vogelhaus_Classes.crc2.lineTo(_x7, _y7);
            L09_Vogelhaus_Classes.crc2.fillStyle = _color;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
        }
        drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _color) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle * Math.PI);
            L09_Vogelhaus_Classes.crc2.fillStyle = _color;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
        }
        drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            L09_Vogelhaus_Classes.crc2.fillStyle = _color;
            L09_Vogelhaus_Classes.crc2.fill();
            L09_Vogelhaus_Classes.crc2.closePath();
        }
        drawLine(_x1, _y1, _x2, _y2, _color, _lineWidth, _lineCap) {
            L09_Vogelhaus_Classes.crc2.beginPath();
            L09_Vogelhaus_Classes.crc2.moveTo(_x1, _y1);
            L09_Vogelhaus_Classes.crc2.lineTo(_x2, _y2);
            L09_Vogelhaus_Classes.crc2.strokeStyle = _color;
            L09_Vogelhaus_Classes.crc2.lineWidth = _lineWidth;
            switch (_lineCap) {
                case 1:
                    L09_Vogelhaus_Classes.crc2.lineCap = "butt";
                    break;
                case 2:
                    L09_Vogelhaus_Classes.crc2.lineCap = "round";
                    break;
            }
            L09_Vogelhaus_Classes.crc2.stroke();
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
            this.drawTail(-13, 3, -20, 8, -18, 3, -20, 0, -18, -3, -20, -8, -13, -3, this.colorWing); // Schwanzfedern
            this.drawEllipse(0, 0, 15, 10, 0, 0, 2, this.colorBody); // Körper
            this.drawEllipse(-4, -2, 8, 10, -0.5, 0, 1, this.colorWing); // Flügel
            this.drawArc(12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
            this.drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
            this.drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
            L09_Vogelhaus_Classes.crc2.restore();
        }
        move(_timeslice) {
            this.position.x += this.velocity;
            if (this.position.x > L09_Vogelhaus_Classes.crc2.canvas.width)
                this.position.x -= L09_Vogelhaus_Classes.crc2.canvas.width;
        }
    }
    L09_Vogelhaus_Classes.Bird1Right = Bird1Right;
})(L09_Vogelhaus_Classes || (L09_Vogelhaus_Classes = {}));
//# sourceMappingURL=Bird1Right.js.map