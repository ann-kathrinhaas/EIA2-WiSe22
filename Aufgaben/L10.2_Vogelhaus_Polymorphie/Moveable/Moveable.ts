namespace L10_Vogelhaus_Polymorphie {
    export class Moveable {
        position: Vector2;
        velocity: Vector2;
        velocityRandom: number;
        direction: string;

        draw(): void {
            //
        }

        move(): void {
            switch (this.direction) {
                case "right":
                    this.position.x += this.velocity.x;
                    if (this.position.x > crc2.canvas.width)
                    this.position.x -= crc2.canvas.width;
                    break;
                case "left":
                    this.position.x -= this.velocity.x;
                    if (this.position.x < 0)
                    this.position.x += crc2.canvas.width;
                    break;
                }
            }
        }
}