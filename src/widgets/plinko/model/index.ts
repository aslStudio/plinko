import { consts } from'../lib'

import { Sticks } from './sticks'
import { Bomb } from './bomb'

export class Plinko {
    private _canvasSticks: HTMLCanvasElement | null
    private _canvasBomb: HTMLCanvasElement | null
    private _sticks: Sticks | null
    private _bomb: Bomb | null
    constructor() {
        this._canvasSticks = null
        this._sticks = null
        this._bomb = null
        this._canvasBomb = null
    }
    public init() {
        this._canvasSticks = document.querySelector(`#${consts.CANVAS_ID}`)
        this._canvasBomb = document.querySelector(`#${consts.BOMB_CANVAS_ID}`)

        if (this._canvasSticks) {
            this._canvasSticks.width = 500
            this._canvasSticks.height = 500
            this._sticks = new Sticks(10, this._canvasSticks)
            this._sticks.draw()
        } else {
            this._sticks = null
        }

        if (this._canvasBomb && this._sticks) {
            this._canvasBomb.width = 500
            this._canvasBomb.height = 500
            this._bomb = new Bomb(this._canvasBomb, this._sticks.coordinatesList)
            this._bomb.draw()
        } else {
            this._bomb = null
        }
    }
    public play() {
        this._bomb?.play()
    }
}