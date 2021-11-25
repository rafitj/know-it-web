import React from 'react'
import { Button, IButtonProps } from '../../../base/Button'

export type ReDButtonProps = Omit<
  IButtonProps,
  'fontColor' | 'borderColor' | 'backgroundColor'
>

export const RedButton = ({ text, ...rest }: ReDButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="red"
    {...rest}
  />
)
