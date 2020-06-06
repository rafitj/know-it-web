import { Card as AntDCard } from 'antd'
import { CardProps as AntDCardProps } from 'antd/lib/card'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export interface ICardProps extends AntDCardProps {
  children: React.ReactNode
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
  invert?: boolean
  width?: string
  height?: string
  block?: boolean
  noShadow?: boolean
}

const CardContainer = styled.div<ICardProps>`
  .ant-card {
    width: 100% !important;
    font-family: Arial;
    border-radius: 8px;
    border: ${`2px solid ${colors.black}`};
    ${(props) => !props.noShadow && `box-shadow: ${`5px 5px ${colors.grey}`};`}
    text-align: ${(props) => props.textAlign};
    background-color: ${(props) =>
      props.invert ? colors.black : colors.white};
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    display: ${(props) => (props.block ? 'block' : 'inline-block')};
  }

`

export const Card = ({
  children,
  width,
  height,
  textAlign,
  invert,
  block,
  noShadow,
  ...antdprops
}: ICardProps) => (
  <CardContainer
    invert={invert}
    width={width}
    height={height}
    textAlign={textAlign}
    block={block}
    noShadow={noShadow}
  >
    <AntDCard {...antdprops}>{children}</AntDCard>
  </CardContainer>
)
