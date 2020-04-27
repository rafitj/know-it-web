import { Button } from 'antd'
import React from 'react'

export interface ButtonProps {
  color?: string
  onClick?: () => void
  text?: string
  icon?: React.ReactNode
}

export default ({ color, text, onClick, icon }: ButtonProps) => (
  <Button onClick={onClick} icon={icon}>
    {text}
  </Button>
)
