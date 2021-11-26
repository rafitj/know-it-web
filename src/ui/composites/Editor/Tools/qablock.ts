import { HelpCircle } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'

export class QABlock {
  css: any

  constructor({ api }: any) {
    this.css = {
      block: api.styles.block,
      wrapper: 'ce-paragraph',
    }
  }

  static get toolbox() {
    console.log(HelpCircle)
    return {
      title: 'QA Block',
      icon: HelpCircle,
    }
  }

  render() {
    const ablock = document.createElement('div')
    const qblock = document.createElement('div')

    const qlabel = document.createElement('div')
    qlabel.style.cssText = `background-color:${colors.blue}; border-radius: 5px; display: inline-block; padding: 5px; margin: 4px;`
    qlabel.textContent = 'Q'

    const alabel = document.createElement('div')
    alabel.style.cssText = `background-color:${colors.blue}; border-radius: 5px; display: inline-block; padding: 5px; margin: 4px; `
    alabel.textContent = 'A'

    const question = document.createElement('div')
    question.id = 'question-input'
    question.contentEditable = 'true'
    question.style.cssText = 'border: none; padding: 10px;'
    question.style.cssText = 'display: inline-block;'
    question.classList.add(this.css.wrapper, this.css.block)

    const answer = document.createElement('div')
    answer.contentEditable = 'true'
    answer.id = 'answer-input'
    answer.style.cssText = 'border: none; padding: 10px;'
    answer.style.cssText = 'display: inline-block;'
    answer.classList.add(this.css.wrapper, this.css.block)

    const block = document.createElement('div')
    qblock.append(qlabel)
    ablock.append(alabel)
    qblock.append(question)
    ablock.append(answer)
    block.append(qblock)
    block.append(ablock)
    return block
  }

  save(blockContent: any) {
    return {
      question: document.getElementById('question-input')?.innerHTML,
      answer: document.getElementById('answer-input')?.innerHTML,
    }
  }
}
