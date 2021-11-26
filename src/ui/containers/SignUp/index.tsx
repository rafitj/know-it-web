import React from 'react'
import { Nav } from '../../composites/Nav'
import { SignUpForm } from './SignUpForm'
import styled from 'styled-components'

const Container = styled.div`
  
`;

export const SignUp = () => {
  return (
    <Container>
      <Nav />
      <SignUpForm />
    </Container>
  )
}
