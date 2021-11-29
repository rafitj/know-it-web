import 'antd/dist/antd.css'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import { GetFolderWithNotesResponse } from 'network/proto/protos'
import React from 'react';
import { Zap } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { SubMenu } from '../../base/Menu'
import { FileMenuItem } from './FileMenuItem'
import { NewFile } from './NewFile'
import { NoteSpaceContext } from './NoteSpaceContext';

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
@observer
class FolderSubMenu extends React.Component<
  IFolderSubMenu & SubMenuProps
> {
  state = this.context;

  render() {
    const { noteViewState } = this.state;
    const selected = this.props.folder.id === noteViewState.selectedFolderId;

    return (
      <SubMenu
        {...this.props}
        selected={selected}
        highlight={this.props.folder.colour}
        key={this.props.folder.id}
        title={
          <span>
            <Flex alignItems="center">
              <SubMenuTitle>{this.props.folder.title}</SubMenuTitle>
              <ViewFolderSymbol selected={selected} mx={2}>
                <Zap color={colors.yellow} size={12} />
              </ViewFolderSymbol>
            </Flex>
          </span>
        }
        onTitleClick={() =>
          noteViewState.setSelectedFolderId(this.props.folder.id)
        }
      >
        {this.props.folder &&
          this.props.folder.notes &&
          this.props.folder.notes.map((note) => (
            <FileMenuItem key={note.id} note={note} />
          ))}
        {selected && noteViewState.addFileMode && <NewFile />}
      </SubMenu>
    )
  }
}

FolderSubMenu.contextType = NoteSpaceContext

export { FolderSubMenu }

