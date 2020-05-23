import { CardProps as AntDCardProps } from 'antd/lib/card'
import React from 'react'
import { Card as CardBase } from '../../base/Card'

export interface CardProps extends AntDCardProps {
  children: React.ReactNode
  width?: string
  height?: string
  invert?: boolean
  block?: boolean
  textAlign?: 'center' | 'left' | 'right'
}

export const Card = ({
  children,
  width,
  height,
  invert,
  block,
  textAlign = 'center',
  ...other
}: CardProps) => (
  <CardBase
    invert={invert}
    width={width}
    height={height}
    block={block}
    textAlign={textAlign}
    {...other}
  >
    {children}
  </CardBase>
)
