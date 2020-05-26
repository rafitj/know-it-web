import { action, observable } from 'mobx'
import { NoteTools } from 'types/note'
import { NoteViewState } from '../../../stores/NoteViewStore'

export class NoteUtilsState {
  @observable
  selectedTool: NoteTools = 'cards'

  private noteViewState: NoteViewState

  constructor(noteViewState: NoteViewState) {
    this.noteViewState = noteViewState
  }

  @action
  setSelectedTool = (tool: NoteTools) => {
    this.selectedTool = tool
  }

  @action
  selectTool = (tool: NoteTools) => {
    this.noteViewState.collapseRight(false)
    this.setSelectedTool(tool)
  }

  @action
  onCollapse = (collapse: boolean) => {
    this.noteViewState.collapseRight(collapse)
  }
}
