import { Color } from "../models/line"
import { Box } from "../components/board/box"

const state: {
    currentPlayerColor: Color
    blueScore: number
    redScore: number
    boxes: {
        [prop: string] : Box
    }
} = {
    currentPlayerColor: Color.Blue,
    blueScore: 0,
    redScore: 0,
    boxes: {}
}

export default state