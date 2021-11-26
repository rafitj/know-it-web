import { Input as AntDInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'

export const PasswordInput = AntDInput.Password

export type AntDInputProps = InputProps

export interface IInputProps extends AntDInputProps {}

export const Input = ({ ...antdprops }: IInputProps) => <Input {...antdprops} />
