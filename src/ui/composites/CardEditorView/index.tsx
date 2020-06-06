import { Empty } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Flex } from 'reflexbox'
import { GetFolderWithNotesResponse } from '../../../network/proto/protos'
import { NoteCardHeader } from '../Common/NoteCardHeader'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { CardsCreateMode } from './CardsCreateMode'
import { CardsViewMode } from './CardsViewMode'

@observer
class CardEditorView extends React.Component {
  state = this.context as INoteSpaceState
  render() {
    const { note } = this.state.noteState
    const { folders } = this.state.folderState
    return (
      <Flex flexDirection="column">
        {note ? (
          <>
            <NoteCardHeader
              title={note?.title}
              subTitle={
                folders.find(
                  (folder: GetFolderWithNotesResponse) =>
                    folder.id === note?.folderId
                )?.title
              }
            />
            {this.state.cardState.cardInFocusIndex ? (
              <CardsCreateMode />
            ) : (
              <CardsViewMode />
            )}
          </>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span>Select a Card Deck</span>}
          ></Empty>
        )}
      </Flex>
    )
  }
}
CardEditorView.contextType = NoteSpaceContext
export { CardEditorView }
