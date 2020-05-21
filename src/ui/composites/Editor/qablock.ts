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
    return {
      title: 'QA Block',
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
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
