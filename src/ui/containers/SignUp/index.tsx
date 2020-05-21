import React from 'react'
import styled from 'styled-components'
import { Nav } from '../../composites/Nav'
import { SignUpForm } from './SignUpForm'

const Container = styled.div``

export const SignUp = () => {
  return (
    <Container>
      <Nav />
      <SignUpForm />
    </Container>
  )
}
