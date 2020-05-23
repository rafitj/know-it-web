import React from 'react'

interface NoteFilterProps {
  selected: boolean
}
export const NoteFilter = ({ selected }: NoteFilterProps) => {
  return <>{selected && <div>Filter</div>}</>
}
