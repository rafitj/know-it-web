import { action, observable } from 'mobx'
import { NoteViewStore } from 'stores/NoteViewStore'
import { NoteTools } from 'types/note'

export class NoteUtilsState {
  @observable
  selectedTool: NoteTools = 'cards'

  @action
  setSelectedTool = (tool: NoteTools) => {
    this.selectedTool = tool
  }

  @action
  selectTool = (tool: NoteTools) => {
    NoteViewStore.collapseRight(false)
    this.setSelectedTool(tool)
  }

  @action
  onCollapse = (collapse: boolean) => {
    NoteViewStore.collapseRight(collapse)
  }
}
