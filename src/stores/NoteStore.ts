import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import { FolderStore } from './FolderStore'
import NoteResponse = INetwork.NoteResponse;
import CreateNoteRequest = INetwork.CreateNoteRequest;
import UpdateNoteRequest = INetwork.UpdateNoteRequest;

class NoteStoreImpl {
  @observable
  note?: NoteResponse = undefined

  @observable
  isLoading: boolean = false

  @action
  async fetchNote(id: string) {
    this.isLoading = true
    this.note = await Api.getNoteById(id)
    this.isLoading = false
  }

  @action
  async createNote(payload: CreateNoteRequest) {
    this.isLoading = true
    this.note = await Api.createNewNote(payload)
    await FolderStore.fetchFolders()
    this.isLoading = false
  }

  @action
  async updateNoteById(payload: UpdateNoteRequest) {
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
