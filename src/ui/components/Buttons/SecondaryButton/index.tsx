import React from 'react'
import Button from '../../../base/Button'

export interface SecondaryButtonProps {
  text: string
}

export default ({ text }: SecondaryButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="white"
  />
)
