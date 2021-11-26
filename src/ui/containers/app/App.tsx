import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { NoteSpace } from '../NoteSpace'
import { SignUp } from '../SignUp'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/note-space">
          <NoteSpace />
        </Route>
        <Route exact={true} path="/signup">
          <SignUp />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
