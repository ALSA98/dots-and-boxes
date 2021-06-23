import { Component } from '../base-component'
import { Direction, Color, ILine } from '../../models/line'
import state from '../../store/state'

export class Line
  extends Component<HTMLDivElement, HTMLDivElement>
  implements ILine
{
  public direction: Direction
  public id: string
  public color = Color.NotSet
  private handleLineClick: Function

  constructor(conifg: {
    rowId: string
    direction: Direction
    row: number
    column: number,
    handleLineClick:Function
  }) {
    const { rowId, direction, row, column ,handleLineClick} = conifg

    super({
      templateId: 'line-template',
      hostElementId: rowId,
      insertAtStart: false
    })

    this.direction = direction
    const char = direction === Direction.Vertical ? 'v' : 'h'
    this.id = `${char}-${row}-${column}`
    this.handleLineClick = handleLineClick

    const className =
      direction === Direction.Vertical ? 'vertical-line' : 'horizontal-line'
    this.element.classList.add(className)
    this.configure()
  }

  get adjusted(){
    return this.color === Color.Red || this.color === Color.Blue
  }

  get colorClassName(){
    return state.currentPlayerColor === Color.Blue ? 'blue' : 'red'
  }

  configure() {
    this.element.addEventListener('mouseenter',()=>{
      if(this.adjusted) return
      this.element.classList.add(this.colorClassName)
    })
    
    this.element.addEventListener('mouseleave',()=>{
      if(this.adjusted) return
      this.element.classList.remove(this.colorClassName)
    })
    
    this.element.addEventListener('click',()=>{
      if(this.adjusted) return
      this.color = state.currentPlayerColor
      this.element.setAttribute('adjusted', 'true')
      this.handleLineClick(this)
    })
  }
  renderContent() {}
}
