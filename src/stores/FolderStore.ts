import { action, observable } from 'mobx';
import { ICreateFolderRequest } from '../network/proto/request/ICreateFolderRequest';
import { IUpdateFolderRequest } from '../network/proto/request/IUpdateFolderRequest';
import { IGetFolderWithNotesResponse } from '../network/proto/response/IGetFolderWithNotesResponse';
import { Api } from 'network/api/api';

class FolderStoreImpl {
  @observable
  folders: IGetFolderWithNotesResponse[] = [];

  @observable
  isLoading: boolean = false;

  @action
  async fetchFolders() {
    this.isLoading = true;
    this.folders = await Api.getFoldersWithNotes();
    this.isLoading = false;
  }

  @action
  async createFolder(newFolder: ICreateFolderRequest) {
    this.isLoading = true;
    await Api.createNewFolder(newFolder);
    await this.fetchFolders();
    this.isLoading = false;
  }

  @action
  async updateFolder(folder: IUpdateFolderRequest) {
    this.isLoading = true;
    await Api.updateFolder(folder);
    await this.fetchFolders();
    this.isLoading = false;
  }

  @action
  async deleteFolder(folderId: string) {
    this.isLoading = true;
    await Api.deleteFolder(folderId);
    await this.fetchFolders();
    this.isLoading = false;
  }
}

export const FolderStore = new FolderStoreImpl();