import React from 'react'
import { AuthForm } from 'ui/composites/AuthForm'
import { UserStore } from 'stores/UserStore'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
export const LoginForm = () => {
  const history = useHistory()
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
      message.error(<span>Yo could you try one more time?</span>, 2000)
    }
  }
  const setPassword = (password: string) => {
    setPasswordValue(password)
  }
  const setEmail = (email: string) => {
    setEmailValue(email)
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
    />
  )
}
