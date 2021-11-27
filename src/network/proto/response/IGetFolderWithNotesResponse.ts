import { color } from 'ui/base/theme'
import { IBriefNoteDescriptionResponse } from './IBriefNoteDescriptionResponse'

export interface IGetFolderWithNotesResponse {
  id?: string
  title?: string
  colour?: color
  notes?: IBriefNoteDescriptionResponse[]
}
