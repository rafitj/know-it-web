import { Input } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
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

export class NewFolder extends React.Component {
  state = {
    newFolderName: '',
  }
  addFolder = async (e?: any) => {
    if (
      (!e || e.key === 'Enter') &&
      this.state.newFolderName !== '' &&
      this.state.newFolderName
    ) {
      const folder = await FolderStore.createFolder({
        title: this.state.newFolderName,
        colour: 'red',
      })
      this.setState({ newFolderName: '' })
      if (folder) {
        NoteViewStore.setSelectedFolderId(folder.id)
        NoteViewStore.setAddFolderMode(false)
      }
    }
  }
  render() {
    return (
      <Flex justifyContent="center" alignItems="center" px={3}>
        <Box justifyContent="center" alignItems="center" width={10 / 12}>
          <LineInput
            autoFocus={true}
            placeholder="New Folder"
            value={this.state.newFolderName}
            onChange={(e) => {
              this.setState({ newFolderName: e.target.value })
            }}
            onKeyDown={(e) => {
              this.addFolder(e)
            }}
            onBlur={this.addFolder}
          />
        </Box>
        <IconWrap width={1 / 12} pl={2} onClick={this.addFolder}>
          <PlusIcon size={15} />
        </IconWrap>
        <IconWrap
          width={1 / 12}
          pl={2}
          onClick={() => {
            NoteViewStore.setAddFolderMode(false)
          }}
        >
          <XSquare size={15} />
        </IconWrap>
      </Flex>
    )
  }
}
