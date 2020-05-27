import { createBrowserHistory } from 'history'
import React from 'react'

export const HistoryContext = React.createContext({
  history: createBrowserHistory(),
})
