import EditorJsType, {
  API as EditorAPI,
  OutputData,
} from '@editorjs/editorjs/types'
import React from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_TOOLS, defaultData } from './editor-tools'
import './editor.css'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

export interface EditorProps {
  noteId?: number
}

export const Editor = ({ noteId }: EditorProps) => {
  const [data, setData] = React.useState<OutputData>(defaultData(noteId))
  const [status, setStatus] = React.useState('Loading')
  const [editorInstance, setEditorInstance] = React.useState<EditorJsType>()

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
