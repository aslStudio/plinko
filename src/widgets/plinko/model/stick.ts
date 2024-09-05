export class Stick {
    private readonly _ctx: CanvasRenderingContext2D | undefined;
    private readonly _id: string;
    private readonly _x: number;
    private readonly _y: number;
    private readonly _size: number;

    constructor(
        canvas: HTMLCanvasElement,
        line: number,
        column: number,
        size: number,
        x: number,
        y: number
    ) {
        this._id = `${line}-${column}`;

        this._ctx = canvas.getContext("2d")!;
        this._size = size;

        this._x = x;
        this._y = y;
    }
    public draw() {
        if (this._ctx) {
            this._ctx.beginPath();
            this._ctx.arc(this._x, this._y, this._size / 2, 0, 2 * Math.PI, false);
            this._ctx.fillStyle = "black";
            this._ctx.fill();
        }
    }
    public get coordinates() {
        return {
            x: this._x,
            y: this._y,
            radius: this._size / 2,
        }
    }
}
