namespace L10_Vogelhaus_Polymorphie {
    export class Moveable {
        position: Vector2;
        velocity: Vector2;
        velocityRandom: number;

        draw(): void {
            //
        }

        move(): void {
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
    }
}