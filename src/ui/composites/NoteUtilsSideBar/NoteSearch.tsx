import React from 'react'
import { Box } from 'reflexbox'
import { SimpleInput } from 'ui/components/Input/SimpleInput'

interface NoteSearchProps {
  selected: boolean
}

export class NoteSearch extends React.Component<NoteSearchProps> {
  render() {
    return (
      <>
        {this.props.selected && (
          <Box width={1} justifyContent="center">
            <SimpleInput noShadow={true} placeholder="Search" />
          </Box>
        )}
      </>
    )
  }
}
