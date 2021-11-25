import React from 'react'
import Editor from '../../composites/Editor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/notes">
          <Editor />
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
