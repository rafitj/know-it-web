import { Empty } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'

@observer
export class UnselectedNoteView extends React.Component {
  makeTemplate = async () => {
    const folder = await FolderStore.createFolder({
      title: 'Template Folder',
      colour: 'purple',
    })
    NoteStore.createNote({ title: 'Template File', folderId: folder.id })
  }
  render() {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>Select a Note</span>}
      >
        <Flex justifyContent="center" alignItems="center">
          <Box
            onClick={() => {
              this.makeTemplate()
            }}
          >
            <HighlightedText
              bordered={true}
              textColor="black"
              highlight={'red'}
            >
              Use Template
            </HighlightedText>
          </Box>
        </Flex>
      </Empty>
    )
  }
}
