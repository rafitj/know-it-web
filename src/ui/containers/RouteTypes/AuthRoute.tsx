import { observer } from 'mobx-react'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { UserStore } from 'stores/UserStore'

@observer
export class AuthRoute extends React.Component<RouteProps> {
  isAuthenticated = UserStore.isSignedIn
  render() {
    return (
      <Route {...this.props}>
        {!this.isAuthenticated ? (
          this.props.children
        ) : (
          <Redirect to="/note-space" />
        )}
      </Route>
    )
  }
}
