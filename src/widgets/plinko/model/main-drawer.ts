import { consts } from'../lib'

export function drawPlinkoCanvas() {
    let canvas: HTMLCanvasElement | null = null

    function init() {
        canvas = document.querySelector(`#${consts.CANVAS_ID}`)
        
        if (canvas) {
            canvas.width = 500
            canvas.height = 500
        }
    }
}