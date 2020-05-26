/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.23.603 on 2020-05-26 02:23:10.

// @ts-ignore
declare namespace INetwork {
  interface CreateFolderRequest {
    title: string
    colour: string
  }

  interface LogInUserRequest {
    username: string
    password: string
  }

  interface CreateNoteRequest {
    title: string
    folderId: string
  }

  interface SignUpUserRequest {
    email: string
    firstName: string
    lastName: string
    password: string
  }

  interface UpdateFolderRequest {
    id: string
    title: string
    colour: string
  }

  interface UpdateNoteRequest {
    id: string
    title: string
    contents: string
  }

  interface BriefNoteDescriptionResponse {
    id: string
    title: string
    timeUpdated: Date
    folderId: string
  }

  interface FolderResponse {
    id: string
    title: string
    colour: string
  }

  interface GetFolderWithNotesResponse extends FolderResponse {
    notes: BriefNoteDescriptionResponse[]
  }

  interface GetUserDetailsResponse {
    id: string
    username: string
    firstName: string
    lastName: string
    authToken: string
  }

  interface NoteResponse {
    id: string
    title: string
    contents: string
    timeUpdated: Date
    folderId: string
  }
}
