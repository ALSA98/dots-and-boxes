import { Component } from './base-component'

export class Setup extends Component<HTMLDivElement, HTMLDivElement> {
  private form: HTMLFormElement
  private _rows = 5
  private _columns = 5

  constructor(public initGame: Function) {
    super({
      templateId: 'setup-template',
      hostElementId: 'app',
      insertAtStart: true
    })

    this.form = this.element.querySelector('form')! as HTMLFormElement

    this.configure()
  }

  configure() {
    this.form.addEventListener('submit', this.submitHandler.bind(this))
  }

  renderContent() {}

  set rowsCount(value: number) {
    if (value <= 0 || value > 100) {
      throw new Error('Please pass a value between 1 and 100.')
    }
    this._rows = value
  }
  get rowsCount() {
    return this._rows
  }

  set columnsCount(value: number) {
    if (value <= 0 || value > 100) {
      throw new Error('Please pass a value between 1 and 100.')
    }
    this._columns = value
  }
  get columnsCount() {
    return this._columns
  }

  submitHandler(e: Event) {
    e.preventDefault()
    const rowsInputElement = this.form.querySelector(
      '[name="rows"]'
    )! as HTMLInputElement

    const columnsInputElement = this.form.querySelector(
      '[name="columns"]'
    )! as HTMLInputElement

    this.rowsCount = +rowsInputElement.value
    this.columnsCount = +columnsInputElement.value

    this.initGame(this.rowsCount, this.columnsCount)
    this.element.style.display = 'none'
  }
}
