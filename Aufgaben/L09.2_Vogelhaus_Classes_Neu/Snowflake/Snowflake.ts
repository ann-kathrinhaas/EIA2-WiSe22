namespace L09_Vogelhaus_Classes {
    export class Snowflake {
        r1: number = Math.round((Math.random() * 4) + 1);
        r2: number = Math.round((Math.random() * 6) + 4);
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, this.r1, 0, 0, this.r2);
        x: number = Math.round(Math.random() * innerWidth);
        y: number = Math.round(Math.random() * innerHeight);

        constructor() {
            this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            this.draw();
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
            crc2.translate(this.x, this.y);
            crc2.fillStyle = this.gradient;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        move(_timeslice: number): void {
            this.y++;

            if (this.y > crc2.canvas.height)
                this.y -= crc2.canvas.height;
        }
}}