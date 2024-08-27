export class Stick {
    ctx: CanvasRenderingContext2D | undefined
    id: number;
    x: number;
    y: number;
    size: number;
    constructor(id: number, canvas: HTMLCanvasElement) {
        this.id = id

        const coordinates = getStickCoordinates(id)
        this.x = coordinates.x
        this.y = coordinates.y

        this.size = getStickSize(id)

        const context = canvas.getContext('2d')
        if (context) {
            this.ctx = context
        }
    }
    draw() {
        if (this.ctx) {
            this.ctx.beginPath()
            this.ctx.arc(this.x, this.x, this.size / 2, 0, 2 * Math.PI, false)
            this.ctx.fillStyle = 'black';
            this.ctx.fill();
        }
    }
}

function getStickCoordinates(
    id: number
): {
    x: number
    y: number
} {
    // TODO: x and y is center coordinates
    return {
        x: 1,
        y: 1,
    }
}

function getStickSize(
    id: number
): number {
    return 18
}