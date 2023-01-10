namespace L09_Vogelhaus_Classes {
    export class Snowflake {
        position: Vector2 = new Vector2(Math.round(Math.random() * innerWidth), Math.round(Math.random() * innerHeight));
        r1: number = Math.round((Math.random() * 4) + 1);
        r2: number = Math.round((Math.random() * 6) + 4);
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        velocity: number = (Math.random() * 3) + 1;

        constructor() {
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.r2, 0, 2 * Math.PI);
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.gradient;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        move(): void {
            this.position.y += this.velocity;
            this.position.x += this.velocity;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
}}