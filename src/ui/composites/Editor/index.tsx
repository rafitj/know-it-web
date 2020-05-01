import EditorJsType, {
  API as EditorAPI,
  OutputData,
} from '@editorjs/editorjs/types'
import React from 'react'
import EditorJs from 'react-editor-js'
import styled from 'styled-components'
import Card from 'ui/components/Card'
import Text from 'ui/components/Typography/Text'
import { EDITOR_TOOLS, defaultData } from './editor-tools'

export interface Note {
  id: number
  folderId: number
  name: string
  data: string
}

export interface EditorProps {
  noteId?: number
}

const EditorContainer = styled.div`
  &:hover {
    cursor: text;
  }
  .codex-editor__redactor {
    padding: 0 !important;
    padding-bottom: 2rem !important;
  }
`
export default ({ noteId }: EditorProps) => {
  const [data, setData] = React.useState<OutputData>(defaultData(noteId))

  const [status, setStatus] = React.useState('Loading')

  let editorInstance: EditorJsType

  const onEdit = async (API: EditorAPI) => {
    const savedData = await editorInstance.save()
    setData(savedData)
    setStatus('Saved')
    setTimeout(() => {
      setStatus('')
    }, 1000)
  }
  return (
    <Card width={750} textAlign={'left'}>
      <Text>{status}</Text>
      <EditorContainer>
        <EditorJs
          instanceRef={(instance) => (editorInstance = instance)}
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
      </EditorContainer>
    </Card>
  )
}
