import { Modal } from 'antd'
import React from 'react'
import { Trash as TrashIcon } from 'react-feather'
import { Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap } from '../../base/Icons'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

const StyledModal = styled(Modal)`
  border-radius: 8px;
  .ant-modal-content {
    border: 3px solid ${colors.black};
  }
`
class FileTrash extends React.Component {
  state = { context: this.context as INoteSpaceState, showTrashModal: false }
  componentDidMount() {}

  showModal = () => {
    this.setState({ showTrashModal: true })
  }
  closeModal = () => {
    this.setState({ showTrashModal: false })
  }
  render() {
    return (
      <>
        <Flex width="100%" p={2} justifyContent="center">
          <IconWrap width={25} bgcolor="darkBlack" onClick={this.showModal}>
            <TrashIcon color="white" size={16} />
          </IconWrap>
        </Flex>
        <StyledModal
          centered={true}
          visible={this.state.showTrashModal}
          footer={null}
          onCancel={this.closeModal}
        >
          <p>Some contents...</p>
        </StyledModal>
      </>
    )
  }
}

FileTrash.contextType = NoteSpaceContext
export { FileTrash }
