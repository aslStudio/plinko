import { consts } from'../lib'

import { Sticks } from './sticks'

export class Plinko {
    private _canvas: HTMLCanvasElement | null
    private _sticks: Sticks | null
    constructor() {
        this._canvas = null
        this._sticks = null
    }
    public init() {
        this._canvas = document.querySelector(`#${consts.CANVAS_ID}`)

        if (this._canvas) {
            this._canvas.width = 500
            this._canvas.height = 500
            this._sticks = new Sticks(10, this._canvas)
            this._sticks.draw()
        }

        this._sticks = null
    }
}