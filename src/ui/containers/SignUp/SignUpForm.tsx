import React from 'react'
import { AuthForm } from 'ui/composites/AuthForm'
import { UserStore } from 'stores/UserStore'

export const SignUpForm = () => {
  const [passwordValue, setPasswordValue] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const [nameValue, setNameValue] = React.useState('')
  const emailRegister = async () => {
    const userRegisterInfo = {
      email: emailValue,
      firstName: nameValue,
      lastName: 'SMD',
      password: passwordValue,
    }
    await UserStore.register(userRegisterInfo)
  }
  const setPassword = (password: string) => {
    setPasswordValue(password)
  }
  const setEmail = (email: string) => {
    setEmailValue(email)
  }
  const setName = (name: string) => {
    setNameValue(name)
  }
  return (
    <AuthForm
      title="Register."
      emailText="Join with Email"
      googleText="Join with Google"
      fbText="Join with Facebook"
      rerouteBtnText="Let's get you home"
      rerouteText="Already have an account?"
      reroute="/login"
      hasNameInput={true}
      setPassword={setPassword}
      setEmail={setEmail}
      setName={setName}
      emailClick={emailRegister}
    />
  )
}
