import EditorJsType, {
  API as EditorAPI,
  OutputData,
} from '@editorjs/editorjs/types'
import React from 'react'
import EditorJs from 'react-editor-js'
import './editor.css'
import { EDITOR_TOOLS, defaultData } from './Tools/EditorTools'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

export interface EditorProps {
  noteId?: number
  editorInstance?: EditorJsType
  setEditorInstance: React.Dispatch<
    React.SetStateAction<EditorJsType | undefined>
  >
}

export const Editor = ({
  noteId,
  editorInstance,
  setEditorInstance,
}: EditorProps) => {
  const [data, setData] = React.useState<OutputData>(defaultData(noteId))
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
      editorInstance?.blocks.render(defaultData(noteId))
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
