import React from 'react'
import { Button, IButtonProps } from '../../../base/Button'

export type BlueButtonProps = Omit<
  IButtonProps,
  'fontColor' | 'borderColor' | 'backgroundColor'
>

export const BlueButton = ({ text, ...rest }: BlueButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="blue"
    {...rest}
  />
)
