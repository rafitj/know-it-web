import React from 'react'
import { AuthForm } from 'ui/composites/AuthForm'

export const LoginForm = () => (
  <AuthForm
    title="Login."
    emailText="Login with Email"
    googleText="Login with Google"
    fbText="Login with Facebook"
    rerouteBtnText="Stop Procrastinating"
    rerouteText="Don't have an account? Why?"
    reroute="/signup"
  />
)
