import { color } from 'ui/base/theme'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

export interface Folder {
  name: string
  id: number
  notes: Note[]
  color: color
}
