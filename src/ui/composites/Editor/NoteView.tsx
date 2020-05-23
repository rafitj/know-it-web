import EditorJsType from '@editorjs/editorjs/types'
import { PageHeader, Tag } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Line } from 'ui/components/Line'
import { Editor } from '.'

interface NoteViewProps {
  currNoteId: number
  currNoteFolderId: number
  editorInstance?: EditorJsType
  setEditorInstance: React.Dispatch<
    React.SetStateAction<EditorJsType | undefined>
  >
}

const StyledPageHeader = styled(PageHeader)`
  background-color: transparent;
  .ant-page-header-heading-tags {
    right: 15px;
    position: absolute;
  }
  .ant-page-header-heading-tags .ant-tag {
    border-radius: 5px;
  }
`
export const NoteView = ({
  currNoteId,
  currNoteFolderId,
  editorInstance,
  setEditorInstance,
}: NoteViewProps) => {
  return (
    <>
      <Line />
      <StyledPageHeader
        tags={[
          <Tag key="0" color="blue">
            Midterm
          </Tag>,
          <Tag key="1" color="blue">
            Quiz 5
          </Tag>,
        ]}
        title={`Note ${currNoteId}`}
        subTitle={`Folder ${currNoteFolderId}`}
      />
      <Line />
      <Editor
        noteId={currNoteId}
        editorInstance={editorInstance}
        setEditorInstance={setEditorInstance}
      />
    </>
  )
}
