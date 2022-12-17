namespace L09_Vogelhaus_Classes {
    export class Bird2Left {
        position: Vector2 = new Vector2(Math.round((Math.random() * 500) + 220), Math.round(Math.random() * 500) + 450);
        x: number = Math.round((Math.random() * 500) + 220);
        y: number = Math.round((Math.random() * 500) + 450);
        randomColor: number = Math.round(Math.random() * 2);
        colorWing: string;
        colorBody: string;
        colorHead: string;

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

            this.drawEllipse(0, -5, 15, 15, 0, 0.4, 1, this.colorBody); // Körper
            this.drawEllipse(-2, -2, 7, 8, -0.4, 0, 1, this.colorWing);  // Flügel
            this.drawArc(-12, -12, 9, 0, 2 * Math.PI, this.colorBody); // Kopf
            this.drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawLine(-2, 10, -2, 20, "black", 2, 1); // Fuß links
            this.drawLine(2, 10, 2, 20, "black", 2, 1); // Fuß rechts
            this.drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel

            crc2.restore();
        }

        move(_timeslice: number): void {
            this.position.x--;

            if (this.position.x > crc2.canvas.width) // wenn Vogel nach rechts rausgeht
                this.position.x -= crc2.canvas.width;
        }
    }
}