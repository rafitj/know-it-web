import { Typography as AntDTypography } from 'antd'
import React from 'react'
import styled from 'styled-components'

export const { Text, Title, Paragraph } = AntDTypography

export interface ITypographyProps {
  children: React.ReactNode
}

const TextContainer = styled.div`
  font-family: Arial;
`
export const Typography = ({ children }: ITypographyProps) => (
  <TextContainer>{children}</TextContainer>
)
