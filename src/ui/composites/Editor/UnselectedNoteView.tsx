import { Empty } from 'antd'
import { observer } from 'mobx-react'
import React from 'react';
import { Box, Flex } from 'reflexbox'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { NoteSpaceContext } from '../NoteSideBar/NoteSpaceContext';

@observer
class UnselectedNoteView extends React.Component {
  state = this.context

  makeTemplate = async () => {
    const { folderState, noteState } = this.state;
    const folder = await folderState.createFolder({
      title: 'Template Folder',
      colour: 'purple',
    })
    if (folder) {
      await noteState.createNote({ title: 'Template File', folderId: folder.id })
    }
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

UnselectedNoteView.contextType = NoteSpaceContext

export { UnselectedNoteView }