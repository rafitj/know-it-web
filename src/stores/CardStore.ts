import { action, observable } from 'mobx'
export type CardType = {
  q: string
  a: string
  id: number
}

export type CardModes = 'view' | 'create'

export class CardState {
  @observable
  cardMode: CardModes = 'view'

  @observable
  cards: CardType[] = []

  @action
  setCards = () => {
    this.cards = [
      { q: 'What is', a: 'your mom', id: 1 },
      { q: 'What is 9+11?', a: '21', id: 2 },
      { q: 'What is 9+11?', a: '21', id: 31 },
      { q: 'What is 9+11?', a: '21', id: 41 },
      { q: 'What is 9+11?', a: '21', id: 561 },
      { q: 'What is 9+11?', a: '21', id: 176 },
      { q: 'What is 9+11?', a: '21', id: 11 },
      { q: 'What is 9+11?', a: '21', id: 12 },
      { q: 'What is 9+11?', a: '21', id: 31 },
      { q: 'What is', a: 'your mom', id: 111 },
      { q: 'What is 9+11?', a: '21', id: 1112 },
      { q: 'What is 9+11?', a: '21', id: 11131 },
      { q: 'What is 9+11?', a: '21', id: 11141 },
      { q: 'What is 9+11?', a: '21', id: 111561 },
      { q: 'What is 9+11?', a: '21', id: 111176 },
      { q: 'What is 9+11?', a: '21', id: 111211 },
      { q: 'What is 9+11?', a: '21', id: 12212 },
      { q: 'What is 9+11?', a: '21', id: 31121 },
    ]
  }
}
