import { action, observable } from 'mobx'
import { Api } from '../network/api/api'
import { FlashcardResponse } from '../network/proto/protos'

export class CardState {
  @observable
  cardInFocusIndex?: number

  @observable
  cards: FlashcardResponse[] = []

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  @action
  setCardInFocusIndex = (index?: number) => {
    this.cardInFocusIndex = index
  }
  @action
  setCardInFocusIndexById = (id?: string) => {
    const index = this.cards.findIndex((card) => card.id === id)
    this.cardInFocusIndex = index
  }

  @action
  generateCards = async (noteId: string) => {
    this.isLoading = true
    try {
      this.cards = await Api.generateFlashcards(noteId)
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to generate cards.'
    }
    this.isLoading = false
  }

  @action
  fetchCards = async (noteId: string) => {
    this.isLoading = true
    try {
      this.cards = await Api.fetchFlashcards(noteId)
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to fetch cards.'
    }
    this.isLoading = false
  }
}
