import React from 'react'
import Button from '../../../base/Button'

export interface BlueButtonProps {
  text: string
}

export default ({ text }: BlueButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="blue"
  />
)
