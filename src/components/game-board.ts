import { Component } from './base-component'
import { Row } from './board/row'
import { Color,Direction } from '../models/line'
import { Line } from './board/line'
import state from '../store/state'

export class GameBoard extends Component<HTMLDivElement, HTMLDivElement> {
  
  constructor(public rowsCount: number, public columnsCount: number) {
    super({
      templateId: 'board-template',
      hostElementId: 'app',
      insertAtStart: true
    })
    this.renderContent()
  }
  configure() {}
  renderContent() {
    let rowNumber = 1
    for (rowNumber; rowNumber <= this.rowsCount; rowNumber++) {
      new Row({
        linesDirection: Direction.Horizontal,
        rowNumber,
        boxCount: this.columnsCount,
        handleLineClick: this.handleLineClick.bind(this)
      })
      new Row({
        linesDirection: Direction.Vertical,
        rowNumber,
        boxCount: this.columnsCount,
        handleLineClick: this.handleLineClick.bind(this)
      })
    }
    new Row({
      linesDirection: Direction.Horizontal,
      rowNumber,
      boxCount: this.columnsCount,
      handleLineClick: this.handleLineClick.bind(this)
    })
  }

  handleLineClick(line: Line){
    const sideBoxIds = this.getSideBoxes(line)
    let scoreAchieved = false

    sideBoxIds?.forEach((boxId)=>{
      const box = state.boxes[boxId]
      box.addToFilledLines(state.currentPlayerColor)
      if(box.completed) scoreAchieved = true
    })

    if(!scoreAchieved){
      const nextPlayerColor = state.currentPlayerColor === Color.Blue ? Color.Red : Color.Blue 
      state.currentPlayerColor = nextPlayerColor
    }
  }

  getSideBoxes(line: Line){
    const row = +line.id.split('-')[1]
    const column = +line.id.split('-')[2]
    if(line.direction === Direction.Horizontal){
      const boxes = []
      const topBox = row -1 > 0 ? `${row -1}-${column}` : null
      const bottomBox = row <= this.rowsCount ? `${row}-${column}` : null
      topBox && boxes.push(topBox)
      bottomBox && boxes.push(bottomBox)
      return boxes
    }
    if(line.direction === Direction.Vertical){
      const boxes = []
      const leftBox = column -1 > 0 ? `${row}-${column -1}` : null
      const rightBox = column <= this.columnsCount ? `${row}-${column}` : null
      leftBox && boxes.push(leftBox)
      rightBox && boxes.push(rightBox)
      return boxes
    }
    throw new Error('Line dosent have direction!')
  }


}
