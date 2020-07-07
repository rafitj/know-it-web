import React from 'react'
import { Button, IButtonProps } from '../../../base/Button'

export type PrimaryButtonProps = Omit<
  IButtonProps,
  'fontColor' | 'borderColor' | 'backgroundColor'
>

export const PrimaryButton = ({ text, ...rest }: PrimaryButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="white"
    {...rest}
  />
)
