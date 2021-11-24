import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

export const { Text, Title, Paragraph } = Typography

export interface ITypographyProps {
  children: React.ReactNode
}

const TextContainer = styled.div`
  font-family: Arial;
`
export default ({ children }: ITypographyProps) => (
  <TextContainer>{children}</TextContainer>
)
