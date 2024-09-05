type CoordinatesArray = {
    x: number,
    y: number,
    radius: number
}[]

export class Bomb {
    private readonly _ctx: CanvasRenderingContext2D | undefined;

    private _startX: number
    private _startY: number
    private _size: number

    private _endX: number
    private _endY: number

    private _x: number
    get x() {
        return this._x
    }
    set x(v: number) {
        this._x = v
    }

    private _y: number
    get y() {
        return this._y
    }
    set y(v: number) {
        this._y = v
    }

    private _vX: number
    get vX() {
        return this._vX
    }
    set vX(v: number) {
        this._vX = v
    }
    private _vY: number
    get vY() {
        return this._vY
    }
    set vY(v: number) {
        this._vY = v
    }

    private _sticks: CoordinatesArray

    constructor(
        canvas: HTMLCanvasElement,
        sticks: CoordinatesArray
    ) {
        this._ctx = canvas.getContext('2d')!

        this._startX = this._ctx.canvas.width / 2
        this._startY = 0
        this._size = 15

        this._endX = this._ctx.canvas.width - 100
        this._endY = this._ctx.canvas.height - 100

        this._x = this._startX
        this._y = this._startY

        this._vX = 0
        this._vY = 3

        this._sticks = sticks
    }
    public draw() {
        if (this._ctx) {
            // this._ctx.clearRect(
            //     0,
            //     0,
            //     this._ctx.canvas.width,
            //     this._ctx.canvas.height
            // )
            this._ctx!.beginPath()
            this._ctx!.arc(
                this.x,
                this.y,
                this._size / 2,
                0,
                2 * Math.PI,
                false
            );
            this._ctx.fillStyle = "red";
            this._ctx.fill();
        }
    }
    public play() {
        let t = 0

        const interval = setInterval(() => {
            if (this.y < this._endY) {
                if (this.isCollision()) {
                    // this.vY = -1 * this.vY
                    this.vX = -1 * this.vX
                    // if (this.x < this._endX) {
                    //     this.vX = 3
                    // } else {
                    //     this._vX = -3
                    // }
                    // t = t / 2
                    // clearInterval(interval)
                    // return
                }

                this.x = this.x + this.vX * t
                this.y = this.y + this.vY * t
                this.vY += 1
                this.vX += 1
                t += 0.01

                console.log(this.y, this.vY, t, this.y + this.vY * t)

                this.draw()
            } else {
                clearInterval(interval)
            }
        }, 10)
    }
    private checkCollision(
        ball1: CoordinatesArray[number],
        ball2: CoordinatesArray[number])
    {
        const ball1X = ball1.x;
        const ball1Y = ball1.y;
        const ball1Radius = ball1.radius;
        const ball2X = ball2.x;
        const ball2Y = ball2.y;
        const ball2Radius = ball2.radius;

        return Math.sqrt((ball1X - ball2X) ** 2 + (ball1Y - ball2Y) ** 2) <= (ball1Radius + ball2Radius);
    }
    private isCollision() {
        let result = false

        for (let i = 0; i < this._sticks.length; i++) {
            const currStick = this._sticks[i]

            if (
                this.checkCollision(
                    {
                        x: this.x,
                        y: this.y,
                        radius: this._size / 2,
                    },
                    currStick,
                )
            ) {
                result = true
                break
            }
        }

        return result
    }
}