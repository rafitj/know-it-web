import EditorJsType, {
  API as EditorAPI,
  OutputData,
} from '@editorjs/editorjs/types'
import React from 'react'
import EditorJs from 'react-editor-js'
import { NoteStore } from 'stores/NoteStore'
import './editor.css'
import { defaultData, EDITOR_TOOLS } from './Tools/EditorTools'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

export interface EditorProps {
  editorInstance?: EditorJsType
  setEditorInstance: React.Dispatch<
    React.SetStateAction<EditorJsType | undefined>
  >
}

export const Editor = ({ editorInstance, setEditorInstance }: EditorProps) => {
  const note = NoteStore.note
  console.log(note)
  const [data, setData] = React.useState<OutputData>(defaultData(0))
  const [status, setStatus] = React.useState('Loading')
  const onEdit = async (api: EditorAPI) => {
    if (editorInstance) {
      const savedData = await editorInstance.save()
      setData(savedData)
      setStatus('Saved')
      setTimeout(() => {
        setStatus('')
      }, 1000)
    }
  }

  React.useEffect(() => {
    if (editorInstance?.blocks) {
      editorInstance?.blocks.clear()
      editorInstance?.blocks.render(defaultData(0))
    }
  })

  console.log(status)
  return (
    <EditorJs
      instanceRef={(instance) => {
        setEditorInstance(instance)
      }}
      tools={EDITOR_TOOLS}
      data={data}
      autofocus={true}
      onChange={onEdit}
      onReady={() => {
        setStatus('Ready')
        setTimeout(() => {
          setStatus('')
        }, 1000)
      }}
    />
  )
}
