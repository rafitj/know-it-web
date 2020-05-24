import axios, { AxiosRequestConfig } from 'axios';
import { UserStore } from '../../stores/UserStore';
import { ISignUpUserRequest } from 'network/proto/request/ISignUpUserRequest';
import { ILoginInUserRequest } from 'network/proto/request/ILoginInUserRequest';
import { INoteResponse } from 'network/proto/response/INoteResponse';
import { ICreateFolderRequest } from 'network/proto/request/ICreateFolderRequest';
import { IUpdateNoteRequest } from 'network/proto/request/IUpdateNoteRequest';
import { IFolderResponse } from 'network/proto/response/IFolderResponse';
import { ICreateNoteRequest } from 'network/proto/request/ICreateNoteRequest';
import { IUpdateFolderRequest } from 'network/proto/request/IUpdateFolderRequest';
import { IGetFolderWithNotesResponse } from 'network/proto/response/IGetFolderWithNotesResponse';

const baseUrl = 'https://know-it-back-master-x3ikbzbziy.herokuapp.com/';

class ApiImpl {
  createRequest = (endpointSuffix: string, requestType: string, payload?: any, extractDataOnly: boolean = true): Promise<any> => new Promise(
    async (resolve, reject) => {
      const response = await axios.request({
        url: `${baseUrl}${endpointSuffix}`,
        method: requestType as any,
        headers: {
          'Authorization': UserStore.authenticationHeaders?.Authorization,
          'Content-Type': 'application/json'
        },
        data: payload
      });

      const responseData = extractDataOnly ? response.data : response;

      if (response.status !== 200) {
        reject(responseData);
      }

      resolve(responseData);
    });

  signUp = async (payload?: ISignUpUserRequest): Promise<void> => {
    const data = await this.createRequest('users/sign-up', 'get', payload);
    return data;
  }

  signIn = async (payload: ILoginInUserRequest): Promise<void> => {
    const data = await this.createRequest('login', 'post', payload, false);
    return data;
  }

  getNoteById = async (id: string): Promise<INoteResponse> => {
    const data = await this.createRequest(`notes${id}`, 'get') as INoteResponse;
    return data;
  }

  createNewNote = async (payload: ICreateNoteRequest): Promise<INoteResponse> => {
    const data = await this.createRequest('notes', 'post', payload) as INoteResponse;
    return data;
  }

  updateNoteById = async (payload: IUpdateNoteRequest): Promise<INoteResponse> => {
    const data = await this.createRequest('notes', 'put', payload) as INoteResponse;
    return data;
  }

  deleteNoteById = async (id: string): Promise<void> => {
    await this.createRequest(`notes/${id}`, 'delete');
  }

  getAllFolders = async (): Promise<IFolderResponse[]> => {
    const data = await this.createRequest('folders', 'get') as IFolderResponse[];
    return data;
  }

  createNewFolder = async (payload: ICreateFolderRequest): Promise<IFolderResponse[]> => {
    const data = await this.createRequest('folders', 'post', payload) as IFolderResponse[];
    return data;
  }

  updateFolder = async (payload: IUpdateFolderRequest): Promise<IFolderResponse> => {
    const data = await this.createRequest('folders', 'put', payload) as IFolderResponse;
    return data;
  }

  deleteFolder = async (id: string): Promise<void> => {
    await this.createRequest(`folders/${id}`, 'delete');
  }

  getFoldersWithNotes = async (): Promise<IGetFolderWithNotesResponse[]> => {
    const data = await this.createRequest('folders/with-notes', 'get') as IGetFolderWithNotesResponse[];
    return data;
  }
}

export const Api = new ApiImpl();