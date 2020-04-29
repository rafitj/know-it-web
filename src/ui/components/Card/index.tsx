import React from 'react'
import Card from '../../base/Card'

export interface CardProps {
  children: React.ReactNode
  width?: number
  height?: number
  invert?: boolean
  block?: boolean
  textAlign?: 'center' | 'left' | 'right'
}

export default ({
  children,
  width,
  height,
  invert,
  block,
  textAlign = 'center',
}: CardProps) => (
  <Card
    invert={invert}
    width={width}
    height={height}
    block={block}
    textAlign={textAlign}
  >
    {children}
  </Card>
)
