import { Component } from '../base-component'

export class Dot extends Component<HTMLDivElement, HTMLDivElement> {
  constructor(conifg: { rowId: string }) {
    const { rowId } = conifg

    super({
      templateId: 'dot-template',
      hostElementId: rowId,
      insertAtStart: false
    })
  }

  configure() {}
  renderContent() {}
}
