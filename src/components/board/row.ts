import { Component } from '../base-component'
import { Dot } from './dot'
import { Line } from './line'
import { Box } from './box'
import { Direction } from '../../models/line'

export class Row extends Component<HTMLDivElement, HTMLDivElement> {
  public linesDirection: Direction
  private boxCount: number
  private elementId: string
  private rowNumber: number

  constructor(config: {
    linesDirection: Direction
    rowNumber: number
    boxCount: number
  }) {
    const { linesDirection, rowNumber, boxCount } = config
    const elementId =
      linesDirection === Direction.Vertical ? 'v' + rowNumber : 'h' + rowNumber
    super({
      templateId: 'row-template',
      hostElementId: 'board',
      insertAtStart: false,
      elementId
    })
    this.elementId = elementId
    this.rowNumber = rowNumber
    this.boxCount = boxCount
    this.linesDirection = linesDirection

    this.renderContent()
  }

  configure() {}

  renderContent() {
    if (this.linesDirection === Direction.Horizontal) {
      this.createDotsAndLinesRow()
    }
    if (this.linesDirection === Direction.Vertical) {
      this.createLinesAndBoxesRow()
    }
  }

  createDotsAndLinesRow() {
    let col = 1
    for (col; col <= this.boxCount; col++) {
      new Dot({ rowId: this.elementId })
      new Line({
        rowId: this.elementId,
        direction: this.linesDirection,
        row: this.rowNumber,
        column: col
      })
    }
    new Dot({ rowId: this.elementId })
  }

  createLinesAndBoxesRow() {
    let col = 1
    for (col; col <= this.boxCount; col++) {
      new Line({
        rowId: this.elementId,
        direction: this.linesDirection,
        row: this.rowNumber,
        column: col
      })
      new Box({ rowId: this.elementId, row: this.rowNumber, column: col })
    }
    new Line({
      rowId: this.elementId,
      direction: this.linesDirection,
      row: this.rowNumber,
      column: col
    })
  }
}
