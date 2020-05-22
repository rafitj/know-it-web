import 'antd/dist/antd.css'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import React from 'react'
import { Zap } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { SubMenu } from '../../base/Menu'
import { FileMenuItem } from './FileMenuItem'
import { NewFile } from './NewFile'

export interface IFolderSubMenu {
  folder: Folder
  setCurrFile: (fileId: number) => void
  setCurrFolder: React.Dispatch<React.SetStateAction<number>>
  addFileMode: boolean
  newFile: (fileName: string, folderId: number) => void
  setAddFileMode: React.Dispatch<React.SetStateAction<boolean>>
  selected: boolean
  currNoteId: number
  currNoteFolderId: number
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

export const FolderSubMenu = ({
  folder,
  setCurrFile,
  setCurrFolder,
  addFileMode,
  newFile,
  setAddFileMode,
  selected,
  currNoteId,
  currNoteFolderId,
  ...other
}: IFolderSubMenu & SubMenuProps) => {
  return (
    <SubMenu
      {...other}
      selected={selected}
      highlight={folder.color}
      key={folder.id.toString()}
      title={
        <span>
          <Flex alignItems="center">
            <SubMenuTitle>{folder.name}</SubMenuTitle>
            <ViewFolderSymbol selected={currNoteFolderId === folder.id} mx={2}>
              <Zap color={colors.yellow} size={12} />
            </ViewFolderSymbol>
          </Flex>
        </span>
      }
      onTitleClick={() => setCurrFolder(folder.id)}
    >
      {folder.notes.map((note) => (
        <FileMenuItem
          key={note.id}
          note={note}
          setCurrFile={setCurrFile}
          selected={currNoteId === note.id}
        />
      ))}
      {addFileMode && (
        <NewFile
          newFile={newFile}
          setAddFileMode={setAddFileMode}
          folderId={folder.id}
        />
      )}
    </SubMenu>
  )
}
