import { Component } from '../base-component'
import { Color } from '../../models/line'
import { IBox } from '../../models/box'
import state from '../../store/state'

export class Box
  extends Component<HTMLDivElement, HTMLDivElement>
  implements IBox
{
  public row: number
  public column: number
  public color = Color.NotSet
  public completed = false
  // private linesIds: string[]
  public filledLinesCount = 0

  constructor(conifg: { rowId: string; row: number; column: number }) {
    const { rowId, row, column } = conifg

    super({
      templateId: 'box-template',
      hostElementId: rowId,
      insertAtStart: false
    })

    this.row = row
    this.column = column

    // this.linesIds = this.getLinesIds()
  }

  get colorClassName(){
    return state.currentPlayerColor === Color.Blue ? 'blue' : 'red'
  }
  
  public addToFilledLines(color: Color) {
    this.filledLinesCount++
    if(this.filledLinesCount >= 4){
      this.completed = true
      this.color = color
      this.element.classList.add(this.colorClassName)
    }
  }

  configure() {}
  renderContent() {}

  // getLinesIds() {
  //   const currentRow = this.row
  //   const currentColumn = this.column
  //   const nextRow = this.row + 1
  //   const nextColumn = this.column + 1

  //   return [
  //     `v-${currentRow}-${currentColumn}`,
  //     `h-${currentRow}-${currentColumn}`,
  //     `v-${currentRow}-${nextColumn}`,
  //     `h-${nextRow}-${currentColumn}`
  //   ]
  // }
}
