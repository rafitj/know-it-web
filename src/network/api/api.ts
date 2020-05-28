import axios, { Method } from 'axios'
import {
  CreateFolderRequest,
  CreateNoteRequest,
  FolderResponse,
  GetFolderWithNotesResponse,
  GetUserDetailsResponse,
  LogInUserRequest,
  NoteResponse,
  SignUpUserRequest,
  UpdateFolderRequest,
  UpdateNoteRequest,
} from 'network/proto/protos'
import { UserStore } from 'stores/UserStore'

// const baseUrl = 'https://know-it-back-master-x3ikbzbziy.herokuapp.com/api/v1/'
const baseUrl = 'http://localhost:8081/api/v1/'

export class Api {
  static createRequest = <T, S>(
    endpoint: string,
    requestType: Method,
    payload?: T
  ): Promise<S> =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axios.request({
          url: `${baseUrl}${endpoint}`,
          method: requestType,
          headers: {
            Authorization: (UserStore.user && 'Bearer ' + UserStore.user.authToken) || '',
            'Content-Type': 'application/json',
          },
          data: payload || {},
        })
        resolve(response.data as S)
      } catch (e) {
        const {
          response: { data },
        } = e
        reject(data)
      }
    })

  static signUpUser = async (payload: SignUpUserRequest): Promise<void> => {
    await Api.createRequest('auth/signup', 'POST', payload)
  }

  static signInUser = async (
    payload: LogInUserRequest
  ): Promise<GetUserDetailsResponse> => {
    const data = await Api.createRequest<
      LogInUserRequest,
      GetUserDetailsResponse
    >('auth/login', 'POST', payload)
    return data
  }

  static fetchNote = async (id: string): Promise<NoteResponse> => {
    const data = await Api.createRequest<null, NoteResponse>(
      `notes?id=${id}`,
      'GET'
    )
    return data
  }

  static createNote = async (
    payload: CreateNoteRequest
  ): Promise<NoteResponse> => {
    const data = await Api.createRequest<CreateNoteRequest, NoteResponse>(
      'notes',
      'POST',
      payload
    )
    return data
  }

  static updateNote = async (
    payload: UpdateNoteRequest
  ): Promise<NoteResponse> => {
    const data = await Api.createRequest<UpdateNoteRequest, NoteResponse>(
      'notes',
      'PUT',
      payload
    )
    return data
  }

  static deleteNoteById = async (id: string): Promise<void> => {
    await Api.createRequest<null, void>(`notes?id=${id}`, 'DELETE')
  }

  static fetchFolders = async (): Promise<FolderResponse[]> => {
    const data = await Api.createRequest<null, FolderResponse[]>(
      'folders',
      'GET'
    )
    return data
  }

  static createFolder = async (
    payload: CreateFolderRequest
  ): Promise<FolderResponse> => {
    const data = await Api.createRequest<CreateFolderRequest, FolderResponse>(
      'folders',
      'POST',
      payload
    )
    return data
  }

  static updateFolder = async (
    payload: UpdateFolderRequest
  ): Promise<FolderResponse> => {
    const data = await Api.createRequest<UpdateFolderRequest, FolderResponse>(
      'folders',
      'PUT',
      payload
    )
    return data
  }

  static deleteFolder = async (id: string): Promise<void> => {
    await Api.createRequest<null, void>(`folders?id=${id}`, 'DELETE')
  }

  static fetchFoldersWithNotes = async (): Promise<
    GetFolderWithNotesResponse[]
  > => {
    const data = await Api.createRequest<null, GetFolderWithNotesResponse[]>(
      'folders/with-notes',
      'GET'
    )
    return data
  }
}
