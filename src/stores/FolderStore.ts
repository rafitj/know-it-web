import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import { IFolderResponse } from 'network/proto/response/IFolderResponse'
import { ICreateFolderRequest } from '../network/proto/request/ICreateFolderRequest'
import { IUpdateFolderRequest } from '../network/proto/request/IUpdateFolderRequest'
import { IGetFolderWithNotesResponse } from '../network/proto/response/IGetFolderWithNotesResponse'

class FolderStoreImpl {
  @observable
  folders: IGetFolderWithNotesResponse[] = []

  @observable
  isLoading: boolean = false

  @action
  async fetchFolders() {
    this.isLoading = true
    this.folders = await Api.getFoldersWithNotes()
    this.isLoading = false
  }

  @action
  async createFolder(
    newFolder: ICreateFolderRequest
  ): Promise<IFolderResponse> {
    try {
      const res = await Api.createNewFolder(newFolder)
      return res
    } catch (error) {
      throw new Error(error);
    }
  }

  @action
  async updateFolder(folder: IUpdateFolderRequest) {
    await Api.updateFolder(folder)
    await this.fetchFolders()
  }

  @action
  async deleteFolder(folderId: string) {
    await Api.deleteFolder(folderId)
    await this.fetchFolders()
  }
}

export const FolderStore = new FolderStoreImpl()
