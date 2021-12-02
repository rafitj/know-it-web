import { PageHeader } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Line } from 'ui/components/Line'
import { Editor } from '.'
import { GetFolderWithNotesResponse } from '../../../network/proto/protos'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

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
class NoteView extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { note } = this.state.noteState
    const { folders } = this.state.folderState

    return (
      <>
        <Line />
        <StyledPageHeader
          // tags={[
          //   <Tag key="0" color="blue">
          //     Midterm
          //   </Tag>,
          //   <Tag key="1" color="blue">
          //     Quiz 5
          //   </Tag>,
          // ]}
          title={note?.title}
          subTitle={
            folders.find(
              (folder: GetFolderWithNotesResponse) =>
                folder.id === note?.folderId
            )?.title
          }
        />
        <Line />
        <Editor note={note} />
      </>
    )
  }
}

NoteView.contextType = NoteSpaceContext

export { NoteView }
