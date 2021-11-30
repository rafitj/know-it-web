import { API as EditorAPI, OutputData } from '@editorjs/editorjs';
import { observer } from 'mobx-react';
import React from 'react';
import EditorJs from 'react-editor-js';
import { NoteSpaceContext } from '../NoteSideBar/NoteSpaceContext';
import './editor.css';
import { EDITOR_TOOLS, defaultData } from './Tools/EditorTools';

@observer
class Editor extends React.Component {
  state = this.context

  onEdit = async (api: EditorAPI) => {
    const { noteState, noteViewState: { editorInstance, note } } = this.state;

    if (editorInstance && note) {
      const savedData = await editorInstance.save()
      await noteState.updateNoteById({
        id: this.state.noteState.note?.id!,
        title: this.state.noteState.note?.title!,
        contents: JSON.stringify(savedData),
      })
    }
  }

  componentDidMount() {
    const { editorInstance } = this.state.noteViewState

    if (editorInstance?.blocks) {
      editorInstance?.blocks.clear()
      editorInstance?.blocks.render(defaultData(0))
    }
  }

  render() {
    const { noteState: { note }, noteViewState } = this.state
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
