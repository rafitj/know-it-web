import { observer } from 'mobx-react'
import React from 'react'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

@observer
class CardsCreateMode extends React.Component<any, any> {
  state = this.context as INoteSpaceState
  render() {
    return <>EDIT MODE</>
  }
}
CardsCreateMode.contextType = NoteSpaceContext
export { CardsCreateMode }
