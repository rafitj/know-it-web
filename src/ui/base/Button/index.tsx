import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'

export type AntDButtonProps = Omit<
  ButtonProps,
  'danger' | 'type' | 'htmlType' | 'ghost'
>
export interface IButtonProps extends AntDButtonProps {
  text?: string
  borderColor: color
  backgroundColor: color
  fontColor: color
}

const ButtonContainer = styled.div<IButtonProps>`
  display: inline-block;
  .ant-btn {
    height: auto;
    font-weight: bold;
    transition: all 0.2s ease;
    border-radius: 8px;
    border: 2px solid;
    padding: 8px 25px;
    margin: 8px;
    background-color: ${(props) => colors[props.backgroundColor]};
    border-color: ${(props) => colors[props.borderColor]};
    color: ${(props) => colors[props.fontColor]};
    box-shadow: ${`3px 3px ${colors.grey}`};
  }
  .ant-btn:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
  .ant-btn-loading {
    box-shadow: none;
  }
  .ant-btn:hover {
    transform: translate(2px, 2px);
    cursor: pointer;
    box-shadow: none;
  }
  .ant-btn:disabled:hover,
  .ant-btn-loading:hover {
    transform: none;
    cursor: default;
    box-shadow: none;
  }
  .ant-btn-block {
    width: 100%;
  }
  .ant-btn:focus {
    outline: none;
  }
  .ant-btn-loading-icon {
    margin-right: 8px;
  }
  .ant-btn svg {
    fill: ${(props) => colors[props.fontColor]};
    stroke: ${(props) => colors[props.fontColor]};
  }
`
export default ({
  borderColor,
  text,
  backgroundColor,
  fontColor,
  ...antdprops
}: IButtonProps) => (
  <ButtonContainer
    fontColor={fontColor}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
  >
    <Button {...antdprops}>{text}</Button>
  </ButtonContainer>
)
