import { Popover } from 'antd'
import 'antd/dist/antd.css'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import { GetFolderWithNotesResponse } from 'network/proto/protos'
import React from 'react'
import { Zap } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { SubMenu } from '../../base/Menu'
import { EmptyFolder } from './EmptyFolder'
import { FileMenuItem } from './FileMenuItem'
import { FolderMenuSettings } from './FolderSettings'
import { NewFile } from './NewFile'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'
import './popover.css'

export interface IFolderSubMenu {
  folder: GetFolderWithNotesResponse
}

const SubMenuTitle = styled.span`
  transition: all 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`

const ViewFolderSymbol = styled(Box)<{ selected: boolean }>`
  transition: 'all 0.25s ease';
  opacity: ${(props) => (props.selected ? 1 : 0)};
  svg {
    fill: ${colors.yellow};
  }
`
const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  padding: 0;
  margin: 0;
`

@observer
class FolderSubMenu extends React.Component<IFolderSubMenu & SubMenuProps> {
  state = {
    context: this.context as INoteSpaceState,
    newFolderTitle: this.props.folder.title,
    editTitleMode: false,
  }

  editTitle = () => {
    this.setState({ editTitleMode: true })
  }

  setNewFolderTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newFolderTitle: e.target.value })
  }

  render() {
    const { noteViewState, noteState, folderState } = this.state.context

    const selected = this.props.folder.id === noteViewState.selectedFolderId
    const onFolderClick = () => {
      noteViewState.setSelectedFolderId(this.props.folder.id)
      noteViewState.setAddFileMode(false)
    }
    const active = this.props.folder.id === noteState.note?.folderId

    const updateFolderTitle = async () => {
      await folderState.updateFolder({
        id: this.props.folder.id,
        title: this.state.newFolderTitle,
        colour: this.props.folder.colour,
      })
      this.setState({ editTitleMode: false })
    }

    return (
      <SubMenu
        {...this.props}
        selected={selected}
        highlight={this.props.folder.colour}
        key={this.props.folder.id}
        title={
          <span>
            <Popover
              placement="right"
              content={() => (
                <FolderMenuSettings
                  folder={this.props.folder}
                  editTitle={this.editTitle}
                />
              )}
              trigger="hover"
            >
              <Flex alignItems="center">
                <SubMenuTitle>
                  {this.state.editTitleMode ? (
                    <StyledInput
                      autoFocus={true}
                      value={this.state.newFolderTitle}
                      onChange={this.setNewFolderTitle}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          updateFolderTitle()
                        }
                      }}
                      onBlur={updateFolderTitle}
                    />
                  ) : (
                    this.props.folder.title
                  )}
                </SubMenuTitle>
                <ViewFolderSymbol selected={active} mx={2}>
                  <Zap color={colors.yellow} size={12} />
                </ViewFolderSymbol>
              </Flex>
            </Popover>
          </span>
        }
        onTitleClick={onFolderClick}
      >
        {this.props.folder &&
          this.props.folder.notes &&
          this.props.folder.notes.map((note) => (
            <FileMenuItem key={note.id} note={note} />
          ))}
        {this.props.folder.notes.length === 0 && (
          <EmptyFolder folderId={this.props.folder.id} />
        )}
        {selected && noteViewState.addFileMode && <NewFile />}
      </SubMenu>
    )
  }
}

FolderSubMenu.contextType = NoteSpaceContext

export { FolderSubMenu }
