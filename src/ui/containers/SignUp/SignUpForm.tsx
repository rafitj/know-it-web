import { observer } from 'mobx-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthForm } from 'ui/composites/AuthForm'
import { SignUpState } from './SignUpState'

@observer
export class SignUpForm extends React.Component {
  state = new SignUpState()
  history = useHistory()
  render() {
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
        setPassword={this.state.setPassword}
        setEmail={this.state.setEmail}
        setName={this.state.setName}
        emailClick={this.state.attemptRegister}
        showError={this.state.showError}
        closeError={this.state.closeError}
      />
    )
  }
}
