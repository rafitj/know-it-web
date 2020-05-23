import React from 'react'
import { Box } from 'reflexbox'
import { SimpleInput } from 'ui/components/Input/SimpleInput'

interface NoteSearchProps {
  selected: boolean
}

export const NoteSearch = ({ selected }: NoteSearchProps) => {
  return (
    <>
      {selected && (
        <Box width={1} justifyContent="center">
          <SimpleInput noShadow placeholder="Search" />
        </Box>
      )}
    </>
  )
}
