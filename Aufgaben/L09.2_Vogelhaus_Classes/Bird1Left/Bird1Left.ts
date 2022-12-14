namespace L09_Vogelhaus_Classes {
    export class Bird1Left {
        position: Vector2 = new Vector2(Math.round((Math.random() * crc2.canvas.width)), Math.round(Math.random() * crc2.canvas.height) + 450);
        x: number = Math.round((Math.random() * 500) + 220);
        y: number = Math.round((Math.random() * 500) + 450);
        randomColor: number = Math.round(Math.random() * 2);
        colorWing: string;
        colorBody: string;
        colorHead: string;
        velocity: number = Math.random() * 2;

        constructor() {   
            switch (this.randomColor) {
                case 0:
                    this.colorWing = "HSL(300, 76%, 72%)";
                    this.colorBody = "HSL(300, 76%, 72%)";
                    this.colorHead = "HSL(300, 58%, 79%)";
                    break;
                case 1:
                    this.colorWing = "HSL(120, 67%, 51%)";
                    this.colorBody = "HSL(120, 91%, 38%)"; 
                    this.colorHead = "HSL(120, 61%, 69%)";
                    break;
                case 2:
                    this.colorWing = "HSL(39, 84%, 59%)";
                    this.colorBody = "HSL(39, 94%, 51%)";
                    this.colorHead = "HSL(39, 82%, 68%)";
                    break;
            }
            this.draw();
        }

        drawTail(_x1: number, _y1: number, _x2: number, _y2: number, _x3: number, _y3: number, _x4: number, _y4: number, _x5: number, _y5: number, _x6: number, _y6: number, _x7: number, _y7: number, _color: string): void {
            crc2.beginPath();
            crc2.moveTo(_x1, _y1);
            crc2.lineTo(_x2, _y2);
            crc2.lineTo(_x3, _y3);
            crc2.lineTo(_x4, _y4);
            crc2.lineTo(_x5, _y5);
            crc2.lineTo(_x6, _y6);
            crc2.lineTo(_x7, _y7);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        drawEllipse(_x: number, _y: number, _radiusX: number, _radiusY: number, _rotation: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle * Math.PI);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        drawArc(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        drawLine(_x1: number, _y1: number, _x2: number, _y2: number, _color: string, _lineWidth: number, _lineCap: number): void {
            crc2.beginPath();
            crc2.moveTo(_x1, _y1);
            crc2.lineTo(_x2, _y2);
            crc2.strokeStyle = _color;
            crc2.lineWidth = _lineWidth;
            switch (_lineCap) {
                case 1:
                    crc2.lineCap = "butt";
                    break;
                case 2:
                    crc2.lineCap = "round";
                    break;
            }
            crc2.stroke();
            crc2.closePath();
        }

        drawTriangle(_x1: number, _y1: number, _x2: number, _y2: number, _x3: number, _y3: number, _color: string): void {
            crc2.beginPath();
            crc2.moveTo(_x1, _y1);
            crc2.lineTo(_x2, _y2);
            crc2.lineTo(_x3, _y3);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            this.drawTail(13, -3, 20, -8, 18, -3, 20, 0, 18, 3, 20, 8, 13, 3, this.colorWing); // Schwanzfedern
            this.drawEllipse(0, 0, 15, 10, 0, 0, 2, this.colorBody); // K??rper
            this.drawEllipse(4, -2, 8, 10, 0, 0.5, 1, this.colorWing);  // Fl??gel
            this.drawArc(-12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawLine(-2, 10, -2, 20, "black", 2, 1); // Fu?? links
            this.drawLine(2, 10, 2, 20, "black", 2, 1); // Fu?? rechts
            this.drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel

            crc2.restore();
        }

        move(): void {
            this.position.x -= this.velocity;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }
    }
}