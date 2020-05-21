import { Input as AntDInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'

export type AntDInputProps = InputProps

export interface IInputProps extends AntDInputProps {}

export const Input = ({ ...antdprops }: IInputProps) => (
  <AntDInput {...antdprops} />
)
export const PasswordInput = ({ ...antdprops }: IInputProps) => (
  <AntDInput.Password {...antdprops} />
)
