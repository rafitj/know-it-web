import './definitionBlock.css'
import { DefinitionIcon } from './DefinitionIcon'

export class DefinitionBlock {
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
      title: 'QA Block',
      icon: DefinitionIcon,
    }
  }

  render() {
    const qatitle = document.createElement('div')
    qatitle.classList.add('def-title')

    const qatitleinput = document.createElement('div')
    qatitleinput.textContent = 'Q/A'
    qatitleinput.classList.add('qa-title-input')
    qatitle.append(qatitleinput)
    qatitleinput.id = 'qa-title'

    const ablock = document.createElement('div')
    ablock.classList.add('ablock')
    const qblock = document.createElement('div')
    qblock.classList.add('qblock')

    const qlabel = document.createElement('div')
    qlabel.textContent = 'Q'
    qlabel.classList.add('qlabel')

    const alabel = document.createElement('div')
    alabel.textContent = 'A'
    alabel.classList.add('alabel')

    const question = document.createElement('div')
    question.id = 'question-input'
    question.contentEditable = 'true'
    question.textContent =
      this.data && this.data.question ? this.data.question : ''
    question.style.cssText = 'display: inline-block;'
    question.classList.add('question-input', this.css.wrapper, this.css.block)

    const answer = document.createElement('div')
    answer.contentEditable = 'true'
    answer.id = 'answer-input'
    answer.textContent = this.data && this.data.answer ? this.data.answer : ''
    answer.style.cssText = 'display: inline-block;'
    answer.classList.add('answer-input', this.css.wrapper, this.css.block)

    const block = document.createElement('div')
    block.classList.add('qa-block')

    qblock.append(qlabel)
    ablock.append(alabel)
    qblock.append(question)
    ablock.append(answer)
    block.append(qatitle)
    block.append(qblock)
    block.append(ablock)
    return block
  }

  // tslint:disable-next-line:no-any
  save(blockContent: HTMLDivElement) {
    return {
      question: blockContent.querySelector('#question-input')?.innerHTML,
      answer: blockContent.querySelector('#answer-input')?.innerHTML,
    }
  }
}
