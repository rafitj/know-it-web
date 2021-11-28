import { PageHeader, Tag } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import styled from 'styled-components'
import { Line } from 'ui/components/Line'
import { Editor } from '.'

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

@observer
export class NoteView extends React.Component {
  note = NoteStore.note
  folder = FolderStore.folders.find(
    (folder) => folder.id === this.note?.folderId
  )
  render() {
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
          title={this.note?.title}
          subTitle={this.folder?.title}
        />
        <Line />
        <Editor />
      </>
    )
  }
}
