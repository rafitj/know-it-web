import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { Frown, Plus } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import { IconWrap } from '../../base/Icons'
import { colors } from '../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

@observer
class EmptyFolder extends React.Component<{ folderId: string }> {
  state = this.context as INoteSpaceState
  setAddFileMode = () => {
    this.state.noteViewState.setSelectedFolderId(this.props.folderId)
    this.state.noteViewState.setAddFileMode(true)
  }
  render() {
    return (
      !this.state.noteViewState.addFileMode && (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px={4}
          mt={2}
          color={`${colors.white}`}
          opacity={0.5}
        >
          <Flex mx={2} alignItems="center" justifyContent="center">
            <Frown size={15} />
            <Box ml={2}>No Files</Box>
          </Flex>
          <IconWrap onClick={this.setAddFileMode}>
            <Plus size={16} />
          </IconWrap>
        </Flex>
      )
    )
  }
}

EmptyFolder.contextType = NoteSpaceContext

export { EmptyFolder }
