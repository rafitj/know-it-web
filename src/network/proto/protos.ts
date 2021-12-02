import { color } from 'ui/base/theme'

export interface CreateFolderRequest {
  title: string
  colour: string
}

export interface LogInUserRequest {
  email: string
  password: string
}

export interface CreateNoteRequest {
  title: string
  folderId: string
}

export interface SignUpUserRequest {
  email: string
  name: string
  password: string
}

export interface UpdateFolderRequest {
  id: string
  title: string
  colour: color
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
  folderTitle?: string
}

export interface FolderResponse {
  id: string
  title: string
  colour: color
}

export interface GetFolderWithNotesResponse extends FolderResponse {
  notes: BriefNoteDescriptionResponse[]
}

export interface GetUserDetailsResponse {
  authToken: string
}

export interface NoteResponse {
  id: string
  title: string
  contents: string
  timeUpdated: Date
  folderId: string
}

export interface GetUserLoginResponse {
  id: string
  email: string
  name: string
  imageUrl: string
  emailVerified: boolean
}

export interface RecentNote {
  id: string
  title: string
}
