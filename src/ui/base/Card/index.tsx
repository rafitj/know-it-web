import { Card } from 'antd'
import { CardProps } from 'antd/lib/card'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export type AntDCardProps = Pick<CardProps, 'loading' | 'size'>

export interface ICardProps extends AntDCardProps {
  children: React.ReactNode
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
  width?: number
  height?: number
}

const CardContainer = styled.div<ICardProps>`
  .ant-card {
    border-radius: 8px;
    border: ${`2px solid ${colors.black}`};
    padding: 32px;
    margin: 16px;
    box-shadow: ${`3px 3px ${colors.grey}`};
    text-align: ${(props) => props.textAlign};
    width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  }
`

export default ({
  children,
  width,
  height,
  textAlign,
  ...antdprops
}: ICardProps) => (
  <CardContainer width={width} height={height} textAlign={textAlign}>
    <Card {...antdprops}>{children}</Card>
  </CardContainer>
)
