import React from 'react'
import Button from '../../../base/Button'

export interface PrimaryButtonProps {
  text: string
}

export default ({ text }: PrimaryButtonProps) => (
  <Button
    text={text}
    fontColor="white"
    borderColor="transparent"
    backgroundColor="black"
  />
)
