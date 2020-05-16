import React from 'react'
import { Button, IButtonProps } from '../../../base/Button'

export type SecondaryButtonProps = Omit<
  IButtonProps,
  'fontColor' | 'borderColor' | 'backgroundColor'
>

export const SecondaryButton = ({ text, ...rest }: SecondaryButtonProps) => (
  <Button
    text={text}
    fontColor="black"
    borderColor="black"
    backgroundColor="white"
    {...rest}
  />
)
