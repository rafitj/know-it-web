import { observer } from 'mobx-react'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { PersistenceStore } from 'stores/PersistenceStore'
import { About } from '../About'
import { Downloads } from '../Downloads'
import { Home } from '../Home'
import { Login } from '../Login'
import { NoteSpace } from '../NoteSpace'
import { OAuthRedirect } from '../OAuth/OAuthRedirect'
import { Product } from '../Product'
import { RouterStore } from '../RouterStore'
import { AuthRoute } from '../RouteTypes/AuthRoute'
import { PrivateRoute } from '../RouteTypes/PrivateRoute'
import { SignUp } from '../SignUp'

@observer
export class App extends React.Component {
  fetchUser = async () => {
    await PersistenceStore.fetchItems()
  }
  componentDidMount() {
    this.fetchUser()
  }
  render() {
    return (
      !PersistenceStore.isLoading && (
        <Router history={RouterStore.history}>
          <Switch>
            <PrivateRoute exact={true} path="/note-space">
              <NoteSpace />
            </PrivateRoute>
            <AuthRoute exact={true} path="/signup">
              <SignUp />
            </AuthRoute>
            <AuthRoute exact={true} path="/login">
              <Login />
            </AuthRoute>
            <AuthRoute exact={true} path="/oauth2/authorize">
              <OAuthRedirect />
            </AuthRoute>
            <Route exact={true} path="/downloads">
              <Downloads />
            </Route>
            <Route exact={true} path="/about">
              <About />
            </Route>
            <Route exact={true} path="/product">
              <Product />
            </Route>
            <Route exact={true} path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      )
    )
  }
}
