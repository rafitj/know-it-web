import React from 'react'
interface NoteSearchProps {
  selected: boolean
}

export class NoteSearch extends React.Component<NoteSearchProps> {
  render() {
    return <>{this.props.selected && <div>Coming Soon</div>}</>
  }
}
