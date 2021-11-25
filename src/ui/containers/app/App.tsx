import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { NoteSpace } from '../NoteSpace'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/note-space">
          <NoteSpace />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
