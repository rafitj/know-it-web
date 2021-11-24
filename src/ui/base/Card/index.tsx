import { Card } from 'antd'
import { CardProps } from 'antd/lib/card'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export type AntDCardProps = Pick<CardProps, 'loading' | 'size'>

export interface ICardProps extends AntDCardProps {
  children?: React.ReactNode
}

const CardContainer = styled.div<ICardProps>`
  .ant-card {
    border-radius: 8px;
    border: ${`2px solid ${colors.black}`};
    padding: 8px;
    margin: 3px;
    box-shadow: ${`3px 3px ${colors.grey}`};
  }
`

export default ({ children, ...antdprops }: ICardProps) => (
  <CardContainer>
    <Card {...antdprops}>{children}</Card>
  </CardContainer>
)
