import React from 'react'
import { Card as CardBase } from '../../base/Card'

export interface CardProps {
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
}: CardProps) => (
  <CardBase
    invert={invert}
    width={width}
    height={height}
    block={block}
    textAlign={textAlign}
  >
    {children}
  </CardBase>
)
