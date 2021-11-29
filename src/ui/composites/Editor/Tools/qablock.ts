import './qablock.css'
import { QAIcon } from './QAIcon'

export class Qablock {
  css: any

  constructor({ api }: any) {
    this.css = {
      block: api.styles.block,
      wrapper: 'ce-paragraph',
    }
  }

  static get toolbox() {
    return {
      title: 'QA Block',
      icon: QAIcon,
    }
  }

  render() {
    const qatitle = document.createElement('div')
    qatitle.classList.add('qa-title')

    const qatitlelabel = document.createElement('span')
    qatitlelabel.classList.add('qa-title-label')
    qatitlelabel.textContent = 'Q/A'
    qatitle.append(qatitlelabel)

    const qatitleinput = document.createElement('div')
    qatitleinput.contentEditable = 'true'
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
    question.style.cssText = 'display: inline-block;'
    question.classList.add('question-input', this.css.wrapper, this.css.block)

    const answer = document.createElement('div')
    answer.contentEditable = 'true'
    answer.id = 'answer-input'
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

  save(blockContent: any) {
    return {
      title: document.getElementById('qa-title')?.innerHTML,
      question: document.getElementById('question-input')?.innerHTML,
      answer: document.getElementById('answer-input')?.innerHTML,
    }
  }
}
