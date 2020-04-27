import React from 'react'
import Button from '../../../base/Button'

export interface RedButtonProps {
  text: string
}

export default ({ text }: RedButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="red"
  />
)
