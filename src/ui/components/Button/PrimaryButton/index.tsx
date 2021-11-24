import React from 'react'
import Button, { IButtonProps } from '../../../base/Button'

export type PrimaryButtonProps = Omit<
  IButtonProps,
  'fontColor' | 'borderColor' | 'backgroundColor'
>

export default ({ text, ...rest }: PrimaryButtonProps) => (
  <Button
    text={text}
    fontColor="white"
    borderColor="transparent"
    backgroundColor="black"
    {...rest}
  />
)
