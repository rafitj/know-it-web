import { action, observable } from 'mobx'
import {
  CreateFolderRequest,
  FolderResponse,
  GetFolderWithNotesResponse,
  UpdateFolderRequest,
} from 'network/proto/protos'
import { Api } from '../network/api/api'

export class FolderState {
  @observable
  folders: GetFolderWithNotesResponse[] = []

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  @action
  async fetchFolders() {
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
  async createFolder(
    newFolder: CreateFolderRequest
  ): Promise<FolderResponse | void> {
    this.isLoading = true
    try {
      return await Api.createFolder(newFolder)
    } catch (e) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to create folder.'
    }
    this.isLoading = false
  }

  @action
  async updateFolder(folder: UpdateFolderRequest) {
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
  async deleteFolder(folderId: string) {
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
  resetErrors(): void {
    this.requestError = false
    this.requestErrorDetail = undefined
  }
}
