import { Input } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap, PlusCircle as PlusIcon, XSquare } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: ${colors.white};
    border-color: ${colors.green};
  }
`

@observer
class NewFile extends React.Component {
  state = {
    newFileName: '',
    context: this.context as INoteSpaceState,
  }

  // tslint:disable-next-line:no-any
  addFile = async (e?: any) => {
    const { noteState, noteViewState } = this.state.context
    const folderId = noteViewState.selectedFolderId

    if (
      (!e || e.key === 'Enter') &&
      this.state.newFileName !== '' &&
      folderId
    ) {
      await noteState.createNote({
        title: this.state.newFileName,
        folderId,
      })
      this.setState({ newFileName: '' })
      noteViewState.setAddFileMode(false)
    }
  }
  render() {
    const { noteViewState } = this.state.context

    return (
      <Flex justifyContent="center" alignItems="center" px={4} mt={2}>
        <Box justifyContent="center" alignItems="center" width={10 / 12}>
          <LineInput
            placeholder="New File"
            value={this.state.newFileName}
            autoFocus={true}
            onChange={(e) => {
              this.setState({ newFileName: e.target.value })
            }}
            onKeyDown={(e) => {
              this.addFile(e)
            }}
            onBlur={this.addFile}
          />
        </Box>
        <IconWrap width={1 / 12} pl={2} onClick={this.addFile}>
          <PlusIcon size={15} color="white" />
        </IconWrap>
        <IconWrap
          width={1 / 12}
          pl={2}
          onClick={() => {
            noteViewState.setAddFileMode(false)
          }}
        >
          <XSquare size={15} color="white" />
        </IconWrap>
      </Flex>
    )
  }
}

NewFile.contextType = NoteSpaceContext

export { NewFile }
