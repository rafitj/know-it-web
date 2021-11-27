import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import { ICreateNoteRequest } from 'network/proto/request/ICreateNoteRequest'
import { IUpdateNoteRequest } from 'network/proto/request/IUpdateNoteRequest'
import { INoteResponse } from 'network/proto/response/INoteResponse'
import { FolderStore } from './FolderStore'

class NoteStoreImpl {
  @observable
  note?: INoteResponse = undefined

  @observable
  isLoading: boolean = false

  @action
  async fetchNote(id: string) {
    this.isLoading = true
    this.note = await Api.getNoteById(id)
    this.isLoading = false
  }

  @action
  async createNote(payload: ICreateNoteRequest) {
    this.isLoading = true
    this.note = await Api.createNewNote(payload)
    await FolderStore.fetchFolders()
    this.isLoading = false
  }

  @action
  async updateNoteById(payload: IUpdateNoteRequest) {
    this.isLoading = true
    this.note = await Api.updateNoteById(payload)
    // await FolderStore.fetchFolders()
    this.isLoading = false
  }

  @action
  async deleteNoteById(id: string) {
    this.isLoading = true
    await Api.deleteNoteById(id)
    await FolderStore.fetchFolders()
    this.isLoading = false
  }
}

export const NoteStore = new NoteStoreImpl()
