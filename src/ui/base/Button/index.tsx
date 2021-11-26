import { Button as AntDButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React from 'react'
import { Box, Flex } from 'reflexbox'
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
  icon?: React.ReactNode
}

const ButtonContainer = styled.div<IButtonProps>`
  width: 100%;
  text-align: center;
  display: inline-block;
  .ant-btn {
    height: auto;
    font-weight: bold;
    transition: all 0.2s ease;
    border-radius: 8px;
    border: 2px solid;
    padding: 8px 25px;
    background-color: ${(props) => colors[props.backgroundColor]};
    border-color: ${(props) => colors[props.borderColor]};
    color: ${(props) => colors[props.fontColor]};
    box-shadow: ${`3px 3px ${colors.grey}`};
    font-size: 1.1rem;
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
export const Button = ({
  borderColor,
  text,
  backgroundColor,
  fontColor,
  icon,
  ...antdprops
}: IButtonProps) => (
  <ButtonContainer
    fontColor={fontColor}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
  >
    <AntDButton {...antdprops}>
      <Flex justifyContent="center" alignItems="center" margin={'0 auto'}>
        {icon}
        <Box mx={2}>{text}</Box>
      </Flex>
    </AntDButton>
  </ButtonContainer>
)
