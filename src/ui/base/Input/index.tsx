import { Input as AntDInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'
import styled from 'styled-components'

export const PasswordInput = AntDInput.Password

export type AntDInputProps = InputProps

export interface IInputProps extends AntDInputProps {}

const InputContainer = styled.div<IInputProps>``

export const Input = ({ ...antdprops }: IInputProps) => (
  <InputContainer>
    <Input {...antdprops} />
  </InputContainer>
)
