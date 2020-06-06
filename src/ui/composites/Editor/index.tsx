import { API as EditorAPI, OutputData } from '@editorjs/editorjs'
import { observer } from 'mobx-react'
import React from 'react'
import { findDOMNode } from 'react-dom'
import EditorJs from 'react-editor-js'
import { NoteResponse } from '../../../network/proto/protos'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import './editor.css'
import './listblock.css'
import { EDITOR_TOOLS, defaultData } from './Tools/EditorTools'

@observer
class Editor extends React.Component<{ note?: NoteResponse }> {
  state = this.context as INoteSpaceState

  onEdit = async (api: EditorAPI) => {
    const {
      noteState: { updateNoteById },
      noteViewState: { editorInstance },
    } = this.state
    if (editorInstance && this.props.note) {
      const savedData = await editorInstance.save()
      await updateNoteById({
        id: this.state.noteState.note?.id!,
        title: this.state.noteState.note?.title!,
        contents: JSON.stringify(savedData),
      })
    }
  }

  addList = () => {
    const { editorInstance } = this.state.noteViewState
    if (editorInstance) {
      editorInstance.blocks.delete()
      editorInstance.blocks.insert('list', { style: 'unordered', items: [] })
      editorInstance.focus(true)
    }
  }

  smartkeyListener = (e: Event) => {
    if (e instanceof KeyboardEvent) {
      if (e.key === '-') {
        this.addList()
      }
    }
  }

  componentDidMount() {
    findDOMNode(this)?.addEventListener('keyup', this.smartkeyListener)
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    findDOMNode(this)?.removeEventListener('keyup', this.smartkeyListener)
  }

  componentDidUpdate(prevProps: { note?: NoteResponse }) {
    if (prevProps.note?.id !== this.props.note?.id) {
      const { editorInstance } = this.state.noteViewState
      const noteContents = this.state.noteState.note?.contents
      const contents = noteContents ? JSON.parse(noteContents) : defaultData(0)
      if (editorInstance?.blocks) {
        editorInstance?.blocks.clear()
        editorInstance?.blocks.render(contents)
      }
    }
  }

  render() {
    const {
      noteState: { note },
      noteViewState,
    } = this.state
    const data = note?.contents
      ? (JSON.parse(note.contents) as OutputData)
      : defaultData(0)
    return (
      <EditorJs
        instanceRef={async (instance) => {
          await instance.isReady
          noteViewState.setEditorInstance(instance)
        }}
        tools={EDITOR_TOOLS}
        data={data}
        autofocus={true}
        onChange={(api) => this.onEdit(api)}
      />
    )
  }
}

Editor.contextType = NoteSpaceContext

export { Editor }
