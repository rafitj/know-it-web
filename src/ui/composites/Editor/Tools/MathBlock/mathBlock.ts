import './qablock.css'
import { QAIcon } from './QAIcon'

export class MathBlock {
  // tslint:disable-next-line:no-any
  css: any
  // tslint:disable-next-line:no-any
  data: any

  // tslint:disable-next-line:no-any
  constructor({ api, data }: any) {
    this.css = {
      block: api.styles.block,
      wrapper: 'ce-paragraph',
    }
    this.data = data
  }

  static get toolbox() {
    return {
      title: 'Math Block',
      icon: QAIcon,
    }
  }

  render() {
    const mathblock = document.createElement('div')
    mathblock.classList.add('qa-block')
    // Mathlive.renderMathInElement(mathblock)
    return mathblock
  }

  // tslint:disable-next-line:no-any
  save(blockContent: HTMLDivElement) {
    return {
      question: blockContent.querySelector('#question-input')?.innerHTML,
      answer: blockContent.querySelector('#answer-input')?.innerHTML,
    }
  }
}
