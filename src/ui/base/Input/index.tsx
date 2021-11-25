import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'
import styled from 'styled-components'

export const PasswordInput = Input.Password

export type AntDInputProps = InputProps

export interface IInputProps extends AntDInputProps {}

const InputContainer = styled.div<IInputProps>``

export default ({ ...antdprops }: IInputProps) => (
  <InputContainer>
    <Input {...antdprops} />
  </InputContainer>
)
