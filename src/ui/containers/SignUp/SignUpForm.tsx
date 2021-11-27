import React from 'react'
import { useHistory } from 'react-router-dom'
import { UserStore } from 'stores/UserStore'
import { AuthForm } from 'ui/composites/AuthForm'

export const SignUpForm = () => {
  const history = useHistory()
  const [showError, setShowError] = React.useState(false)
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
    const registerSuccess = await UserStore.register(userRegisterInfo)
    if (registerSuccess) {
      history.push('/note-space')
    } else {
      setShowError(true)
    }
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
  const closeError = () => {
    setShowError(false)
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
      showError={showError}
      closeError={closeError}
    />
  )
}
