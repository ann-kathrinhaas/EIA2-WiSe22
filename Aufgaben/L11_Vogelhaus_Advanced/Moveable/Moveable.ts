namespace L11_Vogelhaus_Advanced {
    export abstract class Moveable {
        public position: Vector2;
        public velocity: Vector2;
        public velocityRandom: number;
        protected direction: DIRECTION;

        
        constructor(_position: Vector2) {
            this.position = _position;
        }

        public abstract draw(): void;

        public move(): void {
            switch (this.direction) {
                case DIRECTION.RIGHT:
                    this.position.x += this.velocity.x;
                    if (this.position.x > crc2.canvas.width)
                    this.position.x -= crc2.canvas.width;
                    break;
                case DIRECTION.LEFT:
                    this.position.x -= this.velocity.x;
                    if (this.position.x < 0)
                    this.position.x += crc2.canvas.width;
                    break;
                case DIRECTION.DOWN:
                    this.position.y += this.velocity.y;
                    if (this.position.y > crc2.canvas.height)
                    this.position.y -= crc2.canvas.height;
                    break;
                }
            }
        }
}