import { Component } from './base-component'
import { Row } from './board/row'
import { Direction } from '../models/line'

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
        boxCount: this.columnsCount
      })
      new Row({
        linesDirection: Direction.Vertical,
        rowNumber,
        boxCount: this.columnsCount
      })
    }
    new Row({
      linesDirection: Direction.Horizontal,
      rowNumber,
      boxCount: this.columnsCount
    })
  }
}
