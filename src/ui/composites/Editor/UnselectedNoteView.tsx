import { Empty } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { NoteState } from '../../../stores/NoteStore'

import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

@observer
class UnselectedNoteView extends React.Component {
  state = this.context as INoteSpaceState

  makeTemplate = async () => {
    const { folderState, noteState } = this.state
    const folder = await folderState.createFolder({
      title: 'Template Folder',
      colour: 'purple',
    })
    if (folder) {
      await noteState.createNote({
        title: 'Template File',
        folderId: folder.id,
      })
    }
  }
  render() {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          NoteState.recentNotes && NoteState.recentNotes.length > 0 ? (
            <span>Recent Notes</span>
          ) : (
            <span>Select A Note</span>
          )
        }
      >
        {this.state.folderState.folders.length === 0 ? (
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
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex>
              {NoteState.recentNotes?.map(
                (rNote: { id: string; title: string }) => (
                  <Box
                    onClick={() => {
                      this.state.noteState.fetchNote(rNote.id)
                    }}
                  >
                    <HighlightedText
                      key={rNote.id}
                      bordered={true}
                      textColor="black"
                      highlight={'red'}
                    >
                      {rNote.title}
                    </HighlightedText>
                  </Box>
                )
              )}
            </Flex>
          </Flex>
        )}
      </Empty>
    )
  }
}

UnselectedNoteView.contextType = NoteSpaceContext

export { UnselectedNoteView }
