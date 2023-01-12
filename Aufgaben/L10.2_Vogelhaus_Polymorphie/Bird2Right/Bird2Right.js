"use strict";
var L10_Vogelhaus_Polymorphie;
(function (L10_Vogelhaus_Polymorphie) {
    class Bird2Right extends L10_Vogelhaus_Polymorphie.Moveable {
        position = new L10_Vogelhaus_Polymorphie.Vector2(Math.round((Math.random() * L10_Vogelhaus_Polymorphie.crc2.canvas.width)), Math.round(Math.random() * L10_Vogelhaus_Polymorphie.crc2.canvas.height) + 450);
        x = Math.round((Math.random() * 500) + 220);
        y = Math.round((Math.random() * 500) + 450);
        randomColor = Math.round(Math.random() * 2);
        colorWing;
        colorBody;
        colorHead;
        velocityRandom = Math.random() * 2;
        velocity = new L10_Vogelhaus_Polymorphie.Vector2(this.velocityRandom, 0);
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
        drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _color) {
            L10_Vogelhaus_Polymorphie.crc2.beginPath();
            L10_Vogelhaus_Polymorphie.crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle * Math.PI);
            L10_Vogelhaus_Polymorphie.crc2.fillStyle = _color;
            L10_Vogelhaus_Polymorphie.crc2.fill();
            L10_Vogelhaus_Polymorphie.crc2.closePath();
        }
        drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
            L10_Vogelhaus_Polymorphie.crc2.beginPath();
            L10_Vogelhaus_Polymorphie.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            L10_Vogelhaus_Polymorphie.crc2.fillStyle = _color;
            L10_Vogelhaus_Polymorphie.crc2.fill();
            L10_Vogelhaus_Polymorphie.crc2.closePath();
        }
        drawLine(_x1, _y1, _x2, _y2, _color, _lineWidth, _lineCap) {
            L10_Vogelhaus_Polymorphie.crc2.beginPath();
            L10_Vogelhaus_Polymorphie.crc2.moveTo(_x1, _y1);
            L10_Vogelhaus_Polymorphie.crc2.lineTo(_x2, _y2);
            L10_Vogelhaus_Polymorphie.crc2.strokeStyle = _color;
            L10_Vogelhaus_Polymorphie.crc2.lineWidth = _lineWidth;
            switch (_lineCap) {
                case 1:
                    L10_Vogelhaus_Polymorphie.crc2.lineCap = "butt";
                    break;
                case 2:
                    L10_Vogelhaus_Polymorphie.crc2.lineCap = "round";
                    break;
            }
            L10_Vogelhaus_Polymorphie.crc2.stroke();
            L10_Vogelhaus_Polymorphie.crc2.closePath();
        }
        drawTriangle(_x1, _y1, _x2, _y2, _x3, _y3, _color) {
            L10_Vogelhaus_Polymorphie.crc2.beginPath();
            L10_Vogelhaus_Polymorphie.crc2.moveTo(_x1, _y1);
            L10_Vogelhaus_Polymorphie.crc2.lineTo(_x2, _y2);
            L10_Vogelhaus_Polymorphie.crc2.lineTo(_x3, _y3);
            L10_Vogelhaus_Polymorphie.crc2.fillStyle = _color;
            L10_Vogelhaus_Polymorphie.crc2.fill();
            L10_Vogelhaus_Polymorphie.crc2.closePath();
        }
        draw() {
            L10_Vogelhaus_Polymorphie.crc2.save();
            L10_Vogelhaus_Polymorphie.crc2.translate(this.position.x, this.position.y);
            this.drawEllipse(0, -5, 15, 15, -0.4, 0, 1, this.colorBody); // Körper
            this.drawEllipse(-2, -2, 7, 8, -0.4, 0, 1, this.colorWing); // Flügel
            this.drawArc(12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
            this.drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
            this.drawTriangle(20, -15, 20, -9, 28, -12, "HSL(27, 82%, 51%)"); // Schnabel
            L10_Vogelhaus_Polymorphie.crc2.restore();
        }
        move() {
            this.position.x += this.velocity.x;
            if (this.position.x > L10_Vogelhaus_Polymorphie.crc2.canvas.width)
                this.position.x -= L10_Vogelhaus_Polymorphie.crc2.canvas.width;
        }
    }
    L10_Vogelhaus_Polymorphie.Bird2Right = Bird2Right;
})(L10_Vogelhaus_Polymorphie || (L10_Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=Bird2Right.js.map