import { Popover } from 'antd'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { HighlightText } from '../../components/Typography/HighlightText'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

class EmptyTrash extends React.Component {
  state = { context: this.context as INoteSpaceState, showPopover: false }
  closePopover = () => {
    this.setState({ showPopover: false })
  }
  handlePopoverChange = (visible: boolean) => {
    this.setState({ showPopover: visible })
  }

  empty = () => {
    this.state.context.folderState.emptyTrash()
  }
  render() {
    return (
      <Popover
        trigger="click"
        visible={this.state.showPopover}
        onVisibleChange={this.handlePopoverChange}
        placement="bottom"
        content={
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box mb={2}>Are you sure? We can't undo this bro... </Box>
            <Flex>
              <Box onClick={this.empty} mx={1}>
                <HighlightText highlight="red">Yes</HighlightText>
              </Box>
              <Box onClick={this.closePopover} mx={1}>
                <HighlightText highlight="blue">No</HighlightText>
              </Box>
            </Flex>
          </Flex>
        }
      >
        <Box mt={2}>
          <HighlightText highlight="red">Delete all now.</HighlightText>
        </Box>
      </Popover>
    )
  }
}

EmptyTrash.contextType = NoteSpaceContext

export { EmptyTrash }
