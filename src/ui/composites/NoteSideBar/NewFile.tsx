import { Input } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { NoteStore } from 'stores/NoteStore'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { IconWrap, PlusCircle as PlusIcon, XSquare } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
    border-color: ${colors.green};
  }
`

export class NewFile extends React.Component {
  state = {
    newFileName: '',
  }
  folderId = NoteViewStore.selectedFolderId
  addFile = async (e?: any) => {
    if (
      (!e || e.key === 'Enter') &&
      this.state.newFileName !== '' &&
      this.folderId
    ) {
      await NoteStore.createNote({
        title: this.state.newFileName,
        folderId: this.folderId,
      })
      this.setState({ newFileName: '' })
      NoteViewStore.setAddFileMode(false)
    }
  }
  render() {
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
            NoteViewStore.setAddFileMode(false)
          }}
        >
          <XSquare size={15} color="white" />
        </IconWrap>
      </Flex>
    )
  }
}
