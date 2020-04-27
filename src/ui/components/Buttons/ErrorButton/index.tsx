import React from 'react'
import Button from '../../../base/Button'

export interface ErrorButtonProps {
  message: string
}

export default ({ message }: ErrorButtonProps) => (
  <Button color="red" text={message} />
)
