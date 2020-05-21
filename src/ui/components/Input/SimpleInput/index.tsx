import React from 'react'
import styled from 'styled-components'
import { AntDInputProps, Input } from '../../../base/Input'
import { colors } from '../../../base/theme'

export interface SimpleInputProps extends AntDInputProps {
  defaultVal?: string
  password?: boolean
}

const StyledInputContainer = styled.div`
  font-family: Arial;
  .ant-input {
    font-size: 1rem;
    color: ${colors.black};
    box-shadow: ${`3px 3px ${colors.grey}`};
    border: 2px solid ${colors.black};
    padding: 8px;
    border-radius: 8px;
    width: 100%;
  }
  .ant-input: hover {
    border-right-width: 2px !important;
  }
  .ant-input: focus {
    outline: none;
  }
  .ant-input-password-icon svg {
    fill: ${colors.black};
    stroke: ${colors.black};
    padding: 0 7px;
    filter: drop-shadow(3px 3px ${colors.grey});
  }
`

export const SimpleInput = ({
  defaultVal,
  password,
  ...rest
}: SimpleInputProps) =>
  password ? (
    <StyledInputContainer>
      <Input type="password" {...rest} />
    </StyledInputContainer>
  ) : (
    <StyledInputContainer>
      <Input defaultValue={defaultVal} {...rest} />
    </StyledInputContainer>
  )
