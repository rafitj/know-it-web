import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import { FolderStore } from './FolderStore'
import NoteResponse = INetwork.NoteResponse;
import CreateNoteRequest = INetwork.CreateNoteRequest;
import UpdateNoteRequest = INetwork.UpdateNoteRequest;

class NoteStore {
  @observable
  note?: NoteResponse;

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  @action
  async fetchNote(id: string) {
    this.isLoading = true
    try {
      this.note = await Api.fetchNote(id)
    } catch (e) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to fetch note.';
    }
    this.isLoading = false
  }

  @action
  async createNote(payload: CreateNoteRequest) {
    this.isLoading = true
    try {
      this.note = await Api.createNote(payload)
      await FolderStore.fetchFolders()
    } catch (e) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to create note.';
    }
    this.isLoading = false
  }

  @action
  async updateNoteById(payload: UpdateNoteRequest) {
    this.isLoading = true
    try {
      this.note = await Api.updateNote(payload)
      await FolderStore.fetchFolders()
    } catch (e) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to update note.';
    }
    this.isLoading = false
  }

  @action
  async deleteNoteById(id: string) {
    this.isLoading = true
    try {
      await Api.deleteNoteById(id)
      await FolderStore.fetchFolders()
    } catch (e) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to delete note.';
    }
    this.isLoading = false
  }

  @action
  resetErrors(): void {
    this.requestError = false;
    this.requestErrorDetail = undefined;
  }
}

const noteStore = new NoteStore();

export {
  noteStore as NoteStore
}