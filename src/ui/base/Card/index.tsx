import { Card as AntDCard } from 'antd'
import { CardProps } from 'antd/lib/card'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export type AntDCardProps = Pick<CardProps, 'loading' | 'size'>

export interface ICardProps extends AntDCardProps {
  children: React.ReactNode
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
  invert?: boolean
  width?: number
  height?: number
  block?: boolean
}

const CardContainer = styled.div<ICardProps>`
  .ant-card {
    width: 100% !important;
    font-family: Arial;
    border-radius: 8px;
    border: ${`2px solid ${colors.black}`};
    box-shadow: ${`3px 3px ${colors.grey}`};
    text-align: ${(props) => props.textAlign};
    background-color: ${(props) =>
      props.invert ? colors.black : colors.white};
    width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
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
  ...antdprops
}: ICardProps) => (
  <CardContainer
    invert={invert}
    width={width}
    height={height}
    textAlign={textAlign}
    block={block}
  >
    <AntDCard {...antdprops}>{children}</AntDCard>
  </CardContainer>
)
