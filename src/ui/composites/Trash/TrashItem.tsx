import { observer } from 'mobx-react'
import React from 'react'
import { Plus } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap } from '../../base/Icons'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { BriefNoteDescriptionResponse } from 'network/proto/protos'
import { Tooltip } from 'antd'

const StyledItem = styled(Flex)`
  border-radius: 8px;
  background-color: ${colors.black};
  color: white;
  width: 85%;
  padding: 3px 15px;
  margin: 3px;
  &:hover {
    background-color: ${colors.black};
  }
`
@observer
class TrashItem extends React.Component<{
  note: BriefNoteDescriptionResponse
}> {
  state = { context: this.context as INoteSpaceState }
  restoreNote = () => {
    const { noteState, folderState } = this.state.context
    noteState.recoverNote(this.props.note.id)
    folderState.fetchNotesInTrash()
  }
  render() {
    const { title, folderTitle } = this.props.note
    return (
      <StyledItem m={1} justifyContent="space-between" alignItems="center">
        <Box>
          <span style={{ opacity: 0.7 }}>{folderTitle} / </span> {title}
        </Box>
        <Tooltip title="Restore Note" placement="right">
          <IconWrap onClick={this.restoreNote}>
            <Plus />
          </IconWrap>
        </Tooltip>
      </StyledItem>
    )
  }
}

TrashItem.contextType = NoteSpaceContext
export { TrashItem }
