import React from 'react'
import styled from 'styled-components'
import Input, { AntDInputProps, PasswordInput } from '../../../base/Input'
import { colors } from '../../../base/theme'
export interface FormInputProps extends AntDInputProps {
  label?: string
  defaultVal?: string
  password?: boolean
}

const StyledInput = styled(Input)`
  .ant-input {
    border-radius: 8px;
    border: 2px solid ${colors.black};
    padding: 16px;
    margin: 16px;
    box-shadow: ${`3px 3px ${colors.grey}`};
  }
`

export default ({ label, defaultVal, password, ...rest }: FormInputProps) =>
  password ? (
    <StyledInput addonBefore={label} defaultValue={defaultVal} {...rest} />
  ) : (
    <PasswordInput addonBefore={label} {...rest} />
  )
