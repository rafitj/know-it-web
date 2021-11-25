import React from 'react'
import styled from 'styled-components'
import Input, { AntDInputProps, PasswordInput } from '../../../base/Input'
import { colors } from '../../../base/theme'
export interface FormInputProps extends AntDInputProps {
  label?: string
  defaultVal?: string
  password?: boolean
}

const StyledInputContainer = styled.div`
  margin: 16px;
  font-family: Arial;
  .ant-input-wrapper {
    border-radius: 8px;
    box-shadow: ${`3px 3px ${colors.grey}`};
    background: ${colors.black};
    padding: 8px;
    padding-right: 1px;
  }
  .ant-input-group-addon {
    color: ${colors.white};
    background-color: ${colors.black};
    padding: 5px 10px;
  }
  .ant-input {
    font-size: 1rem;
    color: ${colors.black};
    border: 2px solid ${colors.black};
    padding: 4.5px 5px 5px 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .ant-input: focus {
    outline: none;
  }
  .ant-input-password-icon svg {
    fill: ${colors.white};
    stroke: ${colors.white};
    padding-left: 5px;
    padding-right: 8px;
  }
`

export default ({ label, defaultVal, password, ...rest }: FormInputProps) =>
  password ? (
    <StyledInputContainer>
      <PasswordInput addonBefore={label} {...rest} />
    </StyledInputContainer>
  ) : (
    <StyledInputContainer>
      <Input addonBefore={label} defaultValue={defaultVal} {...rest} />
    </StyledInputContainer>
  )
