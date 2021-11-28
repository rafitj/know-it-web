export interface CreateFolderRequest {
  title: string
  colour: string
}

export interface LogInUserRequest {
  username: string
  password: string
}

export interface CreateNoteRequest {
  title: string
  folderId: string
}

export interface SignUpUserRequest {
  email: string
  firstName: string
  lastName: string
  password: string
}

export interface UpdateFolderRequest {
  id: string
  title: string
  colour: string
}

export interface UpdateNoteRequest {
  id: string
  title: string
  contents: string
}

export interface BriefNoteDescriptionResponse {
  id: string
  title: string
  timeUpdated: Date
  folderId: string
}

export interface FolderResponse {
  id: string
  title: string
  colour: string
}

export interface GetFolderWithNotesResponse extends FolderResponse {
  notes: BriefNoteDescriptionResponse[]
}

export interface GetUserDetailsResponse {
  id: string
  username: string
  firstName: string
  lastName: string
  authToken: string
}

export interface NoteResponse {
  id: string
  title: string
  contents: string
  timeUpdated: Date
  folderId: string
}
