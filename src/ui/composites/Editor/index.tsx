import EditorJsType, {
  API as EditorAPI,
  OutputData,
} from '@editorjs/editorjs/types'
import React from 'react'
import EditorJs from 'react-editor-js'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
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
  width: 100%;
  min-height: 100vh;
  font-family: Arial;
  text-align: left;
  color: ${colors.black};
  cursor: text;
  .codex-editor__redactor {
    padding: 0 !important;
    padding-bottom: 2rem !important;
  }
  .ce-block__content {
    margin: 0 2rem;
    max-width: none;
  }
  .codex-editor {
    margin-top: 0;
  }
  .ce-toolbar__actions {
    display: none;
  }
  .ce-toolbar__plus {
   left: -25px;
  }
  .ce-toolbar {
    right: auto;
    left: 25px;
  }
  .ce-toolbox {
    background-color: ${colors.white};
  }
`

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
    <Box width={1}>
      <EditorContainer
        onKeyUp={(e) => {
          console.log(e.keyCode)
        }}
        onClick={() => {
          if (editorInstance) {
            editorInstance.focus(true)
          }
        }}
      >
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
      </EditorContainer>
    </Box>
  )
}
