import { Popover } from 'antd'
import React from 'react'
import { HighlightedText } from '../../components/Typography/HighlightedText'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

class EmptyTrash extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    return (
      <Popover
        trigger="click"
        content={
          <div>
            Are you sure? We can't undo this bro...{' '}
            <HighlightedText onClick={}>Yes</HighlightedText>
          </div>
        }
      >
        Delete all now.
      </Popover>
    )
  }
}

EmptyTrash.contextType = NoteSpaceContext

export { EmptyTrash }
