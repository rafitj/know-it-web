import { action, observable } from 'mobx'
import { Api } from 'network/api/api'
import CreateFolderRequest = INetwork.CreateFolderRequest;
import GetFolderWithNotesResponse = INetwork.GetFolderWithNotesResponse;
import FolderResponse = INetwork.FolderResponse;
import UpdateFolderRequest = INetwork.UpdateFolderRequest;

class FolderStoreImpl {
  @observable
  folders: GetFolderWithNotesResponse[] = []

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
    newFolder: CreateFolderRequest
  ): Promise<FolderResponse> {
    try {
      const res = await Api.createNewFolder(newFolder)
      return res
    } catch (error) {
      throw new Error(error);
    }
  }

  @action
  async updateFolder(folder: UpdateFolderRequest) {
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
