import React from 'react'

interface NoteFilterProps {
  selected: boolean
}

export class NoteFilter extends React.Component<NoteFilterProps> {
  render() {
    return <>{this.props.selected && <div>Filter</div>}</>
  }
}
