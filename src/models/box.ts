import { Color } from './line'

export interface IBox {
  row: number
  column: number
  color: Color
  filledLinesCount: number,
  completed: boolean
}
