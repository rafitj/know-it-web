import EditorJsType from '@editorjs/editorjs/types'
import { action, observable } from 'mobx'

export class NoteViewState {
  @observable
  editorInstance?: EditorJsType

  @observable
  selectedFolderId?: string

  @observable
  openFolders: string[] = []

  @observable
  leftCollapsed: boolean = false

  @observable
  rightCollapsed: boolean = true

  @observable
  initial: boolean = true

  @observable
  addFolderMode: boolean = false

  @observable
  addFileMode: boolean = false

  @action
  setEditorInstance(instance?: EditorJsType) {
    this.editorInstance = instance
  }

  @action
  setSelectedFolderId(id?: string) {
    this.selectedFolderId = id
  }

  @action
  setOpenFolders(openFolders: string[]) {
    this.openFolders = openFolders
  }
  @action
  setAddFileMode(open: boolean) {
    this.addFileMode = open
  }

  @action
  setAddFolderMode(open: boolean) {
    this.addFolderMode = open
  }
  @action
  collapseLeft(collapse: boolean) {
    this.leftCollapsed = collapse
  }
  @action
  collapseRight(collapse: boolean) {
    this.rightCollapsed = collapse
  }

  @action
  unsetInitial() {
    this.initial = false
  }
}
