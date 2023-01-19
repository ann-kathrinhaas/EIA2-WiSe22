namespace L11_Vogelhaus_Advanced  {
    export class FlyingBirdLeft extends Moveable {
        public position: Vector2 = new Vector2(Math.round((Math.random() * 700) + 50), Math.round((Math.random() * 200) + 50));
        public velocityRandom: number = (Math.random() * 4) + 1.5;
        public velocity: Vector2 = new Vector2(this.velocityRandom, 0);
        protected direction: DIRECTION = DIRECTION.LEFT;
        private randomColor: number = Math.round(Math.random() * 2);
        private colorWing: string;
        private colorBody: string;
        private colorHead: string;

        constructor() {
            super();

            switch (this.randomColor) {
                case 0:
                    this.colorWing = "HSL(300, 76%, 72%)";
                    this.colorBody = "HSL(300, 94%, 65%)";
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

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            this.drawArc(0, 0, 11, 0, 2 * Math.PI, this.colorBody); // Körper
            this.drawTriangle(10, 5, 18, -8, -4, -12, this.colorBody); // Körper
            this.drawTriangle(10, -10, 10, -20, -2, -8, this.colorWing); // Flügel
            this.drawArc(4, -7, 6, 0, 2 * Math.PI, this.colorWing); // Flügel
            this.drawArc(-12, -12, 9, 0, 2 * Math.PI, this.colorHead); // Kopf
            this.drawArc(-14, -14, 2.5, 0, 2 * Math.PI, "white"); // Auge
            this.drawArc(-14, -14, 1, 0, 2 * Math.PI, "black"); // Auge
            this.drawTriangle(-20, -15, -20, -9, -28, -12, "HSL(27, 82%, 51%)"); // Schnabel

            crc2.restore();
        }

        public move(): void {
            console.log(this.position);
            super.move();
        }

        private drawArc(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        private drawTriangle(_x1: number, _y1: number, _x2: number, _y2: number, _x3: number, _y3: number, _color: string): void {
            crc2.beginPath();
            crc2.moveTo(_x1, _y1);
            crc2.lineTo(_x2, _y2);
            crc2.lineTo(_x3, _y3);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }
    }
}