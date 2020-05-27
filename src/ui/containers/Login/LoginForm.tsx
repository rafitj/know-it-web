import React from 'react'
import { AuthForm } from 'ui/composites/AuthForm'
import { LoginState } from './LoginState';
import { observer } from 'mobx-react';

@observer
export class LoginForm extends React.Component {
  state = new LoginState();

  render() {
    return (
      <AuthForm
        title="Login."
        emailText="Login with Email"
        googleText="Login with Google"
        fbText="Login with Facebook"
        rerouteBtnText="Stop Procrastinating"
        rerouteText="Don't have an account? Why?"
        reroute="/signup"
        setPassword={this.state.setPassword}
        setEmail={this.state.setEmail}
        emailClick={this.state.attemptLogin}
        showError={this.state.showError}
        closeError={this.state.closeError}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}