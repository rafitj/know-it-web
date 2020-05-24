import React from 'react'
import { useHistory } from 'react-router-dom'
import { UserStore } from 'stores/UserStore'
import { AuthForm } from 'ui/composites/AuthForm'

export const LoginForm = () => {
  const history = useHistory()
  const [showError, setShowError] = React.useState(false)
  const [passwordValue, setPasswordValue] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const emailLogin = async () => {
    const userRegisterInfo = {
      username: emailValue,
      password: passwordValue,
    }
    const loginSuccess = await UserStore.login(userRegisterInfo)
    if (loginSuccess) {
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
  const closeError = () => {
    setShowError(false)
  }
  return (
    <AuthForm
      title="Login."
      emailText="Login with Email"
      googleText="Login with Google"
      fbText="Login with Facebook"
      rerouteBtnText="Stop Procrastinating"
      rerouteText="Don't have an account? Why?"
      reroute="/signup"
      setPassword={setPassword}
      setEmail={setEmail}
      emailClick={emailLogin}
      showError={showError}
      closeError={closeError}
    />
  )
}
