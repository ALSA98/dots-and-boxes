import { Component } from '../base-component'
import { Direction, Color, ILine } from '../../models/line'

export class Line
  extends Component<HTMLDivElement, HTMLDivElement>
  implements ILine
{
  public direction: Direction
  public id: string
  public color = Color.NotSet

  constructor(conifg: {
    rowId: string
    direction: Direction
    row: number
    column: number
  }) {
    const { rowId, direction, row, column } = conifg

    super({
      templateId: 'line-template',
      hostElementId: rowId,
      insertAtStart: false
    })

    this.direction = direction
    const char = direction === Direction.Vertical ? 'v' : 'h'
    this.id = `${char}-${row}-${column}`

    const className =
      direction === Direction.Vertical ? 'vertical-line' : 'horizontal-line'
    this.element.classList.add(className)
  }

  configure() {}
  renderContent() {}
}
