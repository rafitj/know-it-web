import React from 'react'
import { AuthForm } from 'ui/composites/AuthForm'

export const SignUpForm = () => (
  <AuthForm
    title="Register."
    emailText="Join with Email"
    googleText="Join with Google"
    fbText="Join with Facebook"
    rerouteBtnText="Let's get you home"
    rerouteText="Already have an account?"
    reroute="/login"
  />
)
