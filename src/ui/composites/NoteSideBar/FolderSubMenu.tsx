import 'antd/dist/antd.css'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import React from 'react'
import { Zap } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { SubMenu } from '../../base/Menu'
import { FileMenuItem } from './FileMenuItem'
import { NewFile } from './NewFile'
import GetFolderWithNotesResponse = INetwork.GetFolderWithNotesResponse

export interface IFolderSubMenu {
  folder: GetFolderWithNotesResponse
}

const SubMenuTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`

const ViewFolderSymbol = styled(Box)<{ selected: boolean }>`
  transition: 'all 0.25s ease';
  opacity: ${(props) => (props.selected ? 1 : 0)};
  svg {
    fill: ${colors.yellow};
  }
`

export class FolderSubMenu extends React.Component<
  IFolderSubMenu & SubMenuProps
> {
  selected = this.props.folder.id === NoteViewStore.selectedFolderId
  render() {
    return (
      <SubMenu
        {...this.props}
        selected={this.selected}
        highlight={this.props.folder.colour}
        key={this.props.folder.id}
        title={
          <span>
            <Flex alignItems="center">
              <SubMenuTitle>{this.props.folder.title}</SubMenuTitle>
              <ViewFolderSymbol selected={this.selected} mx={2}>
                <Zap color={colors.yellow} size={12} />
              </ViewFolderSymbol>
            </Flex>
          </span>
        }
        onTitleClick={() =>
          NoteViewStore.setSelectedFolderId(this.props.folder.id)
        }
      >
        {this.props.folder &&
          this.props.folder.notes &&
          this.props.folder.notes.map((note) => (
            <FileMenuItem key={note.id} note={note} />
          ))}
        {this.selected && NoteViewStore.addFileMode && <NewFile />}
      </SubMenu>
    )
  }
}
