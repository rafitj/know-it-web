import { API as EditorAPI, OutputData } from '@editorjs/editorjs'
import { observer } from 'mobx-react'
import React from 'react'
import EditorJs from 'react-editor-js'
import { NoteStore } from 'stores/NoteStore'
import { NoteViewStore } from 'stores/NoteViewStore'
import './editor.css'
import { defaultData, EDITOR_TOOLS } from './Tools/EditorTools'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

@observer
export class Editor extends React.Component {
  note = NoteStore.note
  data = this.note?.contents
    ? (JSON.parse(this.note.contents) as OutputData)
    : defaultData(0)
  editorInstance = NoteViewStore.editorInstance
  setEditorInstance = NoteViewStore.setEditorInstance
  async onEdit(api: EditorAPI) {
    if (this.editorInstance && this.note) {
      const savedData = await this.editorInstance.save()
      NoteStore.updateNoteById({
        id: this.note?.id,
        title: this.note?.title,
        contents: JSON.stringify(savedData),
      })
    }
  }
  componentDidMount() {
    if (this.editorInstance?.blocks) {
      this.editorInstance?.blocks.clear()
      this.editorInstance?.blocks.render(defaultData(0))
    }
  }
  render() {
    console.log(this.note?.contents)
    return (
      <EditorJs
        instanceRef={async (instance) => {
          await instance.isReady
          this.setEditorInstance(instance)
        }}
        tools={EDITOR_TOOLS}
        data={this.data}
        autofocus={true}
        onChange={(api) => {
          this.onEdit(api)
        }}
      />
    )
  }
}
