import 'antd/dist/antd.css'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import { IGetFolderWithNotesResponse } from 'network/proto/response/IGetFolderWithNotesResponse'
import React from 'react'
import { Zap } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { SubMenu } from '../../base/Menu'
import { FileMenuItem } from './FileMenuItem'
import { NewFile } from './NewFile'

export interface IFolderSubMenu {
  folder: IGetFolderWithNotesResponse
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

export const FolderSubMenu = observer(
  ({ folder, ...other }: IFolderSubMenu & SubMenuProps) => {
    const selected = folder.id === NoteViewStore.selectedFolderId

    return (
      <SubMenu
        {...other}
        selected={selected}
        highlight={folder.colour}
        key={folder.id}
        title={
          <span>
            <Flex alignItems="center">
              <SubMenuTitle>{folder.title}</SubMenuTitle>
              <ViewFolderSymbol selected={selected} mx={2}>
                <Zap color={colors.yellow} size={12} />
              </ViewFolderSymbol>
            </Flex>
          </span>
        }
        onTitleClick={() => NoteViewStore.setSelectedFolderId(folder.id)}
      >
        {folder &&
          folder.notes &&
          folder.notes.map((note) => (
            <FileMenuItem key={note.id} note={note} />
          ))}
        {NoteViewStore.addFileMode && <NewFile />}
      </SubMenu>
    )
  }
)
