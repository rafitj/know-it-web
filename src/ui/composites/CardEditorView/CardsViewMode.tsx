import { observer } from 'mobx-react'
import React from 'react'
import { GetFolderWithNotesResponse } from '../../../network/proto/protos'
import { NoteCardHeader } from '../Common/NoteCardHeader'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { CardDisplayButtons } from './CardDisplayButtons'
import { CardsDisplay } from './CardsDisplay'

@observer
class CardsViewMode extends React.Component<any, any> {
  state = this.context as INoteSpaceState
  render() {
    const { note } = this.state.noteState
    const { folders } = this.state.folderState
    return (
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
        <CardsDisplay />
        <CardDisplayButtons />
      </>
    )
  }
}
CardsViewMode.contextType = NoteSpaceContext
export { CardsViewMode }
