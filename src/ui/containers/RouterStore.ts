import { History, createBrowserHistory } from 'history'
import { action, observable } from 'mobx'

class RouterStore {
  @observable
  history = createBrowserHistory()

  @action
  specifyHistory(history: History) {
    this.history = history
  }

  @action
  push(location: string) {
    this.history.push(location)
  }
}
const routerStore = new RouterStore()
export { routerStore as RouterStore }
