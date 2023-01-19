namespace L11_Vogelhaus_Advanced  {
    export class Vector2 {
        public x: number;
        public y: number;

        constructor (_x: number, _y: number) {
            this.set(_x, _y);
        }

        public static getDifference(_v0: Vector2, _v1: Vector2): Vector2 {
            return new Vector2(_v0.x - _v1.x, _v0.y - _v1.y);
        }

        public static getRandom(_minLength: number, _maxLength: number): Vector2 {
            let vector: Vector2 =  new Vector2(0, 0);
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }

        public get length(): number {
            return Math.hypot(this.x, this.y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector2): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector2 {
            return new Vector2(this.x, this.y);
        }
    }
}