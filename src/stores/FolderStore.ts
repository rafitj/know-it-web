import { action, observable } from 'mobx'
import {
  BriefNoteDescriptionResponse,
  CreateFolderRequest,
  FolderResponse,
  GetFolderWithNotesResponse,
  UpdateFolderRequest,
} from 'network/proto/protos';
import { Api } from '../network/api/api'

export class FolderState {
  @observable
  folders: GetFolderWithNotesResponse[] = []

  @observable
  notesInTrash: BriefNoteDescriptionResponse[] = []

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  @action
  fetchFolders = async () => {
    this.isLoading = true
    try {
      this.folders = await Api.fetchFoldersWithNotes()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to fetch folders.'
    }
    this.isLoading = false
  }

  @action
  fetchNotesInTrash = async () => {
    this.isLoading = true;

    try {
      this.notesInTrash = await Api.fetchNotesInTrash();
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to fetch notes in trash.'
    }

    this.isLoading = false;
  }

  @action
  createFolder = async (
    newFolder: CreateFolderRequest
  ): Promise<FolderResponse | void> => {
    this.isLoading = true
    try {
      const folder = await Api.createFolder(newFolder)
      await this.fetchFolders()
      return folder
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to create folder.'
    }
    this.isLoading = false
  }

  @action
  updateFolder = async (folder: UpdateFolderRequest) => {
    this.isLoading = true
    try {
      await Api.updateFolder(folder)
      await this.fetchFolders()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to update folder.'
    }
    this.isLoading = false
  }

  @action
  deleteFolder = async (folderId: string) => {
    this.isLoading = true
    try {
      await Api.deleteFolder(folderId)
      await this.fetchFolders()
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to delete folder.'
    }
    this.isLoading = false
  }

  @action
  resetErrors = async (): Promise<void> => {
    this.requestError = false
    this.requestErrorDetail = undefined
  }
}
