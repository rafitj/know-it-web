import { IBriefNoteDescriptionResponse } from './IBriefNoteDescriptionResponse';

export interface IGetFolderWithNotesResponse {
    id?: string;
    title?: string;
    colour?: string;
    notes?: IBriefNoteDescriptionResponse[];
}