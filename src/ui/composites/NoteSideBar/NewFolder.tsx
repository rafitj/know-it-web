import { Input } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap, PlusCircle as PlusIcon, XSquare } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
    border-color: ${colors.green};
  }
`

@observer
class NewFolder extends React.Component {
  state = {
    newFolderName: '',
    context: this.context as INoteSpaceState,
  }

  // tslint:disable-next-line:no-any
  addFolder = async (e?: any) => {
    const { folderState, noteViewState } = this.state.context
    if (
      (!e || e.key === 'Enter') &&
      this.state.newFolderName !== '' &&
      this.state.newFolderName
    ) {
      const folder = await folderState.createFolder({
        title: this.state.newFolderName,
        colour: 'red',
      })
      this.setState({ newFolderName: '' })
      if (folder) {
        noteViewState.setSelectedFolderId(folder.id)
        noteViewState.setAddFolderMode(false)
      }
    }
  }
  render() {
    const { noteViewState } = this.state.context

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
            onBlur={() => {
              this.addFolder()
              noteViewState.setAddFolderMode(false)
            }}
          />
        </Box>
        <IconWrap width={1 / 12} pl={2} onClick={this.addFolder}>
          <PlusIcon size={15} />
        </IconWrap>
        <IconWrap
          width={1 / 12}
          pl={2}
          onClick={() => noteViewState.setAddFolderMode(false)}
        >
          <XSquare size={15} />
        </IconWrap>
      </Flex>
    )
  }
}

NewFolder.contextType = NoteSpaceContext

export { NewFolder }
