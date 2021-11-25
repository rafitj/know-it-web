import React from 'react'
import NoteSpace from '../NoteSpace'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/note-space">
          <NoteSpace />
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
