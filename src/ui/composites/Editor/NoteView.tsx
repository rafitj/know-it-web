import { observer } from 'mobx-react'
import React from 'react'
import { Line } from 'ui/components/Line'
import { Editor } from '.'
import { GetFolderWithNotesResponse } from '../../../network/proto/protos'
import { NoteCardHeader } from '../Common/NoteCardHeader'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

@observer
class NoteView extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { note } = this.state.noteState
    const { folders } = this.state.folderState

    return (
      <>
        <Line />
        <NoteCardHeader
          title={note?.title}
          subTitle={
            folders.find(
              (folder: GetFolderWithNotesResponse) =>
                folder.id === note?.folderId
            )?.title
          }
        />
        <Line />
        <Editor note={note} />
      </>
    )
  }
}

NoteView.contextType = NoteSpaceContext

export { NoteView }
