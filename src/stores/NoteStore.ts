import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import {
  CreateNoteRequest,
  NoteResponse,
  UpdateNoteRequest,
} from 'network/proto/protos'
import { FolderState } from './FolderStore'

export class NoteState {
  @observable
  note?: NoteResponse

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  @observable
  folderState: FolderState

  constructor(folderState: FolderState) {
    this.folderState = folderState
  }

  @action
  fetchNote = async (id: string) => {
    this.isLoading = true
    try {
      this.note = await Api.fetchNote(id)
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to fetch note.'
    }
    this.isLoading = false
  }

  @action
  createNote = async (payload: CreateNoteRequest) => {
    this.isLoading = true
    try {
      this.note = await Api.createNote(payload)
      await this.folderState.fetchFolders()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to create note.'
    }
    this.isLoading = false
  }

  @action
  updateNoteById = async (payload: UpdateNoteRequest) => {
    this.isLoading = true
    try {
      this.note = await Api.updateNote(payload)
      await this.folderState.fetchFolders()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to update note.'
    }
    this.isLoading = false
  }

  @action
  deleteNoteById = async (id: string) => {
    this.isLoading = true
    try {
      await Api.deleteNoteById(id)
      await this.folderState.fetchFolders()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to delete note.'
    }
    this.isLoading = false
  }

  @action
  resetErrors = (): void => {
    this.requestError = false
    this.requestErrorDetail = undefined
  }
}
