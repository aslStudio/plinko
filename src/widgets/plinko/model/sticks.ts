import { Stick } from './stick'

// TODO: задать оффсеты сверху и снизу + закончить с регенирацией стиков

export class Sticks {
    private _list: Stick[];
    constructor(lines: number, canvas: HTMLCanvasElement) {
        this._list = getSticks(lines, canvas)
    }
    public draw() {
        this._list.forEach(item => item.draw())
    }
    public update(lines: number, canvas: HTMLCanvasElement) {
        this._list = getSticks(lines, canvas)
    }
    public get coordinatesList() {
        return this._list.map(item => item.coordinates)
    }
}

function getSticks(lines: number, canvas: HTMLCanvasElement) {
    const FIRST_LINE_STICKS_COUNT = 3
    const sticksPerLineCountMatrix = Array(lines).fill(1).map((_, index) => {
        return FIRST_LINE_STICKS_COUNT + index
    })
    const maxStickPerLineCount = sticksPerLineCountMatrix[sticksPerLineCountMatrix.length - 1]

    const sticksList: Stick[] = []
    const { spaceSize, stickSize } = countStickSpaceAndSize(maxStickPerLineCount, canvas)
    const { maxLineWidth, maxLineStartX } = getMaxLineProperties(canvas, lines, stickSize, spaceSize)

    for (let line = 0; line < sticksPerLineCountMatrix.length; line++) {
        for (let column = 0; column < sticksPerLineCountMatrix[line]; column++) {
            const currLineCoordinates = getLineCoordinates(
                line + 1,
                lines,
                maxLineWidth,
                maxLineStartX,
                stickSize,
                spaceSize,
                sticksPerLineCountMatrix[line]
            )
            const {x, y} = getStickCoordinates(
                currLineCoordinates.y,
                currLineCoordinates.x,
                column + 1,
                stickSize,
                spaceSize,
            )

            const stick = new Stick(
                canvas,
                line + 1,
                column + 1,
                stickSize,
                x,
                y,
            )
            sticksList.push(stick)
        }
    }

    return sticksList
}

function countStickSpaceAndSize(
    maxStickPerLineCount: number,
    canvas: HTMLCanvasElement
) {
    const MIN_SPACE_SIZE = 10
    const MAX_SPACE_SIZE = 40

    const MIN_STICK_SIZE = 8
    const MAX_STICK_SIZE = 18

    const ctx = canvas.getContext('2d')

    if (ctx) {
        const width = ctx.canvas.width
        let space = MIN_SPACE_SIZE
        let stick = MIN_STICK_SIZE

        while (
            stick * maxStickPerLineCount + space * (maxStickPerLineCount - 1) < width &&
            stick < MAX_STICK_SIZE &&
            space < MAX_SPACE_SIZE
        ) {
            stick += 1
            space += 1
        }

        return {
            spaceSize: space,
            stickSize: stick
        }
    }

    return {
        spaceSize: MIN_SPACE_SIZE,
        stickSize: MIN_STICK_SIZE
    }
}

function getMaxLineProperties(
    canvas: HTMLCanvasElement,
    lines: number,
    stickSize: number,
    spaceSize: number
) {
    const ctx = canvas.getContext('2d')!
    const width = ctx.canvas.width

    const lastLineElementsCount = 3 + lines - 1

    const maxLineWidth = getLineWidth(lastLineElementsCount, stickSize, spaceSize)
    const maxLineStartX = (width - maxLineWidth) / 2

    return {
        maxLineWidth,
        maxLineStartX
    }
}

function getLineCoordinates(
    line: number,
    lines: number,
    maxLineWidth: number,
    maxLineStartX: number,
    stickSize: number,
    spaceSize: number,
    perLineStick: number
) {
    if (line < lines) {
        const currLineWidth = getLineWidth(perLineStick, stickSize, spaceSize)
        const widthDiff = (maxLineWidth - currLineWidth)

        return {
            y: line * stickSize + (line - 1) * spaceSize,
            x: widthDiff / 2 + maxLineStartX
        }
    } else {
        return {
            y: line * stickSize + (line - 1) * spaceSize,
            x: maxLineStartX,
        }
    }
}

function getStickCoordinates(
    currLineY: number,
    currLineX: number,
    column: number,
    stickSize: number,
    spaceSize: number,
) {
    return {
        y: currLineY + stickSize / 2,
        x: currLineX +
            (column - 1) * stickSize +
            (column - 1) * spaceSize +
            stickSize / 2
    }
}

function getLineWidth(
    sticksPerLine: number,
    stickSize: number,
    spaceSize: number
) {
    const elementsWidth = sticksPerLine * stickSize
    const spacesWidth = spaceSize * (sticksPerLine - 1)

    return elementsWidth + spacesWidth
}