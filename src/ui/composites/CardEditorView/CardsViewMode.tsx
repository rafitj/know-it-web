import { observer } from 'mobx-react'
import React from 'react'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { CardsDisplay } from './CardsDisplay'

@observer
class CardsViewMode extends React.Component {
  state = this.context as INoteSpaceState
  render() {
    return <CardsDisplay />
  }
}
CardsViewMode.contextType = NoteSpaceContext
export { CardsViewMode }
