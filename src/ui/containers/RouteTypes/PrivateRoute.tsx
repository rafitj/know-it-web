import { observer } from 'mobx-react'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { UserStore } from 'stores/UserStore'

@observer
export class PrivateRoute extends React.Component<RouteProps> {
  isAuthenticated = UserStore.isSignedIn
  render() {
    return (
      <Route
        {...this.props}
        render={({ location }) =>
          this.isAuthenticated ? (
            this.props.children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }
}
