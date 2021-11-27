import EditorJsType from '@editorjs/editorjs/types'
import { PageHeader, Tag } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import styled from 'styled-components'
import { Line } from 'ui/components/Line'
import { Editor } from '.'

interface NoteViewProps {
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
export const NoteView = observer(
  ({ editorInstance, setEditorInstance }: NoteViewProps) => {
    const note = NoteStore.note
    const folder = FolderStore.folders.find(
      (folder) => folder.id === note?.folderId
    )
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
          title={note?.title}
          subTitle={folder?.title}
        />
        <Line />
        <Editor
          editorInstance={editorInstance}
          setEditorInstance={setEditorInstance}
        />
      </>
    )
  }
)
