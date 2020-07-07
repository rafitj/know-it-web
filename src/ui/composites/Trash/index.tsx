import { Empty, Modal } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Trash as TrashIcon } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap } from '../../base/Icons'
import { colors } from '../../base/theme'
import { SubHeader } from '../../components/Typography/Subheader'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'
import { EmptyTrash } from './EmptyTrash'
import { TrashItem } from './TrashItem'

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border: 3px solid ${colors.black};
    border-radius: 10px;
  }
`
const StyledFlex = styled(Flex)`
  &:hover {
    cursor: pointer;
    background-color: ${colors.darkBlack};
  }
  color: white;
  transition: all 0.25s ease;
`

@observer
class FileTrash extends React.Component {
  state = { context: this.context as INoteSpaceState, showTrashModal: false }

  showModal = () => {
    this.setState({ showTrashModal: true })
    this.context.folderState.fetchNotesInTrash()
  }
  closeModal = () => {
    this.setState({ showTrashModal: false })
  }
  render() {
    const { notesInTrash } = this.state.context.folderState
    return (
      <>
        <StyledFlex
          width="100%"
          p={2}
          justifyContent="center"
          onClick={this.showModal}
          alignItems="center"
        >
          <IconWrap mx={1} height={25}>
            <TrashIcon color="white" size={16} />
          </IconWrap>
          Trash
        </StyledFlex>
        <StyledModal
          centered={true}
          visible={this.state.showTrashModal}
          footer={null}
          onCancel={this.closeModal}
        >
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb={2}>
              <SubHeader>Trash</SubHeader>
            </Box>
            {notesInTrash.length === 0 && (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={<span>Trash is empty!</span>}
              />
            )}
            <Box overflowY="scroll" maxHeight={500} px={4} width={'100%'}>
              {notesInTrash.map((note) => (
                <TrashItem key={note.id} note={note} />
              ))}
            </Box>
            {notesInTrash.length !== 0 && (
              <>
                <Box mt={3}>
                  All files in trash will be deleted after 30 days.
                </Box>
                <Box>
                  <EmptyTrash />
                </Box>
              </>
            )}
          </Flex>
        </StyledModal>
      </>
    )
  }
}

FileTrash.contextType = NoteSpaceContext
export { FileTrash }
