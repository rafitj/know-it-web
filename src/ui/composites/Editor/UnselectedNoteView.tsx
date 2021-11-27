import { Empty } from 'antd'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'

export const UnselectedNoteView = () => {
  const makeTemplate = async () => {
    const folder = await FolderStore.createFolder({ title: 'Template Folder' })
    NoteStore.createNote({ title: 'Template File', folderId: folder.id })
  }
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>Select a Note</span>}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box
          onClick={() => {
            makeTemplate()
          }}
        >
          <HighlightedText bordered={true} textColor="black" highlight={'red'}>
            Use Template
          </HighlightedText>
        </Box>
      </Flex>
    </Empty>
  )
}
