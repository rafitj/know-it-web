import React from 'react'
import Card from '../../base/Card'

export interface CardProps {
  children: React.ReactNode
  width?: number
  height?: number
}

export default ({ children, width, height }: CardProps) => (
  <Card width={width} height={height} textAlign="center">
    {children}
  </Card>
)
